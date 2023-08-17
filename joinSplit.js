/* 
join() Y split()

El método join() convierte un Arreglo en una cadena de caracteres. Mientras que split() convierte una cadena de caracteres en un Arreglo.

*/

//Analicemos el método join() pasándole distintos datos como Argumento:

//Sin pasarle datos como Argumento:

//CODIGO

//let arr = ["Hola", "Luciano"]
/* arr.join() 
("Hola,Luciano") */ //separa los elementos del arreglo con una coma 


//Pasando como Argumento unas comillas (""):

//CODIGO

/* let arr = ["Hola", "Luciano"]
arr.join("") // "HolaLuciano"
//en este caso va a unir todos los elementos del arreglo en una sola cadena de caracteres
 */


/* Pasando como Argumento un caracter:

Si pasamos como Argumento un caracter, join() nos devolverá los elementos del Arreglo sepadados por ese caracter. Por ejemplo, si le pasamos como Argumento un espacio: 
*/

//CODIGO

/* let arr = ["Hola", "Luciano"]
arr.join(" ") //le pasamos como argumento un espacio
("Hola Luciano") // nos devuelve un string con los datos separados por un espacio */

/* 
let arr = ["Hola", "Luciano"]
arr.join("-") //le pasamos como argumento un guion
("Hola-Luciano") */ 

/* let arr = ["Hola", "Luciano", "como", "estas?"]
arr.join("(SIC)") //le pasamos como argumento (sic)
("Hola(SIC)Luciano(SIC)como(SIC)estas?")  */







/* ⚠️ Importante: Cuando hacemos join() no modificamos el Arreglo original sino que tomamos sus elementos y los manipulamos.

En cambio, el método split(), separa un String y lo convierte en un Arreglo con sus distintas posiciones.

⚠️ Importante: Aquello que le pasemos como Argumento le indicará al método dónde debe hacer el corte.

Veamos cómo funciona pasando como Argumento un espacio: */

//CODIGO



/* let cadena = "Hola Luciano"
let arr = cadena.split(" ") // le indicamos donde hacer el corte. en este caso, en donde haya un espacio
console.log(arr) //["Hola", "Luciano"] //retorna un arreglo con los strings separados en cada posicion

 */




//Veamos cómo funciona cuando le pasamos como Argumento la letra "u":

//CODIGO

let cadena = "Hola Luciano"
let arr = cadena.split("u") // le indicamos donde hacer el corte. en este caso, en donde haya un espacio
console.log(arr) //["Hola L", "ciano"] JS primero va a buscar si existe ese caracter dentro de la cadena, una vez que lo encuentra va a passar a eliminarlo y por ultimo me va a devolver el arreglo separando los elementos por donde estaba ese caracter










