/* Cuando definimos una funcion podemos observar que dentro de los parentesis hemos definido
 variables y se les conoce como parametros y los argumentos  son los valores que finalmente 
 pasamos anuestra funcion, que son los valores que finalmente asignamos a los parametros que 
 hemos definido en nuestra funcion*/

 //Imprimir los argumentos

 let sumar = function (a, b){// podemos agregar valores por default (a= 5, b=2), pero no son argumentos eh
     console.log (arguments[0]);
     console.log( arguments[1]);
     return a + b
 }
 resultado = sumar (5,2);// no es necesario especificar todos los argumentos y quedaria como indefinidos
 console.log(resultado);
 /* podemos agregar otro argumento si queremos. la cantidad de parametros no tiene que conincidir
 con la cantidad de argumentos que hay */