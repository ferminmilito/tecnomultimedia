let objjuego;

function setup() {

  createCanvas(600,600);
   fill(200,0,0);
  objjuego= new juego(5);
}

function preload(){
fondo = loadImage('data/fondo.png');
enemigo = loadImage('data/flecha.png');
pollo = loadImage('data/pollo.png');
personaje = loadImage('data/dragon.png');
corazon = loadImage('data/corazon.png');
cruz = loadImage('data/cruz.png');
im= loadImage('data/im.png');
}

function draw() {
  objjuego.dibujar();
}

function keyPressed(){
  objjuego.teclapresionada(keyCode);
 
}

function mousePressed(){
 objjuego.reinciar(); 
  
}
