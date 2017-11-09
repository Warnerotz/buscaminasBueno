
export var blanco;
export var bandera;
export var fallo;
export var valor0;
export var valor1;
export var valor2;
export var valor3;
export var valor4;
export var valor5;
export var valor6;
export var valor7;
export var valor8;
export var arrayImg=[];

export function crearImagenes() {
     //variables para las imagenes

    
    blanco = new Image;
    blanco.src = "img/facingDown.png";
    arrayImg[0] =blanco;
    
    bandera = new Image;
    bandera.src = "img/flagged.png";
    arrayImg[1] =bandera;
    
    fallo = new Image;
    fallo.src = "img/fallo.gif";
    arrayImg[2] = fallo;
    
    valor0 = new Image;
    valor0.src = "img/0.png";
    arrayImg[3] = valor0;
    
    valor1 = new Image;
    valor1.src = "img/1.png";
    arrayImg[4] =valor1;
            
    valor2 = new Image;
    valor2.src = "img/2.png";
    arrayImg[5] =valor2;
    
    
    valor3 = new Image;
    valor3.src = "img/3.png";
    arrayImg[6] =valor3;
    
    valor4 = new Image;
    valor4.src = "img/4.png";
    arrayImg[7] =valor4;
    
    valor5 = new Image;
    valor5.src = "img/5.png";
    arrayImg[8] =valor5;
    

    valor6 = new Image;
    valor6.src = "img/6.png";
    arrayImg[9] =valor6;
    
    valor7 = new Image;
    valor7.src = "img/7.png";
    arrayImg[10] =valor7;
    
    
    valor8 = new Image;
    valor8.src = "img/8.png";
    arrayImg[11] = valor8;
    
    //return arrayImg;
 
}


