"use strict";

// clock container
let clock = document.querySelector(".clock");

// clock hands
let sec_hand = document.querySelector('.sec-hand');
let min_hand = document.querySelector('.min-hand');
let hour_hand = document.querySelector('.hour-hand');


// store the time elements
let seconds;
let minutes;
let hours;

// get the seconds
function getSecs() {
    return (new Date()).getSeconds();
}


// map seconds to degrees
function secsToDegrees() {
    seconds = (new Date()).getSeconds();
    let transition = sec_hand.style.transition;
    if (seconds == 0)
        sec_hand.style.transition = `none`;
    else
        sec_hand.style.transition = transition;
    sec_hand.style.transform = `rotate(${90+(seconds*6)}deg)`;
}

function minsToDegrees() {
    minutes = (new Date()).getMinutes();
    let transition = min_hand.style.transition;
    if (minutes == 0)
        min_hand.style.transition = `none`;
    else
        min_hand.style.transition = transition;
    min_hand.style.transform = `rotate(${90+(minutes*6)}deg)`;
}

function hourToDegrees() {
    hours = (new Date()).getHours()%12;
    let transition = hour_hand.style.transition;
    if (hours == 0)
        hour_hand.style.transition = `none`;
    else
        hour_hand.style.transition = transition;
    console.log(hours%12);
    hour_hand.style.transform = `rotate(${90+(hours*30)}deg)`;
}

setInterval(function() {
    secsToDegrees();
    minsToDegrees();
    hourToDegrees();
},1000);