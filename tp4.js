// Fermin Milito
// Comision 1
//tp 4
//https://youtu.be/8xdqI6FKUTo

let x, y, px, py, pyfondo;
let ang, dire;
let velx, vely;
let disparo = false;
let pos = [];
let derribado = [];
let cant = 10; 
let cantj= 5;
let tam = 50;
let puntos = 0;
let bombas = 5;
let vidas = 3;
let fondo, calavera, canon, creditos, inicio;

function preload() {
  fondo = loadImage('data/img0.png');
  calavera = loadImage('data/calavera.png');
  canon = loadImage('data/canon.png');
  creditos = loadImage('data/creditos.png');
  inicio = loadImage('data/inicio.png');
}

function setup() {
  createCanvas(500, 500);

  x = width / 2;
  y = height;
  velx = 5;
  vely = 5;
  ang = -90;
  px = x;
  py = y;
  pyfondo = -0;
  vidas = 3;
  puntos = 0;
  empezar = false;
  inicializarObjetivos();

  textSize(30);
}

function draw() {
  image(inicio, 0, 0);
  if (empezar == true) {
    background(50);
    image(fondo, 0, pyfondo);
    if (pyfondo < -500) {
      pyfondo = 0;
    }
    pyfondo--;

    push();
    translate(x, y);
    ang = atan2(mouseY - y, mouseX - x);
    rotate(ang);
    fill(55);
    rectMode(CENTER);
    imageMode(CENTER);
    image(canon, 0, 7);
    fill(150, 80, 0, 200);
    pop();
    if (disparo) {
      px += cos(dire) * velx;
      py += sin(dire) * vely;
    }

    fill(255);
    circle(px, py, 20);
    if (px >= width) {
      velx = -5;
    }
    if (px <= 0) {
      velx = -5;
    }

    if (py > height || py < 0) {
      px = x;
      py = y;
      velx = 5;
      disparo = false;
    }
    objetivos();
  }
}

function objetivos() {
  for (let i = 0; i < cant; i++) {
    for (let j = 0; j < cantj; j++) {
        if( i%3===0 && j%2===0){
 image(calavera, pos[i][j][0] +10 , pos[i][j][1] +10,30,30);
       fill(50,200);
       rect(pos[i][j][0], pos[i][j][1], tam, tam);
      if (derribo(px, py, 20, pos[i][j][0], pos[i][j][1], tam) && !derribado[i][j]) {
           image(calavera, pos[i][j][0] - 10, pos[i][j][1] - 10);
        px = x;
        py = y;
        velx = 5;
        disparo = false;
        background(0, 255, 0);
        vidas--;
        pos[i][j][1] = height + tam;
        derribado[i][j] = true;
      }
}else{
      
      
      fill(0,80,0,200);
      rect(pos[i][j][0], pos[i][j][1], tam, tam);
      
      if (derribo(px, py, 20, pos[i][j][0], pos[i][j][1], tam) && !derribado[i][j]) {
        px = x;
        py = y;
        velx = 5;
        disparo = false;
        background(0, 255, 0);
        puntos++;
        pos[i][j][1] = height + tam;
        derribado[i][j] = true;
      }
      
    }
  }
  
  fill(0, 0, 255);
  text(puntos, 50, 450);
  }
  
  fill(255, 0, 0);
  text(vidas, 100, 450);
  if (puntos >= 10 || vidas <= 0) {
    image(creditos, 0, 0);
  }
}

function derribo(x, y, d, px, py, ptam) {
  let distan = dist(x, y, px, py);
  if (distan < d / 2 + ptam / 2) {
    return true;
  } else {
    return false;
  }
}

function inicializarObjetivos() {
  for (let i = 0; i < cant; i++) {
    pos[i] = [];
    derribado[i] = [];
    for (let j = 0; j < cantj; j++) {
      pos[i][j] = [tam * i, tam * j];
      derribado[i][j] = false;
    }
  }
}


function mousePressed() {
  if (puntos >= 10 || vidas <= 0) {
    if (mouseX > 340 && mouseX < 340 + 123 && mouseY > 417 && mouseY < 417 + 58) {
      vidas = 3;
      puntos = 0;
      inicializarObjetivos();
    }
  } else {
    if (px == x || yx == y) {
      disparo = true;
      dire = ang;
    }
  }
}

function keyPressed() {
  if (key === ' ') {
    empezar = true;
  }
}
