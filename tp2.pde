// Fermin Milito 
//Comision 1
//tp2
//https://youtu.be/QYu1xOvKxTg
PImage ilusion;
int ancho;
int cant=15;



void setup () {
size (800, 400);
ilusion = loadImage("ilusion.jpg");
ancho=415/cant;
}


void draw (){
background (255);
stroke(150);
fill (0);
image(ilusion,0,0, width/2, height);
translate (400,10);
circulos (ancho,cant);
}

void circulos(int ancho, int cant) {
  float centro = 8; // Calcular el punto central
  
  for (int i = 0; i < cant; i++) {
    for (int k = 0; k < cant; k++) {
      float d = dist(k, i, cant / 2, cant / 2); // Distancia desde el punto central

      // Calcular el tamaño de la elipse en base a la distancia al centro
      float size = map(d, 0, centro, ancho, 12);
     float size2 = map(d, 0, centro, ancho, 15);
      
      // Calcular la posición de la elipse en base  su distancia al centro
      float xPos = (ancho * cant /2.0) + (i - cant /2.0) * ancho;
      float yPos = (ancho * cant /2.0) + (k - cant /2.0) * ancho;
      mousePress (i,k);
   
      // Calcular el ángulo de rotación basado en la distancia al centro del círculo del medio
      float rotation = map(d, 0, centro, 6, 16) * (cant / 2 - abs(i - cant / 2));
      pushMatrix();
      translate(xPos, yPos);
      if( k<8){
      rotate(mouseX);
      }else{
        rotate(mouseY);
      }
      ellipse(0, 0, size, size2);
      popMatrix();
  
    }
  }
}
boolean par (int a, int b) {
    if ((a + b) % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

void mousePress (int a, int b) {
  if (mousePressed==true){
    if(par(a,b)){
    fill(255,100,150);
    } else { 
      fill(0,0,200);
    }
  }else{
    fill(0);
  }

}
