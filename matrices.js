// OBJETO MATH
// Este objeto no toma un array como parametro, sino una lista de numeros.

/* Math.PI;
Math.pow(9, 2); // 81 - nos devuelve el primer numero tantas veces como indique el segundo indice
Math.random(); // un numero0 aleatorio entre 0 y 1
Math.floor(7.8); // nos va a redondear el numero hacia abajo
Math.ceil(7.3); //Nos redondea hacia arriba el numero hacia

Math.max(); //nos devuelve el valor mas grande entr elos numeros que le pasemos entre parentesis
Math.min(); //nos devuelve el valor mas chico entre los numeros que le pasemos entre parentesis

let numeros = [5, 10, 25, 58, 12];

let maximo = 0;

function encontrarMaximo(array) {
  for (let i = 0; i < array.length; i++) {
    if (maximo > array[i]) {
      maximo = array[i];
    }
  }
  return maximo;
}

console.log("con ciclo for");
console.log(encontrarMaximo(numeros));

console.log("con Math.max");
console.log(Math.max(5, 10, 25, 58, 12));

console.log("con Math.min");
console.log(Math.min(5, 10, 25, 58, 12));
 */
("--------------------------------------------");

/* // Matriz de 3x3
let matrizNumero = [
  [1, 2, 3], //primer elemento - posicion 0
  [4, 5, 6], // segundo elemento - 1
  [7, 8, 9], // tercer elemento . 2
];

console.log(matrizNumero[1]);
console.log(matrizNumero[1][0]); // [1] hace referencia a la fila , [0] hace referencia a la columna

//modificando un numero

matrizNumero[1][0] = 9;
console.table(matrizNumero); */

/* for(let i = 0 ; i < matrizNumero.length; i++){
    for(let j = 0; j < matrizNumero[i].length; j++){
        console.log(matrizNumero[i][j])
    }
}
 */
/* for(let i = 0 ; i < matrizNumero.length; i++){
    const filas = matrizNumero[i]
    for(let j = 0; j < filas.length; j++){
        const columnas = matrizNumero[i][j]
        console.log(columnas)
    }
} */

//recorrer la matriz y solamente imprimir los numeros pares
/* for (let i = 0; i < matrizNumero.length; i++) {
  for (let j = 0; j < matrizNumero[i].length; j++) {
    if (matrizNumero[i][j] % 2 === 0) {
      //console.log(matrizNumero[i][j]);
    }
  }
} */
//console.log(matrizNumero)
("--------------------------------");

//Matriz 10 x 10

// creo la funcion
function generarMatriz10por10() {
  //creo la variable array, la cual es el arreglo madre / grande que contiene a las filas
  let array = [];
  // mi primer bucle hace referencia a la creacion de las filas, aumenta de 10 en 10
  for (let i = 0; i <= 90; i += 10) {
    let fila = []; // sirve para las filas que se van a crear
    //segundo bucle o for anidado, sirve para nuestro incremento entre las columnas de 1 en 1
    for (let j = 1; j <= 10; j++) {
      fila.push(i + j); //utilizo el metodo push, para insertar dentro de la variable fila, cada uno de los numero que va a pertencer a las columnas
    }
    array.push(fila); //pushear dentro de nuestro arregl madre, las filas ya creadas
  }
  return array;
}

let matriz10po10 = generarMatriz10por10();
console.table(matriz10po10);
