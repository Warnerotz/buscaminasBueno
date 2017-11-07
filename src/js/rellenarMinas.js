export function iniMatrizMinas() {
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


export function generadorBombas(matriz) {
    var aux = numBombas;

    while (aux > 0) {

        var randFila = Math.floor((Math.random() * longitud));
        var randCol = Math.floor((Math.random() * longitud));

        if (matriz[randFila][randCol] == 0) {
            matriz[randFila][randCol] = "*";
            aux--;

        }

    }

    return matriz;


}
// funcion que evalua unas coordenadas y si hay bomba suma 1 y si no hay bomba o se sale del rango de la matriz suma 0
export function numeroSuma(x, y) {
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
export function calcularBombasAlrededor(x, y) {
    var minasAlrededor = numeroSuma(x - 1, y - 1) + numeroSuma(x - 1, y) + numeroSuma(x - 1, y + 1) +
        numeroSuma(x, y - 1) + numeroSuma(x, y) + numeroSuma(x, y + 1) +
        numeroSuma(x + 1, y - 1) + numeroSuma(x + 1, y) + numeroSuma(x + 1, y + 1);
    return minasAlrededor;
}
