import {
    arrayCasillas
} from "./tablero.js";

import * as imagenes from './imagenes.js'

import * as principal from './app.js';

var cronometro;

export function clickIzquierdo(event) {
    var evento = event || window.Event;
    if (evento.button == 0 && (document.getElementById("imagen-" + this.id).src == imagenes.blanco.src)) {
        var coorMatriz = this.id.split("_");
        var x = coorMatriz[0];
        var y = coorMatriz[1];
        mostrarTablero(x, y);


    }


}

// evento que recoge el click derecho
export function clickDerecho(elEvento) {
    // evitamos que saque el menu de opciones por defecto al hacer click derecho
    elEvento.preventDefault();
    var coordenadasMatriz = this.id.split("_");
    var x = coordenadasMatriz[0];
    var y = coordenadasMatriz[1];
    // pone o quita bandera en casilla vacia
    if (document.getElementById("imagen-" + this.id).src == imagenes.blanco.src) {
        document.getElementById("imagen-" + this.id).src = imagenes.bandera.src;
        // comprobamos que la casilla tiene una bomba para añadir un acierto
        if (principal.matriz[x][y] == "*") {
            principal.numAciertos++;
        }

    } else if (document.getElementById("imagen-" + this.id).src == imagenes.bandera.src) {
        document.getElementById("imagen-" + this.id).src = imagenes.blanco.src;
        // cuando quita la bandera teneoms que comprobar si habiamos añadido un acieto para restarselo
        if (principal.matriz[x][y] == "*") {
            principal.numAciertos--;
        }
    } else {

    }


    // comprobamos si ha tapado todas las casillas con bomba
    if (principal.numAciertos == principal.numBombas) {
        finJuego(1);
    }

}


// funcion que evalua como hemos acabado (1 acertado, 0 fallo)
export function finJuego(x) {
    var texto = "JUEGO COMPLETADO";
    detenerCrono();
    // impedimos que pueda clickar sobre el tablero al acabar
    for (var i = 0; i < principal.longitud; i++) {
        for (var j = 0; j < principal.longitud; j++) {
            document.getElementById(i + "_" + j).removeEventListener('click', clickIzquierdo, false);
            document.getElementById(i + "_" + j).removeEventListener('contextmenu', clickDerecho, false);

        }
    }
    if (x == 0) {
        texto = "HAS PERDIDO";
        // recorremos el array y mostramos la posicion de las bombas
        for (var i = 0; i < principal.longitud; i++) {
            for (var j = 0; j < principal.longitud; j++) {
                if (principal.matriz[i][j] == "*") {
                    document.getElementById("imagen-" + i + "_" + j).src = imagenes.fallo.src;
                }
            }
        }
    }
    // mostramos el div con el fallo y el boton de reiniciar
    document.getElementById("mensajeFinal").innerHTML = texto;
    document.getElementById("finJuego").style.display = "initial";

}





function mostrarTablero(coordX, coordY) {
    if (coordX >= 0 && coordX < principal.longitud && coordY >= 0 && coordY < principal.longitud && (document.getElementById("imagen-" + coordX + "_" + coordY).src == imagenes.blanco.src)) {
        //var valor = minas[coordX][coordY];       
        var valor = arrayCasillas[coordX][coordY].valor;

        switch (valor) {
            case 1:
                document.getElementById("imagen-" + coordX + "_" + coordY).src = imagenes.valor1.src;
                arrayCasillas[coordX][coordY].src = imagenes.valor1.src;
                break;
            case 2:
                document.getElementById("imagen-" + coordX + "_" + coordY).src = imagenes.valor2.src;
                arrayCasillas[coordX][coordY].src = imagenes.valor2.src;
                break;
            case 3:
                document.getElementById("imagen-" + coordX + "_" + coordY).src = imagenes.valor3.src;
                arrayCasillas[coordX][coordY].src = imagenes.valor3.src;
                break;
            case 4:
                document.getElementById("imagen-" + coordX + "_" + coordY).src = imagenes.valor4.src;
                arrayCasillas[coordX][coordY].src = imagenes.valor4.src;
                break;
            case 5:
                document.getElementById("imagen-" + coordX + "_" + coordY).src = imagenes.valor5.src;
                arrayCasillas[coordX][coordY].src = imagenes.valor5.src;
                break;
            case 6:
                document.getElementById("imagen-" + coordX + "_" + coordY).src = imagenes.valor6.src;
                arrayCasillas[coordX][coordY].src = imagenes.valor6.src;
                break;
            case 7:
                document.getElementById("imagen-" + coordX + "_" + coordY).src = imagenes.valor7.src;
                arrayCasillas[coordX][coordY].src = imagenes.valor7.src;
                break;
            case 8:
                document.getElementById("imagen-" + coordX + "_" + coordY).src = imagenes.valor8.src;
                arrayCasillas[coordX][coordY].src = imagenes.valor8.src;
                break;
            case 0:
                document.getElementById("imagen-" + coordX + "_" + coordY).src = imagenes.valor0.src;
                arrayCasillas[coordX][coordY].src = imagenes.valor0.src;
                expandirCasilla(coordX, coordY);
                break;
            case "*":
                document.getElementById("imagen-" + coordX + "_" + coordY).src = imagenes.fallo.src;
                arrayCasillas[coordX][coordY].src = imagenes.fallo.src;
                finJuego(0);
                break;

        }

        principal.casillasNoBomba--;

    }

}
// funcion para expandir la casilla de alrededor
function expandirCasilla(x, y) {

    for (var i = x - 1; i <= x + 1; i++) {
        for (var j = y - 1; j <= y + 1; j++) {
            // anulamos mostrar lso rangos fuera de la cuadricula
            if (i >= 0 && i < principal.longitud && j >= 0 && j < principal.longitud) {
                if (document.getElementById("imagen-" + i + "_" + j).src == imagenes.blanco.src && principal.matriz[i][j] != "*") {
                    mostrarTablero(i, j);

                }

            }
        }
    }

}



export function crono() {
        var contador_s = 0;
        var contador_m = 0;
        var segundos = document.getElementById("segundos");
        var minutos = document.getElementById("minutos");

        minutos.innerHTML = 0;
        segundos.innerHTML = 0;

        cronometro = setInterval(function () {
            if (contador_s == 60) {

                contador_s = 0;
                contador_m++;
                minutos.innerHTML = contador_m;
                if (contador_m == 60) {
                    contador_m = 0;

                }
            }

            segundos.innerHTML = contador_s;
            contador_s++;



        }, 1000);


    }

  function detenerCrono(){
        clearInterval(cronometro);
        
    }
