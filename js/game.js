/*
    https://github.com/Benstrocity/dowhat.git
*/
var freeArr = ['Free 1', 'Free 2', 'Free 3', 'Free 4', 'Free 5'];
var outArr = ['Out 1', 'Out 2', 'Out 3', 'Out 4', 'Out 5'];
var foodArr = ['Food 1', 'Food 2', 'Food 3', 'Food 4', 'Food 5'];
var entArr = ['Free 1', 'Free 2', 'Free 3', 'Free 4', 'Free 5'];
var doWhat = '';
var displayDoWhat = document.querySelector('#output');
var startOne = document.querySelector('#start-free');
var startTwo = document.querySelector('#start-out');
var startThree = document.querySelector('#start-food');
var startFour = document.querySelector('#start-ent');
var loading = document.querySelector('#timer');

startDisplay();
getDoWhat();

function startDisplay () {
    startOne.style.display = "block";
    startTwo.style.display = "block";
    startThree.style.display = "block";
    startFour.style.display = "block";
    displayDoWhat.style.display = "none";
    loading.style.display = "none";
}

function getDoWhat () {
    var randNum = Math.floor(Math.random() * 5);
    var i = randNum;
    if (getDoWhat == startOne) {
    doWhat += "<h2>" + freeArr[i] + "</h2>";
    document.getElementById('do-what').innerHTML = doWhat; 
    }
}

function startTimer () {
    startOne.style.display = "none";
    startTwo.style.display = "none";
    startThree.style.display = "none";
    startFour.style.display = "none";
    loading.style.display = "block";
    
    var timeLeft = 1;
    var timer = setInterval(function(){
    document.getElementById("progressBar").value = 1 - --timeLeft;
    if(timeLeft === -1){ 
        updateDisplay();
    }
    },1000);
}

function updateDisplay () {
    displayDoWhat.style.display = "block";
    document.getElementById('refresh-app').style.display = "block";
    document.getElementById('timer').style.display = "none";
}

function updateReload () {
    window.location.reload();
}

startOne.addEventListener('click', startTimer);
startTwo.addEventListener('click', startTimer);
startThree.addEventListener('click', startTimer);
startFour.addEventListener('click', startTimer);