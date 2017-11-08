export function iniMatrizMinas(longitud) {
    var matriz = [];
    for (var i = 0; i < longitud; i++) {
        matriz[i] = [];
    }

    // ponemos el valor de cada celda de la matriz
    for (var i = 0; i < longitud; i++) {
        for (var j = 0; j < longitud; j++) {
            matriz[i][j] = 0;
        }
    }
    return matriz


}


export function generadorBombas(matriz, numBombas, longitud) {
    var auxNumBombas = numBombas;
    while (auxNumBombas > 0) {
        var posicionBombaX = Math.floor(Math.random() * longitud);
        var posicionBombaY = Math.floor(Math.random() * longitud);
        if (matriz[posicionBombaX][posicionBombaY] == " ") {
            matriz[posicionBombaX][posicionBombaY] = "*";
            auxNumBombas--;
        }
    }

    return matriz;


}
