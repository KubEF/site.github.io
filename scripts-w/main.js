var myImg = document.querySelector('img');
myImg.onclick = function() {
    var mySrc = myImg.getAttribute('src');
    if (mySrc === 'image/krug.png') {
        myImg.setAttribute('src', 'image/treug.png');
    }else{
        myImg.setAttribute('src', 'image/krug.png');
    }
}
var myButton = document.querySelector('button');
var myHeanding = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Имя сваё введи');
    localStorage.setItem('name', myName);
    myHeanding.textContent = 'Ну привет, ' + myName;
}
if (!localStorage.getItem('name')) {
    setUserName()
}else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Ну привет, ' + storedName;
}
myButton.onclick = function() {
    setUserName();
}