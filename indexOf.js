/* 
Metodo indexOf()

Los siguientes metodos nos sirven para manipular los Arreglos.

EL metodo  indexOf() verifica la posición de un elemento dentro de un Arreglo y nos devuelve su Índice.

Importante: Si ese elemento no existiera en el Arreglo, nos retornará -1.
*/

//Sintaxis De indexOf()

//CODIGO

nombreArreglo.indexOf(elemento)



//Veamos un ejemplo para entender cómo funciona:

//CODIGO

let amigos = ["Juan", "Pepe", "Jorge", "Francisco", "Juan"]

amigos.indexOf("Pepe") //nos devuelve el indice 1
amigos.indexOf("Juan") //0, nos devuelve la primera conicidencia
amigos.indexOf("Guille") //devuelve -1, porque no existe ningun amigos llamado Guille dentro del arreglo
amigos.indexOf("juan") // -1 , acuerdense que javascript es case sensitive


























/* Recordá: JavaScript es case sensitive, es decir, las mayúsculas y las minúsculas tienen codificaciones distintas. Por eso, el elemento que pasemos como Argumento tiene que ser exactamente el mismo que contenga el Arreglo. */
