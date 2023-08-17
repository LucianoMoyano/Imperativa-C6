// Metodos push() Y pop()

/* 
Los siguientes metodos nos sirven para manipular los Arreglos.
*/

/* Método push()

Para agregar elementos al final de nuestro Arreglo- sin necesidad de saber cuál es el último Índice-, usaremos el método push().

Sintaxis Del Método push(): */

//CODIGO


nombreArreglo.push() //añade un nuevo elemento al final de nuestro arreglo.
//Para agregar varios elementos, lo que tendriamos que hacer seria separar los valores con comas (,)

nombreArreglo.push(valor1, valor2, valor3)




//Veamos un ejemplo:

//CODIGO

/* let colores = ["rojo", "verde", "azul"]

colores.push("amarillo")

 */

// el Arreglo colores quedará confomado por "rojo", "verde", "azul" y "amarillo".

/* Como vemos, push agregará el elemento amarillo al final del Arreglo. En caso de que quisiéramos sumar más de un elemento, los incluiremos dentro del mismo método, sin necesidad de volver a usar push. */

//CODIGO

//colores.push("marron", "violeta")


//["rojo", "verde", "azul", "amarillo", "marron", "violeta"]


//El método push, además de agregar valores a un Arreglo, retorna la cantidad de elementos que hay guardados en él.

//CODIGO

/* 
let colores = ["rojo", "verde", "azul"]

colores.push("naranja") //4
colores.push("marron", "violeta") //6

 */



("----------------------------------");
/* Método pop()

El método .pop() saca el último elemento del Arreglo y lo retorna. Ese valor, a su vez, lo podemos guardar para volverlo a usar.

Importante: El método pop no lleva Argumentos y solamente saca el último elemento, uno por vez.

Sintaxis Del Método pop(): */

//CODIGO

nombrearreglo.pop(); //no solo elimina el ultimo elemento, sino que tambien lo devuelve para re-utilizarlo 



//Veamos un ejemplo:

//CODIGO

let colores = ["rojo", "verde", "azul"]

let color = colores.pop() //se eliminaria el color azul del arrego colores. a su vez "azul" se guardaria como valor de la variable color





//Veamos en este ejemplo un poco más acerca de .pop():

//CODIGO


let numbers = [] //inicializamos un arreglo vacio

numbers.push(2) // [ 2 ]
numbers.push(4 , 10, 5) // [2, 4, 10, 5]

numbers.pop() //quita el ultimo elemento, que en este caso seria el numero 5
//[2, 4, 10]












