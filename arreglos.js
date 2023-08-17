/* Arreglos

Un Arreglo (del inglés Array) es una colección ordenada de elementos que identificamos mediante Índices.

es un conjunto de datos que se encuentran ordenados. Como vimos previamente, en JavaScript, los datos pueden ser de cualquier tipo (Números, Strings, Funciones, etc.).

Gracias a los Arreglos, podemos reunir en un solo lugar los distintos tipos de datos, sin necesidad de crear una Variable para cada uno. Veamos un ejemplo:

Imaginemos que queremos agrupar los productos existentes en un e-commerce:

Si no usáramos Arreglos deberíamos crear una Variable que guarde el valor de cada elemento. */

//CODIGO:

/* let producto1 = "iphone"
let produto2 = "tv"
let producto3 = "auriculares" */

/* 
Volviendo al ejemplo, como sabemos que todos estos elementos pertenecen a la misma categoría, porque son productos del e-commerce, podríamos escribir un Arreglo que los agrupe en una lista: */

//CODIGO:

//let productos = ["iphone", "tv", "auriculares"]

/* 
- Strings Como Colecciones De Caracteres

Los Strings son cadenas de caracteres guardadas en direcciones de memorias continuas. Podemos acceder a cada letra usando corchetes ([]) y un Índice (un número que indica la posición del caracter).

La propiedad length nos permite tomar dimensión de la magnitud de un String. Es decir, nos ayuda a contar la cantidad de caracteres que hay en esa cadena.

Si queremos acceder rápidamente a la propiedad length de un String, debemos escribir directamente la cadena de caracteres (o la Variable que la guarda) seguida por ".length". Por ejemplo: variable.length.

Teniendo en cuenta este ejemplo del String hello, pensá qué devuelve cada sentencia :
*/

//CODIGO:

//let word = "hello";
/* word[0] //h
word[1] //e
word[2] // l
word[4] // o
 */

//¿Qué devolverá si le pasamos una Variable?

//CODIGO:

/* let index = 3
word[index]  */ //en este caso, como la variable contiene un valor numerico, nos va a devolver el caracter que ocupe esa posición

//Que sucedería si le pasamos un valor de mayor extensión?

//CODIGO:

/* let word = "hello";

let largoDelString = word.length

word[largoDelString]  */

/* Como length te devuelve la cantidad de elementos que tiene el String, el resultado será undefined porque en esa posición no hay nada.

Por lo tanto, deberíamos escribir:
 */

//CODIGO:

//word[largoDelString - 1]

//Importante: Para saber la cantidad de caracteres que tiene un String debemos restarle 1 a la variable largoDelString. Esto se debe a que la longitud de la cadena de caracteres es siempre 1 mayor que el último Índice.

/* Tambien funciona para Strings más largas. Mirá este ejemplo y descubrí qué devuelve cada sentencia: */

//CODIGO:

/* let saludo = "Bienvenidos a mi pagina"

saludo[0] //B
saludo[1] //i
saludo[8] //d

let index = 2
saludo[index] //e

let longitud = saludo.length
saludo[longitud] //undefined 
saludo[longitud - 1] //a
 */

/* 
 - Índice De Un Arreglo En JavaScript

los Arreglos nos permiten agrupar datos en una lista ordenada. Por lo tanto, cada elemento ocupa una posición indexada numéricamente.

Por ejemplo, en el Arreglo amigos...:
*/

//CODIGO:

//let amigos = ["Juan", "Pepe", "Jorge", "Francisco"]

/*
... cada uno de ellos tiene un Índice:

Juan Pepe Jorge Francisco
0	  1	    2       3

*/

//CODIGO:

/* amigos[0] //Juan
amigos[1] //Pepe
amigos[amigos.length] //undefined, porque el indice mas alto es 3 y queremos acceder al indice 4 que responde a la propiedad .length
amigos[amigos.length - 1] //si queremos acceder al ultimo elemento de  el arreglo amigos, tenemos que usar la propiedad .length - 1 . esto me da como resutlado "Francisco"
 */

/* Usos  De Los Índices
Podemos usar los Índices para:

Actualizar un valor: */

//CODIGO:

/* let amigos = ["Juan", "Pepe", "Jorge", "Francisco"] //arreglo original

amigos[0] = "Juancito" // cambiando "Juan" por "Juancito"
amigos[3] = "Pancho" // aca cambio el nombre "Francisco" por "Pancho"

 */

//Agregar nuevos elementos:

//CODIGO:

//let amigos = ["Juancito", "Pepe", "Jorge", "Pancho"]

amigos[4] = "Marco"; //Agregando en la posicion numero 4 a "Marco"
amigos[5] = "Mateo";

//como quedaria nuestro arreglo

let amigos = ["Juancito", "Pepe", "Jorge", "Pancho", "Marco", "Mateo"];

//¿Qué pasaría si agrego un nuevo amigo en el Índice 10?

//CODIGO:

amigos[10] = "Nicolas";

let amigos = [
  "Juancito",
  "Pepe",
  "Jorge",
  "Pancho",
  "Marco",
  "Mateo",
  empty * 4,
  "Nicolas",
];
//LOs indices del 6 al 9 quedarian vacios porque en este ns salteamos todas esas posiciones

/* 
 - Cómo Acceder A Los Datos De Un Arreglo

los Arreglos son una colección de cualquier tipo de dato. Para acceder a esta información, seguí estos pasos:

1. Localizá el elemento: Usá un Índice para acceder a su posición en el Arreglo.

2. Manipulá el dato: Si es una Función, por ejemplo, ejecutala; si es un sub-Arreglo usá Índices para acceder a ellos.

Mirá este ejemplo y descubrí su resultado sin probarlo en la consola:
*/

//CODIGO:

let coleccionRandom = [
  "Hola",
  22,
  true,
  null,
  function () {
    console.log("Hello");
  },
  ["hola", "chau"],
]

coleccionRandom[2] // true
coleccionRandom[4] // acceder al quinto elemento del arreglo, ubicamos la funcion pero en este caso no se esta ejecutando : f(){console.log("Hello")}
coleccionRandom[4]() //en este caso, la diferencia que encontrmaos con la linea anterior, es que no soloa ccedemos a la funcion, sino que tambien pasamos a ejecutarla por los parentesis agregados: Hello
coleccionRandom[5] //accedemos al elemento de la posicion numero 5. En este caso es otro arreglo: ["hola", "chau"]
coleccionRandom[5][1] //de esta manera accedemos al valor que esta en la posicion uno del sub-arreglo: chau 


("------------------------------------------------------");

//¿Qué devuelve este console.log?

let numbers = [22, 33, 54, 66, 72];

console.log(numbers[numbers.length]); //undefined
console.log(numbers[numbers.length - 1]); //72

//¿Qué personaje se muestra en la consola?

let grupoDeAmigos = [
  ["Harry", "Ron", "Hermione"],
  ["Spiderman", "Hulk", "Ironman"],
  ["Penélope Glamour", "Pierre Nodoyuna", "Patán"],
];
console.log(grupoDeAmigos[2][0]);//"Penélope Glamour"
console.log(grupoDeAmigos[0][4]);//undefined
console.log(grupoDeAmigos[1][2]); //Ironman