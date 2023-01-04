let canvas;
function preload(){
    console.log("Loaded")

}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.hide();
}

function draw(){
    image(canvas, 0, 0, 300, 300);
}

function saveImage(){
    save("Image")
}