const prompt = require("prompt-sync")({ sigint: true });
("----------------------CLASE IF - IF/ELSE");

/* Las Funciones Condicionales de JavaScript
 son una herramienta que posibilita la toma de decisiones y permite realizar acciones de acuerdo a la entrada de información que reciba. 

sentencia if... se usa, principalmente, para tomar decisiones. Permite que, si la condición es verdadera (true), se ejecute un código.

Sintaxis De La Función if...
*/

/* if(condicion){
    //si la condicion es verdadera, se ejecuta el bloque de codigo
}
 */

/* Sin embargo, la Función Condicional más común es if… else. Con esta, nos aseguramos que, cuando una condición se cumple (es igual a true), retornemos una cosa. Sino (si es false), retornemos otra. */

/* if(condicion){
    //si la condicion es verdadera, se ejecuta el bloque de codigo
} else {
    //sino, ejecuta este otro bloque de codigo 
} */

/* 
Ejemplo. 

Si hiciéramos una app para evaluar a las personas que llegan a una guardia en un hospital, podríamos escribir el siguiente código que organice la atención de los pacientes en función de su urgencia:
*/

/* let temperatura = prompt("Ingrese su temperatura: ");

if (temperatura < 37.5) {
  console.log("prioridad baja");
} else {
  console.log("prioridad alta");
} */

/* 
La página Code to Graph te permite pegar tu código para ver cómo es el camino lógico de forma gráfica.

https://crubier.github.io/code-to-graph
*/
("-----------------------------------------");

/* 
Anidar if... else

Las Estructuras Condicionales de tipo if...else pueden anidarse para generar distintos caminos según el input del usuario.

Aspectos Importantes A Tener En Cuenta

El código se lee y ejecuta de arriba para abajo. Por lo tanto, el orden es muy importante a la hora de codear, tanto a la hora de declarar Variables como de generar las Estructuras Condicionales.

Las Estructuras Condicionales de tipo if...else pueden anidarse, unas dentro de otras, para:

- Generar múltiples bifurcaciones en función del objetivo del proyecto.
- Mostrar un único camino lógico a cada usuario.
*/

//Ejemplo:

/* let edad = prompt("Decime tu edad: ");

if (edad >= 21) {
  console.log("puede ingresar al bar");
  let numeroSecreto = 10;
  let loQueDiceElUsuario = parseInt(prompt("cual es el numero secreto?"));
  if (loQueDiceElUsuario === numeroSecreto) {
    console.log("podes ingresar a la fiesta secreta");
  } else {
    console.log("No podes ingresar a la fiesta secreta");
  }
} else {
  console.log("No podes ingresar al bar");
} */

("----------------------------------------");

/* 
else... if

else... if es un recurso para poder anidar caminos intermedios entre el if y el else final. Una vez que se toma uno de los caminos, se completa el bloque lógico.
*/

//Sintaxis:

/* if(){

} else if(){

} else if(){

} else {

} */

/* 
Siguiendo el ejemplo del bar, si un usuario puede pasar al bar si tiene 18 años, pero no puede tomar alcohol hasta ser mayor de edad a los 21, podríamos escribir el siguiente código: 
*/

/* let edad = parseInt(prompt("ingrese su edad: "));

if (edad < 18) {
  console.log("No podes ingresar al bar");
} else if (edad < 21) {
  console.log("Podes ingresar al bar");
} else {
  //console.log(edad);
  console.log("podes ingresar al bar y tomar alcohol");
}
 */
/* 
PSEUDOCODIGO

Dejar comentarios en el código es una de las prácticas más recomendadas a la hora de programar, sobre todo en proyectos escalables o colaborativos. Se usa para describir algo importante y para dejar indicaciones que puedan servir a futuro, en caso de que otro programador retome ese código.
*/

// Este es un comentario de una línea
/*
Este es un comentario multilínea
*/

//EJEMPLO CON PSEUDOCODIGO

//Se le solicita la procedencia al extranjero y se almacena en la variable procedencia
//verifica si la procedencia es igual a "Asia, si es true, nos devuelve el bloque de codigo, si es false sigue leyendo el condicional
/* verifica si la procedencia es igual a "Europa, si es true, nos devuelve el bloque de codigo, si es false sigue leyendo el condicional
sino, le damos la bienvenida y que siga caminando derecho
 */

/* let procedencia = prompt("De que cotinente venis?");

if (procedencia == "Asia") {
  console.log("Pasa por la derecha para que podamos chequearlo");
} else if (procedencia == "Europa") {
  console.log("pasa por la izquierda");
} else {
  console.log("bienvenido, segui caminando derecho");
} */

("------------------------------");

/* 
Operador Ternario

El Operador Ternario es una manera de simplificar las estructuras condicionales de tipo If...else para escribirlas en una sola línea.

Sintaxis De Los Operadores Ternarios

Los Operadores Ternarios tienen una estructura con 3 Argumentos:

- Una condición
- Un signo de interrogación (?)
- Los dos caminos posibles, separados por dos puntos (:)

(condicion) ? lo que se ejecuta si es true : lo que se ejecuta si es false.
*/

//Ejemplo

/* let numeroDeTragos = 0;
let cuantosTragos = parseInt(prompt("Cuantos tragos tomaste?"));

cuantosTragos > numeroDeTragos
  ? console.log("No podes manejar")
  : console.log("Podes irte manejando");

//Ejemplo

let nombre = prompt("Decime tu nombre: ");

nombre
  ? console.log("Respuesta recibida")
  : console.log("No respondiste con un nombre"); */

//Estructura SWITCH

/* 
La estructura condicional Switch() es otra alternativa para la toma de deciciones de nuestro programa.
Es util cuando ya sabemos de antemano cuales son los posibles datos que se van a evaluar
*/
/* switch( condicion o parametro ){
  case 1: //el primer caso que se va a evaluar
  // dependiendo si el caso es el correcto nos devuelve este bloque de codigo

    break // para cortar la ejecucion de los siguientes al encontrar el correcto se corta el progrmaa con el break
    default :
    //Este bloque de codigo se muestra en el caso de n encontrar una conicidencia con los case anteriores
}
 */

let num = 4;

switch (num) {
  case 1:
    console.log("entramos al primer caso");
    break;
  case 2:
    console.log("entramos al segundo caso");
    break;
  case 3:
    console.log("entramos al tercer caso");
  default:
    console.log(
      "Este bloque de codigo se muestra en el caso de no encontrar una conicidencia con los case anteriores"
    );
}

("----------------------------------------------");

let dia = parseInt(prompt("Ingrese un numero: "));

if (dia === 1) {
  console.log("Lunes");
} else if (dia === 2) {
  console.log("Martes");
} else if (dia === 3) {
  console.log("Miercoles");
} else if (dia === 4) {
  console.log("Jueves");
} else if (dia === 5) {
  console.log("Viernes");
} else if (dia === 6) {
  console.log("Sabado");
} else if (dia === 7) {
  console.log("Domingo");
} else {
  console.log("Ingrese un numero del 1 al 7");
}

switch (num) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miercoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sabado");
    break;
  case 7:
    console.log("Domingo");
    break;
  default:
    console.log("Ingrese un numero del 1 al 7");
}

switch (dia) {
  case "lunes":
  case "miercoles":
    console.log("Tengo programación");
    break;
  case "martes":
  case "jueves":
    console.log("Tengo bd");
    break;
  default:
    console.log("No tengo clase bb");
}
