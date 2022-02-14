//DECLARAR UNA FUNCION

function myFunction ( a, b ){
    console.log("addition: " + ( a+ b ));
}
//Llamar a la funcion
myFunction ( 2 ,3 );

/*podemos llamar la funcion  encima de donde la declaramos por el concepto de hoisting
y se realizara, pero se ve feo en este ejemplo, yo no lo hare*/ 

// RETURN

function myFunction2 ( c, d ){
    return c + d; 
}
let result = myFunction2 ( 5 ,3 );
console.log( result);

//TIPO EXPRESION
//Declarando mi funcion 
let x = function (e ,f ){ return e + f};
    result2 = x (3, 4);
    console.log(result2);
/*En esto definimos nuestra funcion la asignamnos una variable(x) 
sin necesidad de ponerle nombre a la funcion*/

//TIPO SELF INVOKING
//Definir funcion
(function (a, b){
    console.log("Ejecutanto la funcion: " + (a + b));
})(10, 3);
//FUNCIONES COMO OBJETO
 console.log(typeof myFunction);

 //para saber cuando argumentos tiene mi funcion dentro de mi funcion
 function myFunction2 ( c, d ){
     console.log(arguments.length); 
    return c + d; 
}
//Metodo tostring
var myFunctiontext= myFunction.toString();
console.log(myFunctiontext);
 //FUNCIONES DE TIPO FLECHA

 const addFuntionTypeArrow = ( h, g ) => h + g;
 result3 = addFuntionTypeArrow(3,5);
 console.log (result3);

  