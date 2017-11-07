export class Casilla{
    
    constructor(coordX,coordY,valor,src){
        this.coordX = x;
        this.coordY = y;
        this.valor = valor;
        this.src = src;
        
    }
    
    //----GETERS------//
    
    get coordX(){
        
        return this.coordX;
    }
    
    get coordY(){
        
        return this.coordY;
        
    }
    
    get valor(){
        
        return this.valor;
        
    }
    
    
    get src(){
        
        return this.src;
        
    }
    
    //----SETERS----//
    
    
    set valor(valor){
        
        this.valor = valor;
    }
    
    set src(src){
        
        this.src = src;
        
    }
    
}