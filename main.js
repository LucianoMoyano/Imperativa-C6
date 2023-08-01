// variables y tipos de datos: Una Variable es un contenedor que guarda información para, luego, usarla.
//tipo de valores de variables pueden ser: string, number, boolean, undefined, null

//string - Los Strings son cadenas de caracteres. Para que JS los reconozca como tal, el texto debe escribirse entre comillas dobles ("") o simples ('').
let flores = "petunias";
const saludo = "Bienvenidos a programación imperativa";

//numerico - Los Números son uno de los valores primitivos de JavaScript.
let edad = 25;
const edad1 = 27;

//booleano
let asado = true;
const ensaladas = false;

//undefined
let fiesta;
fiesta = "la direccion es...";

let nombre = "55"; // TIPO DE DATOS STRING
let nombre1 = "Luciano";
let a = 2; //Tipo de datos numerico
let b = 2;

//let edad = null; //tipo de dato nulo
let verdadero = true; //tipo de datos booleano
let falso = false; //tipo de datos booleano

//formato camelCase

let camelCase;

const edadMinima = 18;
const edadMaxima = 99;

let persona = ["Luciano"];

let persona1 = {
  nombre: "Luciano",
};

console.log(a + b);

/* 

los datos pueden ser primitivos o pueden ser más complejos, como son las Funciones y los Objetos. 
Ahora, nos enfocaremos en los valores primitivos:

Números: Funcionan igual que en la matemática. Pueden ser números enteros o racionales. Se pueden sumar, restar, multiplicar o dividir y siguen la lógica de resolución que privilegia las operaciones dentro de los paréntesis para luego resolver el resto.

Strings: Son cadenas de caracteres que incluyen letras, números y espacios. Debemos encerrarlos entre comillas simples (‘’) o dobles ("") para que JS entienda que es texto y no la confunda con una Variable.

Booleanos: Son datos de tipo true (verdadero) o false (falso), es decir, que activan o desactivan cierta parte del programa según el input recibido.

Undefined: Es un valor que posee una Variable que está sin definir en ese momento.

Null: Es un valor que posee una Variable que está explícitamente vacía (y hay una razón para ello).

Si pensamos en una Variable como una caja, el valor undefined indica que la caja está vacía (hasta que le demos contenido).

En cambio, en el caso de null, el programador le asignó explícitamente el valor para que la caja permanezca vacía.


En resumen:

var: Es una forma más flexible para crear una Variable ya que nos permite volver a crearla y reemplazar la anterior. var no se utiliza más, por lo que no es buena práctica usarla

let: Permite actualizar una Variable pero no volver a crearla.
const: Permite crear una Variable que se mantendrá constante durante todo el programa. Es decir, no se podrá actualizar ni cambiar.

*/
