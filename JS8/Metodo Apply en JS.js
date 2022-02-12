let person1 = {
    name: "Avery",
    lastName: "Turbi",
    fullName: function(titulo, tel){
        return  titulo + ": " + this.name + " " + this.lastName + "," + tel;
    }
}

let person2 = {
    name: "Alai",
    lastName: "Turbi",
}
//Uso de APPLY
console.log(person1.fullName("Lic.", "8765435035"));
let array = ["Ing", "8765435435"]
console.log (person1.fullName.apply(person2, array));
//Diferencia con call: hay que pasar un arreglo y ya nop hay que poner lic o el tel