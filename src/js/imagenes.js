



function crearImagenes() {
     //variables para las imagenes
    var blanco;
    var bandera;
    var fallo;
    var valor0;
    var valor1;
    var valor2;
    var valor3;
    var valor4;
    var valor5;
    var valor6;
    var valor7;
    var valor8;
    var arrayImg=[];
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
    
    return arrayImg;
 
}

export default crearImagenes;
