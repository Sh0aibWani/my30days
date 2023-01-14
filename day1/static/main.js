"use strict";

// all the audiofiles
let audio_files = new Map(
    [
        ['a', 'sounds/boom.wav'],
        ['s', 'sounds/clap.wav'],
        ['d', 'sounds/hihat.wav'],
        ['f', 'sounds/kick.wav'],
        ['g', 'sounds/openhat.wav'],
        ['h', 'sounds/ride.wav'],
        ['j', 'sounds/snare.wav'],
        ['k', 'sounds/tink.wav'],
        ['l', 'sounds/tom.wav']
    ]
);

// container element of keys
let container = document.querySelector('.container');

// valid key strokes to play
let valid_strokes = 'asdfghjkl';

// store all the drums in a list
let drums = document.querySelectorAll(".drum");

// mapped keys for easy operations
let mapped = [];

for(let drum of drums) {
    mapped.push([String(drum.textContent), drum]);
}

drums = new Map(mapped);

// function to add and remove alert for wrong key press
function alertit() {

    // check if there is alert in document
    // if not then add one
    if (document.querySelector('.alert') == undefined){

        // create alert element
        let alrt = document.createElement('div');
        alrt.setAttribute('class', 'alert');
        alrt.innerHTML = "Wrong Keypress";

        // create delete alert element
        let closebtn = document.createElement('span');
        closebtn.setAttribute('class', 'closebtn');
        closebtn.innerHTML = '&times;';

        // add them to document
        alrt.appendChild(closebtn);
        container.appendChild(alrt);

        // remove them on clicking x
        closebtn.addEventListener("click", () => {
            container.removeChild(document.querySelector('.alert'));
        });
    }
}


// listen for keypresses and change the visuals
document.addEventListener("keydown", (event) => {
    
    // if it is valid stroke
    if (valid_strokes.includes(event.key.toLowerCase())){
        // get the element to animate;
        drums.get(event.key.toUpperCase()).classList.toggle('playing');
        
        // play the respective audio file
        let audiofile = new Audio(audio_files.get(event.key.toLowerCase()));
        audiofile.play();
    }
    // otherwise alert
    else {
        alertit();
    }
});


// when key is up, remove the effects
document.addEventListener("keyup", (event) => {
    drums.get(event.key.toUpperCase()).classList.toggle('playing');
});