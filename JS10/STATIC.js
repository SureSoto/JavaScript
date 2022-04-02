class Person {
    static contadorObjetosPersona = 0; //atributo de nuestra clase
    email = 'valor default email'; //atributo de nuestro objeto;
    constructor(name, lastName){
        this._name = name;
        this._lastName = lastName;
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
        return this._name + ' ' + this._lastName;
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
console.log(employee1);
console.log(employee1.fullName());
console.log(employee1.toString());

//persona.sayHi(); NO ES POSIBLE LLAMAR UN METODO STATIC DESDE UN OBJETO
Person.sayHi();

Person.sayHi2(person1);
//Los metodos staticos se heredan. 
Employee.sayHi();
Employee.sayHi2(employee1);

console.log(person1.email);
console.log(employee1.email);
console.log(Person.email);//NO SE PUEDE  