//VARIABLES DE TIPO ARREGLO 

//let cars = new Array("BMW", "Mercedes Benz", "Volvo"); ASI SE HACIA ANTES

const cars = ["BMW", "Mercedes Benz", "Volvo"];
console.log(cars);

//ACCEDER A LOS ELEMENTOS DE UN ARREGLO
//Acceder de manera individual.
console.log(cars [0]);
console.log(cars [1]);
console.log(cars [2]);
//Acceder a todos a la vez
for( let i = 0; i < cars.length; i++){
    console.log(cars[i]);
}

//MODIFICAR UN ELEMENTO DE UN ARREGLO
cars[1] = "TOYOTA";
console.log(cars[1]);
//AGREGAR UN ELEMENTO A MI ARREGLO
cars.push("Audi");
console.log(cars);

//OTRAS FORMAS DE AGREGAR UN ELEMENTO A MI ARREGLO, be carefull

cars[cars.length] = "Cadillac";
console.log(cars);

cars[6] = "Porshe";//Para dejar un elemento vacio, pero no es recomendale a menos que lo necesitemos
console.log(cars);

//COMO SABER SI LA VARIABLE CON LA QUE TRABAJAMOS EN UN ARREGLO

console.log(Array.isArray(cars));
console.log(cars instanceof Array);