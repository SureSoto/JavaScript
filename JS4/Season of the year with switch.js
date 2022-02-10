let month = 4; 
let season = "unknown season"
/*switch utiliza una comparacion estrita, se puede usar cadena,pero en este
caso si pongo el valor "4" me marcara la opcion de default, porque no es un numero sino una cadena*/
switch ( month ){
    case 1: case 2: case 12:
        season = "winter";
        break;
    case 3 : case 4: case 5:
        season = " spring";
        break;
    case 6 : case 7: case 8:
        season = " summer";
        break;
    case 9 : case 10: case 11:
        season = "fall";
        break;
    default:
        season = "wrong value";
}
console.log(season);