/* slice()

El método slice() se usa para generar una copia de un Arreglo. Esto sirve para trabajar sobre el clon del Arreglo sin afectar su original.

Como los Arreglos se pasan por referencia y no por valor, necesitamos un método para poder alterar un Arreglo sin afectar el original.
*/

//Sintaxis Del Método slice()

let arregloCopia = arreglo
  .slice()

  //Los Argumentos Del Método slice()

  .slice() //: Si el Argumento queda vacío, slice copia el Arreglo entero. Debemos guardar ese valor en una Variable.

  .slice(argumento1) //: Clona el Arreglo desde el Índice pasado como Argumento (en este caso, argumento 1) y lo clona desde ese elemento inclusive hasta el último.

//[argumentos, argumento, argumento1, argumento2,argumento3]
//[argumento1, argumento2, argumento3]


  .slice(argumento, argumento3); //: Clona el Arreglo desde el Índice pasado como primer Argumento (argumento 1), lo selecciona, y clona desde ese Índice hasta el segundo Argumento (argumento2), sin incluirlo.

//[argumentos, argumento, argumento1, argumento2,argumento3]
//[argumento, argumento1, argumento2]


//Veamos un ejemplo para ver la diferencia de cada caso:


//CODIGO


let frutas = ["banana", "naranja", "limon", "manzana", "sandia"]

let todasFrutas = frutas.slice() //clona el arreglo entero

let todasLasFrutasMenosBanana = frutas.slice(1) //clona desde le indice 1 inclusive, hasta el final
//todasLasFrutasMenosBanana
//["naranja", "limon", "manzana", "sandia"]

let citricos = frutas.slice(1, 3) // el primer numero lo incluye y el segundo numero no lo incluye. clona desde el indice 1 hasta el indice 2, sin incluir el 3
//["naranja", "limon"]








