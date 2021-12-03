let seconds= 0;
let minutes= 0;
let hours= 0;

let watchStatus="stopped";
let interval= null;

let secondsDiv=document.querySelector(".seconds");
let minutesDiv=document.querySelector(".minutes");
let hoursDiv=document.querySelector(".hours");

//Farben für die div Borders --> Ziffern
let digitUppers=["black black lightgray black",
                 "lightgray black lightgray lightgray",
                 "black black black lightgray",
                 "black black black lightgray",
                 "lightgray black black black",
                 "black lightgray black black",
                 "black lightgray black black",
                 "black black lightgray lightgray",
                 "black black black black",
                 "black black black black"];

let digitLowers=["lightgray black black black",
                    "lightgray black lightgray lightgray",
                    "black lightgray black black",
                    "black black black lightgray",
                    "black black lightgray lightgray",
                    "black black black lightgray",
                    "black black black black",
                    "lightgray black lightgray lightgray",
                    "black black black black",
                    "black black black lightgray"];


function stopwatch() {
    seconds++;

    if(seconds/60 ===1){
        seconds = 0;
        minutes++;
        if(minutes/60 === 1){
            minutes=0;
            hours++;
        }
    } 

    setDigits(secondsDiv, seconds/10, seconds%10);
    setDigits(minutesDiv, minutes/10, minutes%10);
    setDigits(hoursDiv, hours/10, hours%10);
}  

function startStop(){
    if(watchStatus === "stopped"){
        interval = window.setInterval(stopwatch,1000);
        document.getElementById("startStop").innerHTML = "Stop";
        watchStatus="started";
    }
    else{
        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Start";
        watchStatus="stopped";
    }
}

   

function setDigits(node, number1, number2) {
    var firstDig= node.children[0];
    var secondDig= node.children[1];

    firstDig.children[0].style.borderColor=digitUppers[number1];
    firstDig.children[1].style.borderColor=digitLowers[number1];

    secondDig.children[0].style.borderColor=digitUppers[number2];
    secondDig.children[1].style.borderColor=digitLowers[number2];
}

function reset(){
    window.clearInterval(interval);

    seconds=0;
    setDigits(secondsDiv,0,0);

    minutes=0;
    setDigits(minutesDiv,0,0);

    hours=0;
    setDigits(hoursDiv,0,0);

    if(watchStatus==="started"){
        watchStatus="stopped";
        document.getElementById("startStop").innerHTML = "Start";
    }
}
