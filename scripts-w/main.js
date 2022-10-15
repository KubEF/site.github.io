var randomNumber = Math.floor(Math.random() * 30) + 10;
var question = document.querySelector('.number');
var inputAns = document.querySelector('.inp');
var submit = document.querySelector(".submit");
var version = document.querySelector('.version');
var guessCount = 1;
var resetButton;
question.textContent = String(2**randomNumber);
function checkAns() {
    guessCount += 1;
    var ans = Number(inputAns.value);
    if (guessCount === 3 & ans !== randomNumber){
        version.textContent ="Хахахаха! Ты проиграл!";
        version.style.backgroundColor = 'red';
        GameOver();
    }else{
        if (ans === randomNumber) {
            version.textContent ="Примите мои поздравления, кем бы вы ни были, вы выиграли";
            version.style.backgroundColor = 'green';
            GameOver();
        }else if (ans !== randomNumber){
            version.textContent = 'Неверно, 2 в степени ' + String(ans) + ' это ' + String(2 ** ans);
        }
    }
    inputAns.value= '';
    inputAns.focus();
}

function GameOver () {
    submit.disabled = true;
    inputAns.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Сыграть снова';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
    inputAns.focus();
}

function resetGame() {
    guessCount = 0;
    submit.disabled = false;
    inputAns.disabled = false;
    version.textContent = '';
    version.style.backgroundColor = 'orange';
    resetButton.parentNode.removeChild(resetButton);
    randomNumber = Math.floor(Math.random() * 30) + 10;
    question.textContent = String(2**randomNumber);
}
submit.addEventListener("click", checkAns);

document.addEventListener("keyup", function(a){

    if (a.key === "Enter"){
        if (submit.disabled === true){
            resetGame();
        }else{
        checkAns();
        }
    }
});
