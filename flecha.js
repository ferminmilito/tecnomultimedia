class flecha {
  
  constructor(posX,posY,ancho,alto){
    this.posX=posX;
    this.posY=posY;
     this.alto=alto;
    this.ancho=ancho;
    this.velY= random(3,10);
    this.chocador= true;
    this.imagenes = new CargarImagenes();
    this.imagenes.cargar();
  }
   
 dibujar (){
   noFill();
   noStroke();
   rect(this.posX+20,this.posY,this.ancho,this.alto);
   image(this.imagenes.enemigo, this.posX, this.posY);
   if (this.posY>=0){
     this.posY +=this.velY;
    }
     if (this.posY>600) {
   this.posY=0;
    this.posX = random(0, 600)
 }
 }
  colisionConDragon(dragon) {
    if (
      this.posX + 20 < dragon.posX + dragon.ancho &&
      this.posX + 20 + this.ancho > dragon.posX &&
      this.posY < dragon.posY + dragon.alto &&
      this.posY + this.alto > dragon.posY
    ) {
      return true;
    } else {
      return false;
    }
  }

}
   
