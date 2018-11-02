/*
    https://github.com/Benstrocity/dowhat.git
*/
var randArr = ['Get a paintbrush and some of your favorite paint; it\'s time to unleash your inner Picasso!', 'Put on some good shoes, it\'s time to go on a walk through the nearest park or on the closest hiking trail!', 'Find the closest grocery store and buy yourself some baking supplies; you\'re about to bake a cake!', 'Put on something comfy and find a place on the couch or bed, it\'s movie time. Find something you\'ve never seen before!', 'Call up three or four of your closest friends. Get ready for an impromptu board game night!'];
var doWhat = ''; 

startDisplay();
getDoWhat();

function startDisplay () {
    document.getElementById('st-btn').style.display = "block";
    document.getElementById('output').style.display = "none";
    document.getElementById('timer').style.display = "none";
}

function getDoWhat () {
    var randNum = Math.floor(Math.random() * 5);
    var i = randNum;
    doWhat += "<h2>" + randArr[i] + "</h2>";
    document.getElementById('do-what').innerHTML = doWhat;
    
}

function startTimer () {
    document.getElementById('st-btn').style.display = "none";
    document.getElementById('timer').style.display = "block";
    
    var timeleft = 1;
    var timer = setInterval(function(){
    document.getElementById("progressBar").value = 1 - --timeleft;
    if(timeleft === -3){ 
        updateDisplay();
    }
    },1000);
}

function updateDisplay () {
    document.getElementById('output').style.display = "block";
    document.getElementById('refresh-app').style.display = "block";
    document.getElementById('timer').style.display = "none";
}

function updateReload () {
    window.location.reload();
}