import{casilla} from "casilla.js";



export function crearTablero() {
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
                var DOM_img = document.createElement("img");
                DOM_img.setAttribute("id", "imagen-" + i + "_" + j);
                DOM_img.src = "img/facingDown.png";
                //hacemos que el input cuelgue del td.
                columna.appendChild(DOM_img);
                //hacemos que el td cuelgue de la fila.
                fila.appendChild(columna);
            }
            tabla.appendChild(fila);
        }

        document.getElementById("tablero").appendChild(tabla);
        crearListeners();
    }


export function crearListeners() {
        for (var i = 0; i < longitud; i++) {
            for (var j = 0; j < longitud; j++) {
                document.getElementById(i + "_" + j).addEventListener('click', clickIzquierdo, false);
                document.getElementById(i + "_" + j).addEventListener('contextmenu', clickDerecho, false);
            }
        }
    }


export function comprobarNivel() {

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


