//OPERADOR AND
let a= 5
let valMin= 0, valMax = 10 ;

if ( a >= valMin && a <= valMax ) {
    console.log( "Inside the range");
}
else{
    console.log( "out of range ");
}
/* El operador AND(&&) Tiene como objetivo regresarme un valor verdadero SOLO SI ambos lados de mi 
expresion son verdaderos y falso si ambos lados de mi expresion son falsoss*/
 
//OPERADOR OR

let vacation= true, dayoff= false;
if ( vacation || dayoff ){
    console.log( " He can go to the son's game");
}
else{
    console.log("Him is busy");
}
/* El operador OR(||) el valor sera verdadero SI uno es verdadero y falso SI los dos son falsos*/

//OPERADOR TERNARIO (condicional)

let result = 3 > 2 ? "true" : "false"; // podemos poner un numero en vez de una cadena, como 0 para falso y dejar verdadero
console.log(result);

let number = 9
result = (number % 2 == 0 ) ? "even number" : "odd number";
console.log(result);

//EJERCICIO

let myNumber = "10";
let age = Number(myNumber);

//Usando IF y ELSE
if(age >= 18){
    console.log("can vote")
}
else{
    console.log("cannot vote");
}

//Usando OPERADOR TEMERARIO
let Result = ( age >= 18 ) ? "can Vote" : "cannot vote";// al principio en vez de age puse myNumber, pero age es la edad convertida en numero, asi que eso debo usar
console.log(Result);

//FUNCION NaN

//Usando el ejemplo anterior pero cambiando nombres de variables
// Vamos a preguntar si el valor de la variable es un numero, pondremos el valor tipo cadena agregando una letra.
let theNumber = "10x";
let theAge = Number(theNumber);
console.log(theAge);//Aqui nos dice que el valor no es un numero por eso NaN

if(isNaN (theAge)){
    console.log("Is not a number")
}
else{
   
    if(theAge >= 18){
        console.log("can vote")
    }
    else{
        console.log("cannot vote");
    }
}

//En el caso del Operador ternario

if(isNaN (theAge)){
    console.log("Is not a number")
}
else{
    let theResult = ( theAge >= 18 ) ? "can Vote" : "cannot vote";
    console.log(theResult);
}
