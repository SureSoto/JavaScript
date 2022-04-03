class Person {
    static personCounter = 0;
  
    constructor(name, lastName,age){
        this._name = name;
        this._lastName = lastName;
        this._age = age;
        this._idPerson = ++Person.personCounter;
    
    }
    get idPerson(){
        return this._idPerson;
    }
    set idPerson(idPerson){
        this._idPerson = idPerson;
    }

    get name(){
        return this._name;
    }
    set name(name){
        this._name = name;
    }
    get lastName(){
        return this._lastName;
    }
    set lastName(lastName){
        this._lastName = lastName;
    }
    get age(){
        return this._age;
    }
    set age(age){
        this._age = age;
    }
    
    toString(){
        return `
            ${this._idPerson}
            ${this._name}
            ${this._lastName} 
            ${this._age}`
    }
}

class Employee extends Person{
    static employeeCounter = 0;

    constructor(name, lastName,age,salary){
        super(name,lastName,age,salary);
        this._idEmployee = ++Employee.employeeCounter;
        this._salary = salary;

    }
    get(){
        return this._idEmployee;
    }
    get(){
        return this._salary;
    }
    set(salary){
        this._salary = salary;
    }
    toString(){
        return `
            ${super.toString()}
            ${this._idEmployee}
            ${this._salary}`
    }
    
}

class Customer extends Person{
    static customerCounter = 0;
    constructor(name, lastName,age,registrationDate){
        super(name, lastName,age,registrationDate);
        this._idCustomer = ++Customer.customerCounter;
        this._registrationDate = registrationDate;
    }
    get(){
        this._idCustomer;
    }
    get(){
        this._registrationDate;
    }
    set(registrationDate){
        this._registrationDate = registrationDate;
    }
    toString(){
        return `
            ${super.toString()}
            ${this._idCustomer} 
            ${this._registrationDate}`;
    }
}

 let personOne = new Person('Surely','Soto','24');
 console.log(personOne.toString());
 let persontwo = new Person('Joel', 'Turbi', '24');
 console.log(persontwo.toString());
 console.log(Person.personCounter);

 let employeeOne = new Employee('Marianela','Rinaldi',17, '10,000 USD');
 console.log(employeeOne.toString());
 let employeeTwo = new Employee('Jazmin', 'Romero', 17, '11,000 USD');
 console.log(employeeTwo.toString());
 console.log(Employee.employeeCounter);

 let customerOne = new Customer('Thiago', 'Bedoya', 17, new Date());
 console.log(customerOne.toString());