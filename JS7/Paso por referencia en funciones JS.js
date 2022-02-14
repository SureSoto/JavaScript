//Vamos a crear un objeto 
// para hacer esto es buena practica definir una variable pero tipo constante eh
const person = {
    name: "Sury",
    lastName: "Soty"
}

function changeValueObject(p1){
    p1.name = "Sure"; // pa cambiar el nombre, por paso de referencia, p1 hace referencia a person
    p1.lastName = "Soto";
}
//paso por referencia se hace aqui mimito con esto
changeValueObject(person);
console.log( person); 