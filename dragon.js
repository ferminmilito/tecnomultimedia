class dragon {
constructor(posX,posY,ancho,alto){
    this.posX= posX;
    this.posY=posY;
    this.alto=alto;
    this.ancho=ancho;
    this.colordragon= color(255,0,200);
    this.vida= 3;
    this.imagenes = new CargarImagenes();
    this.imagenes.cargar();
  }
 
  dibujar(){
    rectMode(CENTER);
    noFill();
    noStroke();
    rect(this.posX,this.posY,this.ancho,this.alto);
    image(this.imagenes.personaje,this.posX-90,this.posY-70);
  }
  
  
  teclapresionada(keyCode){
   if(keyCode == LEFT_ARROW){
     this.moverIzquierda();
   }else if( keyCode == RIGHT_ARROW){
     this.moverDerecha();
  }
  }
  
  
  moverDerecha (){
    this.posX+=35;
   }
  
  moverIzquierda(){
  this.posX -= 35;
  }
  
  vidas(){
    
  }
  
  
  
  
  
}
