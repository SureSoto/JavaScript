let person = {
    name: "July",
    lastName: "Guigni",
    email: "julylovecats@gmail.com",
    age: 10,
    language: "es",
    get fullName(){
        return this.name + " " + this.lastName;
    },
    get lang(){
        return this.language.toUpperCase();
    },
    set lang( lang ){
        this.language = lang.toUpperCase();
    },
}
console.log(person.lang);
console.log(person.fullName);
person.lang = "en";
console.log(person.lang);
console.log(person.language);
