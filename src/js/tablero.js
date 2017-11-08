import {Casilla} from "./casilla.js";



export function crearTablero(longitud) {
        //creamos la tabla y le asignamos las clases y atributos q necesitemos
        var arrayCasillas = [];
        var div = document.createElement("div");
        var tabla = document.createElement("table");
        tabla.setAttribute("id", "tablaTablero");
        //bucle para introducir filas y columnas.
        for (var i = 0; i < longitud; i++) {
            ArryCasillas[i]=[]
            var fila = document.createElement("tr");           for (var j = 0; j < longitud; j++) {
                //crea el objeto
                var nomCasilla ="casilla"+i+j;
                nomCasilla = 
                    new Casilla(i,j,0,"img/facingDown.png");
                //-----------------
                var columna = document.createElement("td");
                columna.setAttribute("id", i + "_" + j);
                columna.setAttribute("class", "celdas");
                var DOM_img = document.createElement("img");
                DOM_img.setAttribute("id", "imagen-" + i + "_" + j);
                DOM_img.src = "img/facingDown.png";
                //hacemos que el input cuelgue del td.
                columna.appendChild(DOM_img);
                //hacemos que el td cuelgue de la fila.
                fila.appendChild(columna);
                //meto el objeto en el array
                arrayCasillas[i][j] = nomCasilla;
            }
            tabla.appendChild(fila);
        }
        
        document.getElementById("tablero").appendChild(tabla);
        crearListeners();
        return arrayCasillas;
    }


export function crearListeners() {
        for (var i = 0; i < longitud; i++) {
            for (var j = 0; j < longitud; j++) {
                document.getElementById(i + "_" + j).addEventListener('click', clickIzquierdo, false);
                document.getElementById(i + "_" + j).addEventListener('contextmenu', clickDerecho, false);
            }
        }
    }




