/* Ejemplo de tipos de datos */

//Tipo de datos string
var nombre = "Carlos" ;
console.log (nombre);

nombre= 10;
console.log(typeof nombre);

//tipo de dato numerico
var number = 1000;
console.log(number);

//Tipo de dato object
var objeto = {
    nombre : "Juan", 
    apellido: "Perez",
    telefono: "8298364757"
}
console.log(objeto)

//Tipo de dato boolean (true,false)
var bandera = true ;
console.log(bandera);

//Tipo de dato funcion
function mifuncion(){}
console.log(mifuncion);

//Tipo de dato symbol
var simbolo = Symbol("mi simbolo"); //tengo que escribibir symbol con la inicial en mayuscula
console.log(simbolo);

//Tipo clase es una funcion
class Persona{
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }   
}
console.log(typeof Persona);

//Tipo undefined
var x;
console.log(x);

x= undefined;
console.log(x);
//null significa ausencia de valor, el tipop de dato de null es object
var y = null;
console.log(y);
//Arreglos: son un tipo object
var autos = ['BMW', 'Audi', 'Volvo'];
console.log(autos);
console.log(typeof autos);
//Tipo de datos con cadena vacia
var z = '';
console.log(z);
console.log(typeof z);
