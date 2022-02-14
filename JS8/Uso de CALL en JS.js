let person1 = {
    name: "Avery",
    lastName: "Turbi",
    fullName: function(titulo, tel){
        return titulo + ": " + this.name + " " + this.lastName + "," + tel;
    }
}

let person2 = {
    name: "Alai",
    lastName: "Turbi",
}
//Uso de Call para usar el metodo person1.fullName pero con los datos de mi person2 
console.log(person1.fullName("Lic.", "8765435035"));
console.log (person1.fullName.call(person2, "Ing", "8765435435"));

//PASAR ARGUMENTOS 
/*Para esto agregamos a la funcion el titulo y el tel  y agregamos cuando ibamos a imprimir
lic, ing y el numero de telefono */
