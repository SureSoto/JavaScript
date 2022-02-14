//imprimir en navegador web
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
// 1.Concatenar cada valor cde c/propiedad
console.log( person.name + " , " + person.lastName);

// 2. for in

for ( propieties in person){
    console.log(person[propieties]);
}

// Object.values 

let personArray = Object.values (person);
console.log(personArray);

// Jason.Stringify

let personString = JSON.stringify(person);
console.log(personString);