let anchoL, altoL;
let cantL = 3;
let x, y, velC, velY, tam;
let estadoLadrillos = [];
let estado = 0;
function setup() {
  createCanvas(400, 400);

  //inicializacion de los ladrillos:
  for ( let i=0; i<cantL; i++) {
    estadoLadrillos[i] = true;
  }
  anchoL = 60;
  altoL = 10;

  //pelotita:
  x = width/2;
  y = height/2;
  tam = 10;
  velX = 1;
  velY = 4;
}


function draw() {
  background(200, 200, 255);
  if ( estado == 0) {
    //dibuja ladrillos:
    dibujarLadrillos();
    //dibujarPelotita:
    dibujarPelotita();
    //mover la pelotita:
    moverPelotita();
    //evaluar colisiones:
    evaluarColision();
  } else if ( estado == 3 ) {
    dibujarLadrillos();
    dibujarPelotita();
    textSize(50);
    textAlign(CENTER, CENTER);
    text("Bien ahí!", width/2, height/2);
  }
}

function dibujarLadrillos() {
  for ( let i=0; i<cantL; i++) {
    if ( estadoLadrillos[i] ) {
      let xL = i*anchoL+(width-anchoL*cantL)/2;
      let yL = 40;
      fill(200, 20, 40);
      rect( xL, yL, anchoL, altoL);
    }
  }
}


function dibujarPelotita() {
  push();
  translate(x, y);
  fill(0, 255, 0);
  ellipse(0, 0, tam, tam);
  pop();
}

function moverPelotita() {
  x+=velX;
  y+=velY;

  //rebota:
  if ( x>width-tam/2 || x < tam/2 ) {
    velX = -velX*random(.5,1.5);
  }
  if ( y>height-tam/2 || y < tam/2 ) {
    velY = -velY;
  }
  x = constrain(x, tam/2, width-tam/2);
  y = constrain(y, tam/2, height-tam/2);
}

function evaluarColision() {
  for ( let i=0; i<cantL; i++) {
    //evaluamos la colision solo contra los ladrillos
    //en estado true
    if ( estadoLadrillos[i] ) {
      let xL = i*anchoL+(width-anchoL*cantL)/2;
      let yL = 40;
      //velar colsion rectangular:
      //borde derecho mayor a borde izquierdo
      //boder izquierdo menor a borde derecho
      //borde inferior mayor al borde superior
      //bodee superior menor al borde inferior
      if ( x-tam/2 < xL+anchoL && x+tam/2 > xL
        && y-tam/2 < yL+altoL && y+tam/2 > yL ) {
        console.log("hay colision con indice "+ i);
        velY = -velY;

        //cambiamos el estado de ese casillero en el array:
        estadoLadrillos[i] = false;

        //evo si quedan ladrillos para ver si gano:
        if ( evaluarSiQuedanLadrillos() == false ) {
          //gano!
          estado = 3;
        }
      }
    }
  }
}


function evaluarSiQuedanLadrillos() {
  //funcion que recorre el estado de cada ladrillo
  //y devuelve true/false  si quedan o no
  let quedan = false;
  for ( let i=0; i<cantL; i++) {
    if ( estadoLadrillos[i] ) {
      quedan = true;
      return quedan;
    }
  }
  return quedan;
}
