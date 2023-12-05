 class comida {
  constructor(posX,posY,ancho,alto){
    this.posX=posX;
    this.posY=posY;
    this.alto=alto;
    this.ancho=ancho;
    this.imagenes = new CargarImagenes();
    this.imagenes.cargar();
        this.velY= random(2,6);
  }
  
 dibujar (){
   
   fill(0);
   noFill();
   noStroke();
   ellipse(this.posX+40,this.posY,this.ancho,this.alto);
   ellipseMode(CENTER);
   image(this.imagenes.pollo,this.posX,this.posY-20);
    if (this.posY>=0){
     this.posY +=this.velY;
    }
     if (this.posY>600)  {
   this.posY=0;
   this.posX = random(0, 600);
 }
 }
 colisionConDragon(dragon) {
    if (
      this.posX + 40 < dragon.posX + dragon.ancho &&
      this.posX + 40 + this.ancho > dragon.posX &&
      this.posY < dragon.posY + dragon.alto &&
      this.posY + this.alto > dragon.posY
    ) {
      return true;
    } else {
      return false;
    }
  }
}
 
