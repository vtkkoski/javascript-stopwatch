//define vars to hold time values
let seconds = 0;
let minutes = 0;
let hours = 0;

//define vars to hold "display" value
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

//define var to hold setInterval() function
let intervalID = 0;

//define var to hold stopwatch status
let status = "stopped";

function lopeta(){
    status = "stopped";
    intervalID = 0;
    clearInterval(countSpeed);
}

function resetoi(){
    status = "stopped";
    intervalID = 0;
    document.getElementById("display").innerHTML = "00:00:00";
    seconds = 0;
    minutes = 0;
    hours = 0;
    clearInterval(countSpeed);
}

function aloita(){
    if(intervalID === 0) {
        status = "started";
        intervalID = 1000;
        countSpeed = setInterval(stopWatch, intervalID);
        stopWatch();
    }
}

//stopwatch function, logic to determine when to increment next value
function stopWatch(){
    if(intervalID === 1000) {

    seconds++;

    if(seconds / 60 === 1){
        seconds = 0;
        minutes++;

        if(minutes / 60 === 1){
            minutes = 0;
            hours++;
        }
    }

    //if seconds/minutes/hours are only one digit, add a leading 0 to the value
    if(seconds < 10){
    displaySeconds = "0" + seconds.toString();
    }
    else {
    displaySeconds = seconds;
    }

    if(minutes < 10){
    displayMinutes = "0" + minutes.toString();
    }
    else {
    displayMinutes = minutes;
    }

    if(hours < 10){
    displayHours = "0" + hours.toString();
    }
    else {
    displayHours = hours;
    }


    document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;
    }
    else{
        status = "stopped";
        window.clearInterval(intervalID);
    }


}


document.getElementById("start").addEventListener("click", aloita);

document.getElementById("stop").addEventListener("click", lopeta);

document.getElementById("reset").addEventListener("click", resetoi);

