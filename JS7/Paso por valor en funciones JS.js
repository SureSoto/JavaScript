/*El paso por valor es cuando utilizamos tipos que no son objetos, lo aplicaremos cuando 
estemos enviando argumentos a las funciiones*/
//PASO POR VALOR
let x= 10; //Este valor se conoce como valor primitido, ya que, no tiene propiedades ni metodos.

//crear metodo para cambiar el valor, no se hara porque es primitivo, SOLO SERA UN PASO POR VALOR.
/* la variable x solo paso su valor a "a", le paso una copia, peor no
 tienen ninguna relacion una con la otra, cualquier cambio en la variable a no modifica a la variable x */

function changeValue(a){
    a = 20;
}
changeValue(x); 
console.log(x);

