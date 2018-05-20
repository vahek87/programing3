var socket;

function main() {
    socket = io.connect('http://localhost:3000');

    socket.on('gcel', function (k) {
        ellipse(k[0], k[1], 10, 10)
    });


}



function setup() {
    createCanvas(500, 500);
    background(100);
}

function mouseDragged() {
    socket.emit('kordinatner', [mouseX, mouseY]);
}
window.onload = main;

