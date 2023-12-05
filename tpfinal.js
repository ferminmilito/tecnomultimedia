let objpantallas;

function setup() {
  createCanvas(600, 600);
  fill(200, 0, 0);
  objpantallas = new PasarPantallas();
}


function draw() {
  objpantallas.dibujar();
}

function keyPressed() {
  objpantallas.manejarTecla(keyCode);
}

function mousePressed() {
objpantallas.infoPantallas();
}
