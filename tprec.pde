//Fermín Milito
//Comision 1
//tp3
//https://youtu.be/PiyfLdAs54U


int estado = 0;
int c = 16;
PImage sombra;
PImage [] img = new PImage [c];
String [] historia = new String [c] ;
PFont fuente;
float y, m;
void setup () {
  size (600, 600);

  for (int i = 0; i < c; i++) {
    img[i] = loadImage ( "img" + i + ".png" ) ;
  }

  m=0;
  textSize (20);
  textAlign(CENTER, CENTER);
  fuente = loadFont("ArialMT-48.vlw");

  historia[0]="El Dragon";
  historia[1]= "En un mundo distópico, \n  los dragones aterrorizan a los humanos.";
  historia[2]="Los dragones son máquinas de guerra desatando caos.";
  historia[3]="Ahab, un veterano, \n busca venganza contra el dragón que cambió su vida.";
  historia[4]="Ahab reúne a valientes dispuestos a enfrentar a los dragones.";
  historia[5]="Entrenamiento intenso para la batalla contra las bestias de fuego.";
  historia[6]="Batallas aéreas épicas mientras luchan contra las bstias aladas, \n  el desenlace esta en tus manos quieres seguir el camino A, B o C";
  historia[7]="Ahab y su equipo derrotan a un dragón, demostrando su valentía.";
  historia[8]="Ahab cae derrotado \n sin embargo Kamala logra derrotar al dragon";
  historia[9]="El dragon acaba con todos los soldados y se dirige hacia la ciudad";
  historia[10]="Ahab es alabado y se convierte en el lider de la aldea por lo tanto\n  debe decidir si dividir las riquezas  con el pueblo o quedarselas para el,\n deicde preguntarle su consejero, si el elige la opcion A ayudara al pueblo en caso de elegir \n  la B se quedara con todo para el y sus cercanos";
  historia[11]="Kamala se convierte en un heroe para el pueblo, \n y con la muerte Ahab se queda liderando el pueblo hacia... ";
  historia[12]="Yen la ciudad solo deja cenizas...";
  historia[13]="Ahab te escucha y comparten lsa riquezas entre ustedes dos, \n el pueblo lo padece pero no se entera de este acto egoista de sus dirigentes";
  historia[14]="El pueblo vive en paz y apunta a un futuro mejor";

}
void draw() {
  textFont(fuente);
  fill(255);
  tint(150);

  switch (estado) {
  case 0:
    m=0;
    image (img[0], 0, 0 );
    textSize(40);
    text(historia[0], width/2, 500);
    boton (530, 530, 70);
    flecha();
    break ;

  case 1:

    image (img[1], 0, 0, width, height );
    textSize (15);
    text(historia[1], 70, 190, width, height);
    boton (530, 530, 70);
    flecha();
    break;

  case 2:
    image (img[2], 0, 0,width, height );
    textSize (15);
    text(historia[2], 320, 320, 300, 250);

    boton (530, 530, 70);
    flecha();
    break ;

  case 3:
    image (img[3], 0, 0,width, height );
    textSize (15);
    text(historia[3], 200, 530);
  
    boton (530, 530, 70);
    flecha();

    break;

  case 4:
    image (img [4], 0, 0,width, height );
    textSize(15);
    text(historia[4], 220, 500);
    boton (530, 530, 70);
    flecha();
    break ;

  case 5:
    image (img[5], 0, 0,width, height );
    textSize(20);
    text(historia[5], 300, 50);
    boton (530, 530, 70);
    flecha();
    break;

  case 6:
    image(img[6], 0, 0,width, height);
    textSize(20);
    text(historia[6], 300, 530);
    boton (420, 50, 70);
    boton (310, 50, 70);
    boton (200,50, 70);
    textSize(30);
    fill(255);
    text("C", 420, 50);
    text("B", 310, 50);
    text("A", 200, 50);
    break;

  case 7:
    image(img[7], 0, 0,width, height);
    textSize(15);
    text(historia[7], 300, 100);
    boton (530, 530, 70);
    
    flecha();
    break;

  case 8:
    image(img[8], 0, 0,width, height);
    textSize(15);
    text(historia[8], 200, 350);
    boton (530, 530, 70);
    flecha();
    break;

  case 9:
    
    image(img[9], 0, 0,width, height);
    textSize(15);
    text(historia[9], 270, 200);
    boton (530, 530, 70);
    flecha();
    break;

  case 10:
    
    
    image(img[10], 0, 0,width, height);
    textSize(15);
    text(historia[10], 300, 400);
    boton (530, 530, 70);
    boton (420, 530, 70);
    fill(0);
        text("B", 532, 530);
    text("A", 419, 530);
    break;

  case 11:
    
    image(img[11], 0, 0,width, height);
    textSize(15);
    text(historia[11], 300, 100);
    boton (530, 530, 70);
    flecha();
    break;

  case 12:
    tint(170);
    image(img[12], 0, 0,width, height);
    textSize(15);
    text(historia[12], 300, 100);
    boton (530, 530, 70);
    flecha();
    break;

  case 13:
    image(img[13], 0, 0,width, height);
    textSize(15);
    text(historia[13], 300, 50);
    boton (530, 530, 70);
    flecha();
    break;

  case 14:
    image(img[14], 0, 0,width, height);
    textSize(15);
    text(historia[14], 300,500);
    boton (530, 530, 70);
    flecha();
    break;


  case 15:
    fill(255);
    background(255);
    textSize(30);
    m++;
    fill(0,0,0,m);
    text("FINAL ", 300, 100);
      text("Fermín Milito", 300, 150);
      text("Autor: Ray Bradbury  ", 300, 200);
      text("Toca para reiniciar para ver mas finales", 300, 500);
      botonCuadrado();
  }
}


void mousePressed() {

  if (estado == 0 && zonaCircular(530, 530, 100)) {
    estado = 1;
  } else if (estado == 1 && zonaCircular(530, 530, 100)) {
    estado= 2;
  } else if (estado == 2 && zonaCircular(530, 530, 100)) {
    estado= 3;
  } else if (estado == 3 && zonaCircular(530, 530, 70)) {
    estado= 4;
  } else if (estado == 4 && zonaCircular(530, 530, 100)) {
    estado= 5;
  } else if (estado == 5 && zonaCircular(530, 530, 100)) {
    estado= 6;
  } else if (estado == 6 && zonaCircular(200, 50, 100)) {
    estado= 7;
  } else if (estado == 7 && zonaCircular(530, 530, 100)) {
    estado= 10;
  } else if (estado == 10 && zonaCircular(530, 530, 100)) {
    estado= 13;
    } else if (estado == 10 && zonaCircular(420, 530, 100)) {
    estado= 14;
  } else if (estado == 14 && zonaCircular(530, 530, 100)) {
    estado= 15;
      } else if (estado == 13 && zonaCircular(530, 530, 100)) {
    estado= 15;
  }

  if (estado == 6 && zonaCircular(310, 50, 70)) {
    estado= 8;
  } else if (estado == 8 && zonaCircular(530, 530, 100)) {
    estado= 11;
  } else if (estado == 11 && zonaCircular(530, 530, 100)) {
    estado= 14;
  } else if (estado == 14 && zonaCircular(530, 530, 100)) {
    estado= 15;
  }

  if (estado == 6 && zonaCircular(420, 50, 100)) {
    estado=9 ;
  } else if (estado == 9 && zonaCircular(530, 530, 100)) {
    estado= 12;
  } else if (estado == 12 && zonaCircular(530, 530, 100)) {
    estado= 15;
  }


  if (estado == 15 && zonaCircular(300, 300, 200)) {
    y = 0;
    estado = 0;
  }
}
