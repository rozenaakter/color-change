// select 7 colors

let colors = ['red', 'blue', 'green', 'orange','purple','green','yellow'];

let button = document.getElementById('button');

button.addEventListener('click', function() {

    // select a random number between 0 - 6

    let index = parseInt((Math.random() * colors.length) + 1);

    // grab the canvas

    let canvas = document.getElementById('canvas');

    canvas.style.background = `${colors[index]}`;
})