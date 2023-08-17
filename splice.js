/* 

El método .splice() elimina de un Arreglo una cantidad de elementos a partir de una posición dada.

podemos elegir desde dónde sacar uno o más elementos de un Arreglo. La diferencia con los métodos shift y pop es que, con ellos, solo podíamos quitar los del comienzo o el final de un arreglo.

Veamos la sintaxis del método .splice():
*/

nombreArreglo.splice(argumento1, argumento2);

//En este método, el argumento1 determinará el Índice a partir del cual quiero remover los elementos (incluyendo esa posición). Por su parte, el argumento2 establecerá la cantidad de elementos que quiero remover.

//Importante: El método .splice() devuelve los elementos eliminados en un nuevo Arreglo.

//Veamos un ejemplo:

//CODIGO

let puntajes = [1 , 7, 0 , 8, 4, 9]

let comenzandoEnIndice = 2

let numeroARemover = 3

let guardarValor = puntajes.splice(comenzandoEnIndice, numeroARemover) //[0,8,4]
// el arreglo que me va a quedar sin los numeros eliminados es: [1,7,9]


let puntajes = [1,7,9]

let guardarValor = [0,8,4]







/* ¿Cómo Guardar Los Elementos Eliminados En Una Variable?

Para guardar los elementos eliminados en una Variable, definila antes de aplicar el método: */

//CODIGO

let puntajes = [1 , 7, 0 , 8, 4, 9]

let comenzandoEnIndice = 2

let numeroARemover = 3

let guardarValor = puntajes.splice(comenzandoEnIndice, numeroARemover) 

"----------------------"
//puntaje original
puntajes = [1,7,9]
//arreglo con los valores eliminados
guardarValor = [0,8,4]










