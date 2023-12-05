
class PasarPantallas {

constructor (){
  this.estado=0
 this.c=3
 this.juego= new juego(5);
  this.imagenes = new CargarImagenes();
    this.imagenes.cargar();
}

dibujar () {
  
  switch (this.estado) {
    case 0:
     image (this.imagenes.imgdragon, 0, 0 );
      textSize(30);
      text(("El Dragon"),300,300);
      this.boton(530, 530, 70);

      break;

    //case 1:
    // background(80,80,80);
    //  this.juego.dibujar(); 
    //  this.boton(530, 530, 70);
    //  this.boton(130, 530, 70);
    //   if (this.juego.contador >= 3 || this.juego.contadorcomidas >= 15) {

    //  }
 

    //  break;


    case 1:
    image(this.imagenes.imgdragon, 0, 0);
    background(80,80,80);
      image (this.imagenes.imgdragon, 0, 0 );
      this.boton(530, 530, 70);
      fill(255);
      textSize(20);
       text(("En un mundo distópico, \n  los dragones aterrorizan a los humanos."),200,300);
 
      break;
 
      case 2:
  background(0, 0, 255);
  image(this.imagenes.imgdragon, 0, 0);
  this.boton(530, 530, 70);
  textSize(15);
  fill(255);
  text("Los dragones son máquinas de guerra desatando caos.", 200, 300);
  break;

case 3:
  background(0, 0, 255);
  image(this.imagenes.imgdragon, 0, 0);
  this.boton(530, 530, 70);
  textSize (15);
  fill(255);
  text("Ahab, un veterano, \n busca venganza contra el dragón que cambió su vida.", 200, 300);
  break;

case 4:
  background(0, 0, 255);
  image(this.imagenes.imgdragon, 0, 0);
  this.boton(530, 530, 70);
  textSize (15);
  fill(255);
  text("Ahab reúne a valientes dispuestos a enfrentar a los dragones.", 150, 300);
  break;

case 5:
  background(0, 0, 255);
  image(this.imagenes.imgdragon, 0, 0);
  this.boton(530, 530, 70);
  textSize (15);
  fill(255);
  text("Entrenamiento intenso para la batalla contra las bestias de fuego.", 150, 300);
  break;
  
  case 6:
      background(80,80,80);
      this.juego.dibujar(); 
      if (this.juego.contador >= 3 || this.juego.contadorcomidas >= 15) {
       this.boton(530, 530, 70);
      }
break;
 
 case 7:
  background(0, 0, 255);
  image(this.imagenes.imgdragon, 0, 0);
  this.boton(530, 530, 70);
  textSize (15);
  fill(255);
  text("El dragon acaba con todos los soldados y se dirige hacia la ciudad", 150, 300);
  break;
     
      case 8:
  background(0, 0, 255);
  image(this.imagenes.imgdragon, 0, 0);
  this.boton(530, 530, 70);
  textSize (15);
  fill(255);
  text("Ahab y su equipo derrotan a un dragón, demostrando su valentía", 300, 300);
  break;
  
  
        case 9:
  background(0, 0, 255);
  image(this.imagenes.imgdragon, 0, 0);
  this.boton(230, 530, 70);
  this.boton(430, 530, 70);
  fill(0);
  text("si",230, 530,);
  text("no",430, 530,);
  textSize (15);
  text("El dragon se dirige a la ciudad la destruye por completo?", 300, 300);
  break;
  

 case 10:
  background(0, 0, 255);
  image(this.imagenes.imgdragon, 0, 0);
  this.boton(530, 530, 70);
  textSize (15);
  fill(255);
  text("El dragon convierte en ceniza a todo el pueblo", 300, 300);
  break;
  
   case 11:
  background(0, 0, 255);
  image(this.imagenes.imgdragon, 0, 0);
  this.boton(530, 530, 70);
  textSize (15);
  fill(255);
  text("El dragon pasa de largo el pueblo y regresa a su Montaña", 300, 300);
  break;
   
   case 12:
  background(0, 0, 255);
  image(this.imagenes.imgdragon, 0, 0);
  this.boton(530, 530, 70);
  textSize (15);
  fill(255);
  text("El Pueblo logra reenacer con tiempo, pero con la amenaza del dragon siempre latente", 300, 300);
  break;
  
        case 13:
  background(0, 0, 255);
  image(this.imagenes.imgdragon, 0, 0);
  textSize (15);
   this.boton(230, 530, 70);
  this.boton(430, 530, 70);
  fill(0);
  text("A",230, 530,);
  text("B",430, 530,);
  text("Ahab debe tomar una decision,  \n presiona A si debe pensar en el o B si debe pensar en el pueblo", 300, 300);
  break;
  
   case 14:
  background(0, 0, 255);
  image(this.imagenes.imgvillano, 0, 0,width,height);
  this.boton(530, 530, 70);
  textSize (15);
  text("Ahab es corrompido y decide usar todas las riquezas del pueblo para su propio beneficio", 300, 300);
  break;
  
   case 15:
  background(0, 0, 255);
  image(this.imagenes.imgdragon, 0, 0);
  this.boton(530, 530, 70);
  textSize (15);
  fill(255);
  text("Bajo el liderazgo de Ahab el peblo sale adelante y tiene un futuro brillante", 300, 300);
  break;

 case 16:
  background(0, 0, 255);
  image(this.imagenes.imgdragon, 0, 0);
  this.boton(530, 530, 70);
  textSize (15);
  fill(255);
  text("El pueblo cae en una ruina para siempre", 300, 300);
  break;
  
  case 17:
  background(0, 0, 255);
  image(this.imagenes.creditos, 0, 0);
  this.boton(300, 530, 70);
  textSize (15);
  break;

}
}


 boton(x, y, d) {
    if (this.zonaCircular(x, y, d / 2)) {
      fill(200, 100, 60);
    } else {
      fill(255, 0, 0);
    }

    ellipse(x, y, d);
  }

  
  zonaCircular(x, y, r) {
    return dist(mouseX, mouseY, x, y) <= r;
  }


infoPantallas (){
  if (this.estado == 0 && this.zonaCircular(530, 530, 100)) {
    this.estado = 1;
  } else if (this.estado == 1 && this.zonaCircular(530, 530, 100)) {
    this.estado = 2;

  } else if (this.estado == 2 && this.zonaCircular(530, 530, 100)) {
    this.estado = 3;
  }
  if (this.estado == 3 && this.zonaCircular(530, 530, 100)) {
    this.estado = 4;
  } else if (this.estado == 4 && this.zonaCircular(530, 530, 100)) {
    this.estado = 5;
  } else if (this.estado == 5 && this.zonaCircular(530, 530, 100)) {
    this.estado = 6;
  } else if (this.estado==6) {
    if( this.juego.contadorcomidas == 15 && this.zonaCircular(530, 530, 100)) {
    this.estado = 7;}
    if( this.juego.contador == 3 && this.zonaCircular(530, 530, 100)) {
    this.estado = 8;}
  }else if (this.estado == 7 && this.zonaCircular(530, 530, 100)) {
    this.estado = 9;
  }else if (this.estado == 9 && this.zonaCircular(230, 530, 100)) {
    this.estado = 10;
   }else if (this.estado == 9 && this.zonaCircular(430, 530, 100)) {
    this.estado = 11;
    }else if (this.estado == 11 && this.zonaCircular(530, 530, 100)) {
    this.estado = 12;
    }else if (this.estado == 8 && this.zonaCircular(530, 530, 100)) {
    this.estado = 13;
    }else if (this.estado == 13 && this.zonaCircular(230, 530, 100)) {
    this.estado = 14;
   }else if (this.estado == 13 && this.zonaCircular(430, 530, 100)) {
    this.estado = 15;
     }else if (this.estado == 14 && this.zonaCircular(530, 530, 100)) {
    this.estado = 16;
     }else if (this.estado == 10 && this.zonaCircular(530, 530, 100)) {
    this.estado = 17;
      }else if (this.estado == 12 && this.zonaCircular(530, 530, 100)) {
    this.estado = 17;
      }else if (this.estado == 15 && this.zonaCircular(530, 530, 100)) {
    this.estado = 17;
      }else if (this.estado == 16 && this.zonaCircular(530, 530, 100)) {
    this.estado = 17;
     }else if (this.estado == 17 && this.zonaCircular(300, 530, 100)) {
    this.estado = 0;
    this.juego.contadorcomidas=0;
    this.juego.contador=0;
}
}


    manejarTecla(keyCode) {
  this.juego.teclapresionada(keyCode);
}
}
