import _ from 'lodash';

import * as casilla from './casilla.js';

import * as rellenarMinas from './rellenarMinas.js';

import * as tablero from './tablero.js';

import crearImagenes from './imagenes.js'

window.onload = function () {
    //variable que controla el nivel de dificultad
    var nivel = 0;
    // variable que mide el numero de filas y columnas del buscaminas
    var longitud = 0;
    // variable que recoge el numero de bombas
    var numBombas = 0;
    // variable para la matriz con la que creamos el tablero de juego
    var matriz = [];

    // variable que recoge el numero de bombas acertadas
    var numAciertos = 0;

    // variable que recoge los espacios vacios descubiertos
    var casillasNoBomba = 0;

    //array de imagenes
    var arrayImg = [];

    //funcion que crea las imagenes
    crearImagenes();
    arrayImg = crearImagenes();
    //listener para el nivel principiante que llama a la funcion crearTablero y le manda el numero de filas y columnas.
    document.getElementById("prin").addEventListener("click", iniciarJuego, false)
    document.getElementById("inter").addEventListener("click", iniciarJuego, false)

    function iniciarJuego() {

        if (this.id == "prin") {
            nivel = 1;
        } else {

            nivel = 2;
        }

        comprobarNivel();
        matriz = rellenarMinas.iniMatrizMinas(longitud);
        matriz = rellenarMinas.generadorBombas(matriz, numBombas, longitud);
        comprobarMinasAl();
        var casillas= tablero.crearTablero(longitud);
        crearTablero();
        
        
        function crearTablero() {
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
            //crearListeners();
        }

        //minasVacia = iniMatrizMinas();
        //minas = generadorBombas(minasVacia);
        //comprobarMinasAl();
        //crearTablero();
        //crearTablero2();
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
    function comprobarMinasAl() {

        for (var i = 0; i < longitud; i++) {
            for (var j = 0; j < longitud; j++) {
                if (matriz[i][j] != "*") {
                    matriz[i][j] = calcularBombasAlrededor(i, j);
                }
            }
        }
    }



    /*    
        //variable que controla el nivel de dificultad
        var nivel = 0;
        //variable que controla la longitud del teclado
        var longitud = 0;
        //variable que controla el numero de bombas
        var numBombas = 0;
        //variable para la matriz con la que crearemos el tablero de juego.
        var minas = [];
        var minasVacia = [];
        //variable que controla el numero de bombas acertadas
        var numAciertos = 0;
        //variable que controla el numero de espacios vacios descubiertos
        var casillasNoBomba = 0;
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
        //--------------------------

        //funcion que crea las imagenes
        crearImagenes();
        //listener para el nivel principiante que llama a la funcion crearTablero y le manda el numero de filas y columnas.
        document.getElementById("prin").addEventListener("click", iniciarJuego, false)


        document.getElementById("inter").addEventListener("click", iniciarJuego, false)

        

        function contadorMinas(matriz) {
            //--------------------------
            var contador = 0;
            var contador0 = 0;
            for (var i = 0; i < longitud; i++) {
                for (var j = 0; j < longitud; j++) {
                    if (matriz[i][j] == "*") {
                        contador++;
                    } else
                        contador0++;
                }

            }
            alert("numero de minas introducidas:111" + contador);
            alert("numero de 0 introducidas:" + contador0);
            //-----------------------------------

        }
      
        
        
        

        

        //funcion que evalua unas coordenadas y si hay bomba suma 1 y si no hay bomba o se sale del rango de la matriz suma 0
        function sumatorioBombas(coordX, coordY) {
            var sumatorio = 0;
            if (coordX < 0 || coordX >= longitud || coordY < 0 || coordY >= longitud) {
                sumatorio = 0;

            } else {
                if (minas[coordX][coordY] == "*") {
                    sumatorio = 1;

                }
            }
            return sumatorio;

        }

        //funcion que suma los numeros de las casillas adyacentes a la casilla evaluadada
        function calcularMinasAlrededor(coordX, coordY) {

            var minasAlrededor =
                sumatorioBombas(coordX - 1, coordY - 1) +
                sumatorioBombas(coordX - 1, coordY) +
                sumatorioBombas(coordX - 1, coordY + 1) +
                sumatorioBombas(coordX, coordY - 1) +
                sumatorioBombas(coordX, coordY) +
                sumatorioBombas(coordX, coordY + 1) +
                sumatorioBombas(coordX + 1, coordY - 1) +
                sumatorioBombas(coordX + 1, coordY) +
                sumatorioBombas(coordX + 1, coordY + 1);
            //alert(minasAlrededor);
            return minasAlrededor;

        }

        //funcion que recorre todo el array y en cada casilla comprobamos cuantas bombas tiene alrededor
        function comprobarMinasAl() {

            for (var i = 0; i < longitud; i++) {
                for (var j = 0; j < longitud; j++) {
                    if (minas[i][j] == "*") {
                        minas[i][j] = calcularMinasAlrededor(i, j);
                    }
                }
            }
        }


        function clickIzquierdo(event) {
            var evento = event || window.Event;

            if (evento.button == 0 && (document.getElementById("imagen-" + this.id).src == blanco.src)) {
                var coorMatriz = this.id.split("_");
                var x = coorMatriz[0];
                var y = coorMatriz[1];
                mostrarTablero(x, y);

            }


        }

        function clickDerecho(event) {}

        function mostrarTablero(coordX, coordY) {
            if (coordX >= 0 && coordX < longitud && coordY >= 0 && coordY < longitud && (document.getElementById("imagen-" + coordX + "_" + coordY).src == blanco.src)) {
                var valor = minas[coordX][coordY];
                
                switch (valor) {
                    case 1:
                        document.getElementById("imagen-" + coordX + "_" + coordY).src = valor1.src;
                        break;
                    case 2:
                        document.getElementById("imagen-" + coordX + "_" + coordY).src = valor2.src;
                        break;
                    case 3:
                        document.getElementById("imagen-" + coordX + "_" + coordY).src = valor3.src;
                        break;
                    case 4:
                        document.getElementById("imagen-" + coordX + "_" + coordY).src = valor4.src;
                        break;
                    case 5:
                        document.getElementById("imagen-" + coordX + "_" + coordY).src = valor5.src;
                        break;
                    case 6:
                        document.getElementById("imagen-" + coordX + "_" + coordY).src = valor6.src;
                        break;
                    case 7:
                        document.getElementById("imagen-" + coordX + "_" + coordY).src = valor7.src;
                        break;
                    case 8:
                        document.getElementById("imagen-" + coordX + "_" + coordY).src = valor8.src;
                        break;
                    case 0:
                        document.getElementById("imagen-" + coordX + "_" + coordY).src = valor0.src;
                        expansor(coordX, coordY);
                        break;
                    case "*":
                        document.getElementById("imagen-" + coordX + "_" + coordY).src = fallo.src;
                        break;

                }

                casillasNoBomba--;

            }

        }
        // funcion para expandir la casilla de alrededor
        function expansor(coordX, coordY) {
           
            for (var i = parseInt(coordX) - 1; i <= parseInt(coordX) + 1; i++) {
                for (var j = parseInt(coordY) - 1; j <= parseInt(coordY) + 1; j++) {
                    // anulamos mostrar lso rangos fuera de la cuadricula
                    if (i >= 0 && i < longitud && j >= 0 && j < longitud) {
                        
                        if (document.getElementById("imagen-" + i + "_" + j).src == blanco.src && minas[i][j] != "*") {
                            console.log(document.getElementById("imagen-" + i + "_" + j).src);
                            console.log("blanco.src "+blanco.src);
                            console.log("minas[i][j] " +minas[i][j] );
                            console.log(i+" "+j);
                            mostrarTablero(i, j);

                        }

                    }
                }
            }

        }

        

        



    */
}
