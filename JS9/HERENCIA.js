//HERENCIA
/*ESTA ES NUESTRA CLASE PADRE */
class Person{
    constructor(name, lastName){
        this._name = name;
        this._lastname = lastName;
    }
    get name(){
        return this._name;
    }
    get lastname(){
        return this._lastName;
    }
    set name(name){
        this._name = name;
    }
    set lastName(lastName){
        this._lastname = lastName;
    }
    fullName(){
        return this._name + ' ' + this._lastname;
    }
    //Sobreescribiendo el metodo de la clase padre(Objet)
    toString(){
        //Se aplica polimorfismo
        //El metodo que se ejecuta depende de si es una referencia de tipo padre o de tipo hijo. 
        return this.fullName();
    }
}
/*CLASE HIJA */

class Employee extends Person {
    constructor(name, lastName,departmet){
        super(name, lastName);//Llamar al constructor de la clase padre
        this._departament = departmet;
    }
    get departmet(){
        return this._departament;
    }
    set departmet(departmet){
        this._departament = departmet;
    }
//SOBREESCRITURA
/* Quiero agregar el departamento a full name, pero eso esta en la clase padre y el departamento en la clase hija,
asi que sobre escribo y ya, safe. podria escribir todo el codigo de la clase padre aqui, pero pos, no somos bruticos
mejor le pongo super punto el nombre del metodo y pos ya no escribo to eso */
    fullName(){
        return super.fullName() + ', ' + this._departament;
    }
}

//CREAR OBJETOS DE LA CLASE PADRE

let employee1 = new Person('Avery', 'Turbi');
console.log(employee1);

//CREAR OBJETO CLASE HIJA
let employee2 = new Employee('Alai', 'Soto', 'Neurociencias');
console.log(employee2);
console.log(employee2.name);//metodo GET heredado de la clase padre.

//ACCEDER A UN METODO QUE CREAMOS PARA ADQUIRIR EL NOMBRE FULL
console.log(employee2.fullName());

//LA CLASE OBJECT ES LA CLASE PADRE DE TODOS LOS METODOS.
//Todo esto es llamado polimorfismo.
/*Esta clase tiene diferentes metodos, como toString que es una buena practica agragarlo a nustras clases*/
console.log(employee2.toString());
 /*Estamos llamando fullName desde el metodo toString y el metodo que se
ejecuta es el metodo definido en la clase hija */

console.log(employee1.toString());
/*Aqui se llama el metodo fullName, definido en la case padre, por eso no se ve el departamento, porque
 etsamos usando una referencia de la clase padre */