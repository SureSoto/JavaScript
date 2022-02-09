let a = 3 , b = 2 ;
let z = a+ b;
console.log("Addition result :" + z);

z= a - b;
console.log("subtraction result:" + z);

z= a * b;
console.log("multiplication result:" + z);

z= a / b;
console.log("Division result:" + z);

z= a % b; //Residuo de la division
console.log("Result of the modulo operation :" + z);

z= a ** b;
console.log("result of exponent operator :" + z);

//Incremento
//Pre Incremento: se pone el operador ++ antes de la variable. primero se incrementa el valor a "a" y luego se le asigna el valor a la variable.
z= ++a;
console.log(a);
console.log(z);
//Post-incremento : se pone el operador ++ despues de la variable. Primero se utiliza el valor original de la variable y luego se incrementa.
z= b++;
console.log(b);
console.log(z);

//Decremento
//Predecremento
z = --a;
console.log(a);
console.log(z);
//Post- decremento
z = b--;
console.log(b);
console.log(z);

//Presedencia de los operadores

let r= 3, s= 2, t= 1, u= 4;

let v = r * s  + t / u;
console.log(v);

v= t + r * s / u;
console.log(v);

v = (t + r) * s / t;
console.log(v);

//Operadores de asignacion

// Operador de asignacion compuesto.

let x = 1

x += 3; 
console.log(x);

x -= 2;
console.log(x);

x *= 3;
console.log(x);

x /= 2;
console.log(x);

//OPERADORES DE COMPARACION.

let c = 3, d = 2, e = "3", f = 3;

let y = c == e;//revisa el valor sin importar el tipo, por eso es true apesar de que e es una cadena.
console.log(y);

y = c === e;//revisa el valor pero tambien los tipos
console.log(y);

y = c != e;//Para saber si el valor es diferente
console.log(y);

y = c !== e;//Revisa si el valor es diferente pero tambien los tipos
console.log(y);

y = c < d;
console.log(y);

y = c > d;
console.log(y);

y = c <= f;
console.log(y);

y = c >= f;
console.log(y);







