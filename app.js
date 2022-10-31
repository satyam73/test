console.log('Welcome to the Digital Clock Website');

let date = new Date();


let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

const hoursBox = document.getElementById("hours");
const minutesBox = document.getElementById("minutes");
const secondsBox = document.getElementById("seconds");
const am_pm_Box = document.getElementById("am_pm");

if(hours>12){
    hours = hours-12;
}
hoursBox.innerText = hours;
minutesBox.innerText = minutes;
secondsBox.innerText = seconds;


const updateSec = setInterval(secTimer, 1000);
if(hours<9){
    hours = "0" + hours;
}

function secTimer(){
    seconds = seconds + 1;
    secondsBox.innerText = seconds;
    if(seconds>60){
    seconds = seconds-60;
    secondsBox.innerText = seconds;
    minutes = minutes + 1;
    minutesBox.innerText = minutes;
    if(minutes>60){
        minutes = minutes-60;
        minutesBox.innerText = minutes;
        }
    }
}

if(hours<12){
    am_pm_Box.innerText = "AM";
}else{
    am_pm_Box.innerText = "PM";
    hours = hours - 12;
}
// console.log(hours);
// console.log(minutes);
// console.log(seconds);

