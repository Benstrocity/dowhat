/*
    https://github.com/Benstrocity/dowhat.git
    
    DoWhat is an app designed to change things up a little. If you're bored, fire up DoWhat and change your plans for the day.
*/

//Defining global scope variables and objects
var arrObj = {
    free : [
        'Put on something comfortable and find a good show on your favorite streaming service.', 
        'Find random ingredients in your kitchen and make something interesting! You never know what could turn out delicious.', 
        'Hop on your favorite video game download site and play some new free games.', 
        'Find interesting workshops and conferences going on nearby for free and sign up.', 
        'Do some research and find a new skill or hobby to learn. (Programming, drawing, painting, graphic design, singing, etc.)'
    ],
    outdoors : [
        'Plan a picnic.', 
        'Wait until evening and stargaze.', 
        'Start a small garden.', 
        'Plan a short camping trip.', 
        'Go on a hike.',
        'Go into your city or a nearby city and be a tourist for the day.',
        'Grab some friends and have a water balloon fight.',
        'Get ready to make par. Play some mini golf.',
        'Play some pick-up basketball.',
        'Plan a small scavenger hunt with some friends.',
        'Find a place to have a campfire and make s\'mores',
        'Gather some fishing equipment and go fishing for the day.'
    ],
    food : [
        'Go eat at a local food truck.', 
        'It\'s time for some German food! Find a German restaurant and make reservations.', 
        'Burgers! Burgers! Burgers! Find the best joint in town and get some greasy goodness.', 
        'Take a trip to Italy without leaving the country. Find a good Italian restaurant and enjoy some pasta.', 
        '"When the moon hits your eye like a big pizza pie, that\'s amore..." Pizza is on the menu today.',
        'Fast food. Cheapest place in town. Go.',
        'Enchiladas, tacos, and cheese dip are on the menu. It\'s time for some Mexican food',
        'Feeling thirsty? Treat yourself to a delicious smoothy.',
        'Whether you like sports or not, chicken wings are never a bad thing...grab wings and maybe a beer or two!',
        'You may or may not be a southern native, but you\'re on your way to eat some country cookin\'. Find the best southern, deep fried, gravy covered, restaurant you can.',
        'We all need to eat a little lighter sometimes. Wherever the best salad in town is, that\'s where you will be going.'
    ],
    entertain : [
        'Find a play that is going on near you and buy some tickets.', 
        'Where is the nearest concert venue? Hop online and find a concert near you and buy some tickets!', 
        'Football season? Basketball season? Baseball season? Whichever season you are in, pick up some tickets and go to a ball game.', 
        'Locate the nearest go-cart track and gather some friends to race.', 
        'Lights. Camera. Action. Find a new or interesting movie that is playing and enjoy the show.',
        'Find a dinner play house and have dinner while watching a show.',
        'Plan a trip to an amusement park and take some friends for the day.',
        'Plan a trip to a nearby lake and rent some jet skis to ride.'
    ],
};
var randArr = [arrObj.free, arrObj.outdoors, arrObj.food, arrObj.entertain];
var i;
var j;
var paraOutput = document.querySelector('#para-output');
var displayDoWhat = document.querySelector('#output');
var startOne = document.querySelector('#start-free');
var startTwo = document.querySelector('#start-out');
var startThree = document.querySelector('#start-food');
var startFour = document.querySelector('#start-ent');
var startFive = document.querySelector('#start-any');
var startButtons = document.querySelector('.start');
var refresh = document.querySelector('#refresh-app');
var loading = document.querySelector('#loading');

//Function that starts the program. Function called at bottom of code
function startDisplay () {
    startButtons.style.display = 'block';
    displayDoWhat.style.display = "none";
}

//Functions to randomize based on button click
startOne.addEventListener('click', function() {
    showLoading();
    function showLoading () {
        loading.style.display = "block";
        startButtons.style.display = "none";
        displayDoWhat.style.display = "none";
        refresh.style.display = "none";
        setTimeout(showOutput, 3000);
    }
    
    function showOutput () {
        loading.style.display = "none";
        displayDoWhat.style.display = "block";
        refresh.style.display = "block";
    }
    
    i = Math.floor(Math.random() * 5); //Randomizes a number
    paraOutput.innerHTML = arrObj.free[i]; //Applies random number to array item to display
});

startTwo.addEventListener('click', function() {
    showLoading();
    function showLoading () {
        loading.style.display = "block";
        startButtons.style.display = "none";
        displayDoWhat.style.display = "none";
        refresh.style.display = "none";
        setTimeout(showOutput, 3000);
    }
    
    function showOutput () {
        loading.style.display = "none";
        displayDoWhat.style.display = "block";
        refresh.style.display = "block";
    }
    
    i = Math.floor(Math.random() * 5); //Randomizes a number
    paraOutput.innerHTML = arrObj.outdoors[i]; //Applies random number to array item to display
});

startThree.addEventListener('click', function() {
    showLoading();
    function showLoading () {
        loading.style.display = "block";
        startButtons.style.display = "none";
        displayDoWhat.style.display = "none";
        refresh.style.display = "none";
        setTimeout(showOutput, 3000);
    }
    
    function showOutput () {
        loading.style.display = "none";
        displayDoWhat.style.display = "block";
        refresh.style.display = "block";
    }
    
    i = Math.floor(Math.random() * 5); //Randomizes a number
    paraOutput.innerHTML = arrObj.food[i]; //Applies random number to array item to display
});

startFour.addEventListener('click', function() {
    showLoading();
    function showLoading () {
        loading.style.display = "block";
        startButtons.style.display = "none";
        displayDoWhat.style.display = "none";
        refresh.style.display = "none";
        setTimeout(showOutput, 3000);
    }
    
    function showOutput () {
        loading.style.display = "none";
        displayDoWhat.style.display = "block";
        refresh.style.display = "block";
    }
    
    i = Math.floor(Math.random() * 5); //Randomizes a number
    paraOutput.innerHTML = arrObj.entertain[i]; //Applies random number to array item to display
});

startFive.addEventListener('click', function() {
    showLoading();
    function showLoading () {
        loading.style.display = "block";
        startButtons.style.display = "none";
        displayDoWhat.style.display = "none";
        refresh.style.display = "none";
        setTimeout(showOutput, 3000);
    }
    
    function showOutput () {
        loading.style.display = "none";
        displayDoWhat.style.display = "block";
        refresh.style.display = "block";
    }
    
    i = Math.floor(Math.random() * 4); //Randomizes a number for category
    j = Math.floor(Math.random() * 5); //Randomizes a number for category option
    paraOutput.innerHTML = randArr[i][j]; //Applies random number to array item to display
});

//Function to reload the program when the appropriate element is clicked to refresh the page
refresh.addEventListener('click', function() {
    window.location.reload();
});

//Start code on load
startDisplay();