var canvas_size = 512;
var size = 16;
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
        canvas.appendChild(div);
        div.onmouseover = function() {
            this.style.backgroundColor = 'black';
        };
    }
}

createGrid(size);