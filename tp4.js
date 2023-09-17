let x, y, px, py, pyfondo;
let ang, dire; 
let velx, vely; 
let disparo = false;
let pos = [];
let derribado = []; 
let cant = 20;
let tam = 30;
let puntos = 0;
let  = bombas=5;
let vidas=3;
let pelota= circle;
function preload(){
fondo = loadImage('data/img0.png');
calavera= loadImage('data/calavera.png');
canon= loadImage('data/canon.png');
creditos= loadImage('data/creditos.png');
}



function setup() {
  createCanvas(500, 500);
  x = width/2;
  y = height;
  velx = 5; 
  vely =5;
  ang = -90;
  px = x;
  py = y;
pyfondo=-0
vidas=3;
puntos=0;
for (let i=0; i<cant; i++) {
    pos[i] = [];
    pos[i][0] = random(width); 
    pos[i][1] = random(height/3); 
    pos[i][2] = random(height/2); 
    derribado[i] = false;
  }
  textSize(30);
}


function draw() {
  background(50);
    image(fondo, 0, pyfondo);
    if (pyfondo<-500){
      pyfondo= 0
    }
    pyfondo--;
   
  push();
  translate(x, y);
  ang = atan2(mouseY-y, mouseX-x); // captura el angulo de giro del cañón
  rotate(ang);
  fill(55);
  rectMode(CENTER);
  imageMode(CENTER);
  image(canon, 0, 7);
  fill(150,80,0,200);
  pop();
 if (disparo) {
    px += cos(dire) * velx;
    py += sin(dire) * vely;
  }
 
  fill(255);
  circle(px, py, 20);
  if (px>= width)
  {
    velx= -5
  }
    if (px<= 0)
  {
    velx= -5
  }

 if (py>height || py<0) { 
    px = x;
   py = y;
   velx=5
   disparo = false;
 }
 // puntos
  for (let i=0; i<cant; i++) {
   let r = int(random(256)); 
  let g = int(random(256)); 
  let b = int(random(256));
    fill(r,g,b);
    circle(pos[i][0], pos[i][1], tam);
    if (derribo(px, py, 20, pos[i][0], pos[i][1], tam)&& !derribado[i]) {
         px = x;
    py = y;
     velx=5;
    disparo = false;
      background(0, 255, 0);
      puntos++;
      pos[i][1] = height+tam;
      derribado[i] = true;
    }
  }
  fill(0, 0, 255);
  text(puntos, 50, 450);
  // bombas
  for (let i=0; i<bombas; i++) {
    fill(25);
    circle(pos[i][0], pos[i][2], tam);
    image(calavera, pos[i][0]-10, pos[i][2]-10);
    if (derribo(px, py, 20, pos[i][0], pos[i][2], tam)&& !derribado[i]) {
         px = x;
    py = y;
    velx=5;
    disparo = false;
      background(255, 0, 0);
      vidas--;
      pos[i][2] = height+tam;
      derribado[i] = true;
    }
  }
  fill(255, 0, 0);
  text(vidas, 100, 450);
   if (puntos>=10){
      image(creditos,0,0);
    }
      if (vidas<=0){
      image(creditos,0,0);
    }
}

function derribo (x, y, d, px, py, ptam) {
  let distan = dist(x, y, px, py);
  if (distan<d/2+ptam/2) {
    return true;
  } else {
    return false;
  }
}

function mousePressed() {
  if (px==x || yx==y ); {
  disparo = true;
  dire = ang; 
  }
   if (puntos>=10 || vidas<=0 ){
       if (mouseX > 340 && mouseX < 340 + 123 && mouseY > 417 && mouseY < 417 + 58) {
         vidas=3;
         puntos= 0;
       }
      
    }
}
