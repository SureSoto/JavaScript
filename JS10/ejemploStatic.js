class Person {
    static personCounter = 0; 
   //DECLARAR UNA VARIABLE ESTATICA HACIENDO UN METODO STATICO

   static get MAX_OBJ(){
       return 5;
   }


    constructor(name, lastName){
        this._name = name;
        this._lastName = lastName;
       
        if(Person.personCounter < Person.MAX_OBJ){
            this.idPerson = ++Person.personCounter;
        }
        else{
            console.log('ERROR');
        }
    }
    get name(){
        return this._name;
    }
    get lastName(){
        return this._lastName;
    }
    set name(name){
        this._name = name;
    }
    set lastName(lastName){
        this._lastName = lastName;
    }
    fullName(){
        return this.idPerson + ' ' + this._name + ' ' + this._lastName;
    }
    toString(){
        return this.fullName();
    }
    static sayHi(){
        console.log('Hi, from static method');
    }
    static sayHi2(person){
        console.log(person.name);
    }
}

class Employee extends Person{
    constructor(name, lastName,department){
        super(name, lastName);
        this._department = department;
    }
    get department(){
        return this._department;
    }
    set department(department){
        this.department = department;
    }
    fullName(){
        return super.fullName() + ', ' + this._department;
    }
}
let person1 = new Person('Juan', 'Perez');
console.log(person1.toString());

let employee1 = new Employee('Maria', 'Jimenez', 'Sistemas');
console.log(employee1.toString());

let person2 = new Person('Joel', 'Turbi');
console.log(person2.toString());

console.log(Person.personCounter);

console.log(Person.MAX_OBJ);
Person.MAX_OBJ = 10;
console.log(Person.MAX_OBJ);

let person3 = new Person('Penelope', 'Garcia');
let person4 = new Person('Anacleta', 'Mirabal');
let person5 = new Person('Marge', 'Bouvier');
console.log(person5.toString());
console.log(person3.toString());

