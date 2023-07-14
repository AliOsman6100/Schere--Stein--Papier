// Get all the images
image_array = [
    'Papier.png',
    'Schere.png',
    'Stein.png',
  ]
  

isAlive = false


/*start button*/

function get_random_image(){
    isAlive = true

    random_index = Math.floor(Math.random() * image_array.length);
    selected_image = image_array[random_index]
    document.getElementById('image_shower').src = `./img/${selected_image}`
}



/*win button*/

let winEl = document.getElementById("player-punkte")
let pointsOne = + 0
winEl.textContent += pointsOne

function winAndTimerOne() {
    if (isAlive === true) {
        pointsOne = pointsOne + 1
        winEl.textContent = "Du: " + pointsOne

        var timeleft = 4;
        var downloadTimer = setInterval(function(){
        timeleft--;
        document.getElementById("timer-el").textContent = timeleft;
        if(timeleft <= 0)
        clearInterval(downloadTimer);
        },1000);

        setTimeout( function() { get_random_image(); }, 4000);

    }
}


/*loose button*/

let loseEl = document.getElementById("bot-punkte")
let pointsTwo = + 0
loseEl.textContent += pointsTwo

function loseAndTimerTwo() {
    if (isAlive === true) {
        pointsTwo = pointsTwo + 1
        loseEl.textContent = "Bot: " + pointsTwo

        var timeleft = 4;
        var downloadTimer = setInterval(function(){
        timeleft--;
        document.getElementById("timer-el").textContent = timeleft;
        if(timeleft <= 0)
        clearInterval(downloadTimer);
        },1000);

        setTimeout( function() { get_random_image(); }, 4000);

    }
}














