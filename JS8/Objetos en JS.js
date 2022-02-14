let x = 10;
console.log(x.length);
//CREANDO UN OBJETO
let person = {
    name: "July",
    lastName: "Guigni",
    email: "julylovecats@gmail.com",
    age: 10,
    //Concatenar el nombre y el apellido
    fullName: function (){
        return this.name + " " + this.lastName;
    }
}

console.log(person.name);
console.log(person.lastName);
console.log(person.email);
console.log(person.age);
console.log(person);
console.log(person.fullName());
//Otra forma de acceder a la propiedades de nuestro objeto
console.log(person["lastName"]);
 
//for in para acceder a todas las propiedades de los objetos.
for( propieties in person){
    console.log(propieties);
    console.log( person [propieties]);
}
//Agregar y Eliminar propiedades de un objeto.
//A g r e g a r

person.tel = "1122334455"
console.log( person);

//E l i m i n a r

delete person.tel;
console.log(person);

//CREAR OBJETO CON NEW

let person2 = new Object();
person2.name = "Sunny";
person2.address = "41 Salcedo";
person2.tel = " 1234567890";
//Aceder a los atributos
console.log(person2.tel);