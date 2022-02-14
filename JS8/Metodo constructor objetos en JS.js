function Person(name,lastName,email){
    this.name = name; 
    this.lastName = lastName;
    this.email = email; 
    this.fullName = function(){ // este es el metodo agregado
        return this.name + " " + this.lastName;
    }
}


//crear objeto de tipo persona
let dad = new Person("Alex", "Turbi", "alexturbi@gmail.com");
console.log(dad);

let mom = new Person("Surely", "Soto", "surelysoto@gmail.com");
console.log(mom);

dad.name = "Joel"; //Cambiar el nombre por otro
console.log(dad);
console.log(mom);
//Esto se da al agregar un metodo al metodo constructor para unir los apellidos
console.log(dad.fullName());
console.log(mom.fullName());

//PROTOTYPE

Person.prototype.tel = " 1122334455" //AGREGAR PROPIEDAD A AMBOS OBJETOS
dad.tel = "33445566"; // Para cambiarle la propiedad a un solo objeto
console.log(dad.tel);
console.log(mom.tel);

//No es necesario usar NEW, esta sintaxis es mas breve y mas recomendada
let myObject = {}; // en vez de let myObjet = new Object
let myString = "hola"; // instead of let myString = new String("hola") 
let myNumber = 1; // instead of let myNumber = new Number(1)
let myBoolean = false; //instead of let myBoolean = new Boolean(false)
let myArray = []; //instead of let myArray = new Array()
let myFunction = function(){}; // instead of let myFunction = new function()


