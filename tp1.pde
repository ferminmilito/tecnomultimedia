// variables
PImage mardelplata1, mardelplata2, mardelplata3;
PFont mifuente;
int imgX, img3;
int opa1, opa2, opa3;
float posX, posY, ancho, alto;


boolean reanudar;
int segundos;
boolean botonpress;



void setup () {
  size (640, 480);
  textAlign (CENTER, CENTER);
  mifuente= loadFont ("miletra.vlw");
  textFont(mifuente, 30);
  mardelplata1 = loadImage ("mardelplata1.jpg");
  mardelplata2 = loadImage ("mardelplata2.jpg");
  mardelplata3 = loadImage ("mardelplata3.jpg");

  posX= 420;
  posY=360;
  ancho=150;
  alto=50;

  reanudar= false;
  
  img3=1;
  imgX= 0;
  opa1=0;
  opa2=0;
  opa3=0;
}



void draw () {

  background (255);
    fill(0, 0, 255);
  text("presione la pantalla para inicar", width/2, height/2);
  if (reanudar==true) {
    if (frameCount % 60==0) {
      segundos++;
    }
  }



  if (segundos >0) {
    fill (0);
    textSize(32);
    image (mardelplata1, 0, 0, width, height);
    text ("mar del plata, argentina", imgX, height/2);
    if (imgX<width/2) {
      imgX++;
    }
  }


  if (segundos >= 6) {
    image(mardelplata2, 0, 0, width, height);
    textSize(25);
    fill (255, opa1);
    text ("hermoso lugar para vacionar con amigos", width/2, height/4);
    if (opa1<255);
    {
      opa1++;
      if (opa1>50) {
        fill (255, opa2);
        text("playa, casino y mucho mas", width/2, height/3);
        opa2++;
        if (opa2>50) {
          fill (255, opa3);
          textSize(20);
          text("el lugar perfecto para pasar un verano increible", width/2, height/2);
          opa3++;
        }
      }
    }
  }

  if (segundos >12) {
    fill (0);
    image (mardelplata3, 0, 0, width, height);
    textSize (img3);
    text ("que estas esperando para venir", width/2, height/2);
    if (img3<30) {
      img3++;
    }
    fill (0);
    rect(posX, posY, ancho, alto);
    fill(255);
    textSize(15);
    text("reiniciar", posX, posY, ancho, alto);
  }
}




void mousePressed () {
  reanudar=true;
  if (mouseX >posX && mouseX <posX+ancho && mouseY>posY && mouseY <posY+alto) {
    segundos=1;
        img3=1;
    imgX= 0;
    opa1=0;
    opa2=0;
    opa3=0;
    reanudar=true;
  }
}
