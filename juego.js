class juego {
  constructor(cantflechas) {
    this.cantflechas = cantflechas
    this.creardragon();
    this.crearflechas();
    this.crearcomida();
    this.contador = 0;
    this.contadorcomidas = 0;
    this.fondoy=-4000;
     this.fondo = loadImage('data/fondo.png');
      this.corazon = loadImage('data/corazon.png');
    this.cruz = loadImage('data/cruz.png');
   
    
  }
 
  dibujar() {
    
  
    if(this.contador>=0,this.contadorcomidas>=0){
    rectMode(CENTER,CENTER);
    image(this.fondo, -300, this.fondoy)
    
   if (this.fondoy > -5000) {
     this.fondoy=this.fondoy+1;
    }
     if (this.fondoy >-200) {
     this.fondoy=-4000
    }
    for (let i = 0; i < this.cantflechas; i++) {
      this.flechas[i].dibujar();
      if (this.flechas[i].colisionConDragon(this.dragon)) {
        this.contador += 1;
        this.flechas[i].posY = 0;
        this.flechas[i].posX = random(0, 600) ;
   
      }
    }

    
    for (let i = 0; i < 6; i++) {
      this.comidas[i].dibujar();
      if (this.comidas[i].colisionConDragon(this.dragon)) {
        this.contadorcomidas += 1;
          this.comidas[i].posY = 0;
          this.comidas[i].posX = random(0, 600) ;
      }
    }
     this.dragon.dibujar();
     image(this.corazon,450, 50);
    image(this.corazon, 500, 50);
    image(this.corazon, 550, 50);
     if (this.contador>=1){
     image(this.cruz,440,40,50,50);
   }
        if (this.contador>=2){
     image(this.cruz,490,40,50,50);
        }
         textAlign(CENTER, CENTER);
    textSize(40);
    fill(0,0,0);
    text(this.contadorcomidas, 50, 50);
   
    }
   

    
    if (this.contador>=3){
      fill(0);
      rectMode(CORNER);
      rect(0,0,600,600);
      textAlign(CENTER);
      textSize(50);
      fill(255,0,50);
      text('PERDISTE',width/2,height/2);
      fill(200,30,0);
          textAlign(CENTER);
          textSize(20);
             text('Pulsa el boton para cotninua',width/2,350);
     
    }
        if (this.contadorcomidas >=15) {
      fill(0);
      rectMode(CORNER);
      rect(0,0,600,600);
      textAlign(CENTER);
      textSize(50);
      fill(0,255,0);
      text('GANASTE',width/2,height/2);
            fill(30,230,0);
            textSize(20);
    textAlign(CENTER);
             text('Pulsa el boton para continuar',width/2,350);
  
    }
    }


 crearcomida(){
      this.comidas =[];
     for (let i=0; i<6;i++){
    this.comidas[i] = new comida (i*105,50,30,30);
     }
 }

     
  //reinciar(){
  //  if(dist(mouseX,mouseY,width/2,height/3*2)<50){
  //    this.contador=0;
  //    this.contadorcomidas=0;
  //}
  //}
  creardragon(){
    this.dragon= new dragon(width/2,500,30,100);
  }
  
    crearflechas(){
    this.flechas =[];
    for (let i=0; i<this.cantflechas;i++){
    this.flechas[i] = new flecha(i*130,50,20,80);
     }
  }
  teclapresionada(keyCode){
   this.dragon.teclapresionada(keyCode); 
  }
  


 


  
  
  
  
  
  

}
