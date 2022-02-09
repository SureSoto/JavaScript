var nombre = "Surely";
var apellido = "Soto";

var nombreCompleto = nombre + ' ' + apellido; // '' se pone con un espacio dentro, para que el nombre y apellido no salgan pegados
console.log(nombreCompleto);

var nombreCompleto2 = "Surely" + ' ' + "Soto"; // otra manera de hacerlo, pero en cortito
console.log(nombreCompleto2);

var x = nombre + 2 + 9; // El 2 y 9 no se suman, porque hay un orden, en donde sale el string primero y algo asi
console.log(x);

x= nombre + (2+4); // En este caso se suma porque esta dentro de parentesis y eso como que se prioriza
console.log(x);

x = 2 + 4 + nombre; //Aqui se suman porque aparecen primero que el string y le da como prioridad.
console.log(x);

//Sintasis basica de JS para declarar variables.

/* Hemos utilizado var pa declarar variables en vano,
 esa vaina ahora es disque mala practica, ya no se usa,
 ahora se usa let pa una variable y const para una constante, */

 nombre = "Juan"; // se puede declarar una variable sin necesidad de poner ninguna sintaxis, pero es mala practica.
 console.log(nombre);

// let nombre = "Sure"; esto es lo correcto

/*let nombre;
nombre = "Sure";
console.log(nombre);*/ //Se puede primero definir las variables y despues asginarle los valores.

const Apellido = "Soto";


//Buenas practicas para nombres de variables

let a, b;
a= 10, b= 20;
let c= a + b;
console.log(c);

let fullName = "Julianny Guigni";
let fullname = "Mayra Casilla";
console.log( fullName );
console.log( fullname );

/*El nombre de una variable no puede empezar con un numero
ejemplo: let 1name.
los unicos caracteres permitidos son: una letra mayuscula o minuscula,
el signo de dollar $ o guion bajo_, pero si ponemos algunos de esto podemos ponerle luego
un numero. ejemplo: let $1name; let _1name; let a1name*/

//Las palabrass reservadas no se pueden usar para definir variables.





