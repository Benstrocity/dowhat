/*
    https://github.com/Benstrocity/dowhat.git
    
    DoWhat is an app designed to change things up a little. If you're bored, fire up DoWhat and change your plans for the day.
*/

//Defining global scope variables and objects
var arrObj = {
    free : ['Free 1', 'Free 2', 'Free 3', 'Free 4', 'Free 5'],
    outdoors : ['Out 1', 'Out 2', 'Out 3', 'Out 4', 'Out 5'],
    food : ['Food 1', 'Food 2', 'Food 3', 'Food 4', 'Food 5'],
    entertain : ['Ent 1', 'Ent 2', 'Ent 3', 'Ent 4', 'Ent 5']
};
var paraOutput = document.querySelector('#para-output');
var displayDoWhat = document.querySelector('#output');
var startOne = document.querySelector('#start-free');
var startTwo = document.querySelector('#start-out');
var startThree = document.querySelector('#start-food');
var startFour = document.querySelector('#start-ent');
var startButtons = document.querySelector('.start');
var refresh = document.querySelector('#refresh-app');

//Function that starts the program. Function called at bottom of code
function startDisplay () {
    startButtons.style.display = 'block';
    displayDoWhat.style.display = "none";
}

//Functions to randomize based on button click
function updateOne () {
    startButtons.style.display = "none";
    displayDoWhat.style.display = "block";
    refresh.style.display = "block";
    
    var i = Math.floor(Math.random() * 5); //Randomizes a number
    paraOutput.innerHTML = arrObj.free[i]; //Applies random number to array item to display
}

function updateTwo () {
    startButtons.style.display = "none";
    displayDoWhat.style.display = "block";
    refresh.style.display = "block";
    
    var i = Math.floor(Math.random() * 5); //Randomizes a number
    paraOutput.innerHTML = arrObj.outdoors[i]; //Applies random number to array item to display
}

function updateThree () {
    startButtons.style.display = "none";
    displayDoWhat.style.display = "block";
    refresh.style.display = "block";
    
    var i = Math.floor(Math.random() * 5); //Randomizes a number
    paraOutput.innerHTML = arrObj.food[i]; //Applies random number to array item to display
}

function updateFour () {
    startButtons.style.display = "none";
    displayDoWhat.style.display = "block";
    refresh.style.display = "block";
    
    var i = Math.floor(Math.random() * 5); //Randomizes a number
    paraOutput.innerHTML = arrObj.entertain[i]; //Applies random number to array item to display
}

//Function to reload the program when the appropriate element is clicked to refresh the page
function updateReload () {
    window.location.reload();
}

//Click behavior event listeners
startOne.addEventListener('click', updateOne);
startTwo.addEventListener('click', updateTwo);
startThree.addEventListener('click', updateThree);
startFour.addEventListener('click', updateFour);
refresh.addEventListener('click', updateReload);

//Start code on load
startDisplay();