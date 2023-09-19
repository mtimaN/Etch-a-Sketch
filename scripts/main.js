const DEFAULT_SIZE = 16;
const DEFAULT_CANVAS_SIZE = 600;

var canvas_size = 600;
var size = DEFAULT_SIZE;

function clearGrid(size) {
    let pixels = document.getElementsByClassName("pixel");
    for (let i = 0; i < size * size; ++i) {
        pixels[0].remove();
    }
}

function clearBoard(size) {
    clearGrid(size);
    createGrid(size);
}

function changeSize() {
    let new_size = Number(prompt("What size would you like? Choose a number between 1 and 100."));
    clearGrid(size);
    while (1 > new_size || 100 < new_size)
        new_size = Number(prompt("What size would you like? Choose a number between 1 and 100."));
    size = new_size;
    createGrid(size);
}

function createGrid(size) {
    let canvas = document.getElementsByClassName("canvas")[0];
    for (let i = 0; i < size * size; ++i) {
        var div = document.createElement("div");
        div.id = i;
        div.style.height = `${canvas_size / size}px`;
        div.style.width = `${canvas_size / size}px`;
        div.className = "pixel";
        div.style.backgroundColor = "#ffffff";
        canvas.appendChild(div);
        div.onmouseover = function() {
            this.style.backgroundColor = 'black';
        };
    }
}

function shadow() {
    let pixels = document.getElementsByClassName("pixel");
    for (let i = 0; i < pixels.length; ++i) {
        pixels[i].onmouseover = function() {
            let string = pixels[i].style.backgroundColor.replace(/rgb\(/g, "");
            string = string.replace(/\)/g, "");
            [r, g, b] = string.split(",");
            r -= 26;
            g -= 26;
            b -= 26;
            if (r < 0)
                r = 0;
            if (g < 0)
                g = 0;
            if (b < 0)
                b = 0;

            console.log(r, g, b);
            pixels[i].style.backgroundColor = "#" + (r << 16 | g << 8 | b).toString(16);
        }
    }
}

function rainbow() {
    clearBoard(size);const colorPicker = document.getElementById('colorPicker')
    let pixels = document.getElementsByClassName("pixel");
    console.log(pixels.length);
    for (let i = 0; i < pixels.length; ++i) {
        pixels[i].onmouseover = function() {
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            this.style.backgroundColor = "#" + randomColor;
        }
    }
}

createGrid(size);