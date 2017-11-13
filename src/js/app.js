import _ from 'lodash';

import * as casilla from './casilla.js';

import * as rellenarMinas from './rellenarMinas.js';

import * as tablero from './tablero.js';

import * as imagenes from './imagenes.js';

import {crono} from "./clicks.js";

// variable que mide el numero de filas y columnas del buscaminas
export var longitud = 0;

// variable que recoge los espacios vacios descubiertos
export var casillasNoBomba = 0;

// variable para la matriz con la que creamos el tablero de juego
export var matriz = [];

// variable que recoge el numero de bombas
export var numBombas = 0;


// variable que recoge el numero de bombas acertadas
export var numAciertos = 0;



window.onload = function () {
    //variable que controla el nivel de dificultad
    var nivel = 0;





    //array de imagenes
    //    var arrayImg = [];

    //funcion que crea las imagenes
    imagenes.crearImagenes();

    //listener para el nivel principiante que llama a la funcion crearTablero y le manda el numero de filas y columnas.
    document.getElementById("prin").addEventListener("click", iniciarJuego, false);
    document.getElementById("inter").addEventListener("click", iniciarJuego, false);
    // evento para reiniciar el juego
    document.getElementById("volver").addEventListener('click', reiniciarJuego, false);

    document.getElementById("finJuego").style.display = "none";


    function iniciarJuego() {

        document.getElementById("Principiante").style.display = "none";
        document.getElementById("Intermedio").style.display = "none";
        
        document.getElementById("cronometro").style.display= "block";

        if (this.id == "prin") {
            nivel = 1;
        } else {

            nivel = 2;
        }

        comprobarNivel();
        matriz = rellenarMinas.iniMatrizMinas(longitud);
        matriz = rellenarMinas.generadorBombas(matriz, numBombas, longitud);

        tablero.crearTablero(longitud);
        //le paso el array x referencia xq sino no lo coje al venir de un import.
        tablero.arrayCasillas = comprobarMinasAl(tablero.arrayCasillas);

        crearTablero(longitud);

        crono();


    }

//funcion de ayuda para mostrar el grid de la matriz
    function crearTablero(longitud) {
        //creamos la tabla y le asignamos las clases y atributos q necesitemos
        var div = document.createElement("div");
        var tabla = document.createElement("table");
        tabla.setAttribute("id", "tablaTablero");
        //bucle para introducir filas y columnas.
        for (var i = 0; i < longitud; i++) {
            var fila = document.createElement("tr");
            for (var j = 0; j < longitud; j++) {
                var columna = document.createElement("td");
                columna.setAttribute("id", i + "_" + j);
                columna.setAttribute("class", "celdas");
                columna.innerHTML = matriz[i][j];
                //hacemos que el td cuelgue de la fila.
                fila.appendChild(columna);
            }
            tabla.appendChild(fila);
        }

        document.getElementById("tablero").appendChild(tabla);

    }



    function comprobarNivel() {

        switch (nivel) {
            case 1:
                longitud = 9;
                numBombas = 10;

                break;
            case 2:
                longitud = 10;
                numBombas = 15
                break;
        }

        casillasNoBomba = (longitud * longitud) - numBombas;
    }

    // funcion que evalua unas coordenadas y si hay bomba suma 1 y si no hay bomba o se sale del rango de la matriz suma 0
    function numeroSuma(x, y) {
        var suma = 0;
        if (x < 0 || x >= longitud || y < 0 || y >= longitud) {
            suma = 0;
        } else {
            if (matriz[x][y] == "*") {
                suma = 1;
            }
        }
        return suma;
    }
    // funcion que suma los numeros de las casillas adyacentes a la casilla evaluada
    function calcularBombasAlrededor(x, y) {
        var minasAlrededor =
            numeroSuma(x - 1, y - 1) +
            numeroSuma(x - 1, y) +
            numeroSuma(x - 1, y + 1) +
            numeroSuma(x, y - 1) +
            numeroSuma(x, y) +
            numeroSuma(x, y + 1) +
            numeroSuma(x + 1, y - 1) +
            numeroSuma(x + 1, y) +
            numeroSuma(x + 1, y + 1);
        return minasAlrededor;
    }

    //funcion que recorre todo el array y en cada casilla comprobamos cuantas bombas tiene alrededor
    function comprobarMinasAl(casillas) {

        for (var i = 0; i < longitud; i++) {
            for (var j = 0; j < longitud; j++) {
                if (matriz[i][j] != "*") {
                    matriz[i][j] = calcularBombasAlrededor(i, j);
                    casillas[i][j].valor = matriz[i][j];

                } else {
                    casillas[i][j].valor = "*";
                }
            }
        }

        return casillas;
    }


   
    //funcion para reiniciar el juego
    function reiniciarJuego() {
        window.location.reload();
    }




}
