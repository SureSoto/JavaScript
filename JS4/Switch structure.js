let number = 8;
let numberText = "unkown value";

switch( number){
    case 1:
        numberText = "number one";
        break;
    case 2:
        numberText = "number two";
        break;
    case 3:
        numberText = "number three";
        break;
    case 4:
        numberText = " number four";
        break;
    default:
        numberText = "case not found"
}
console.log(numberText);

/* en este caso agrego al principio el valor para numberText
pero tambien el de default, asi que me quede confusa y al quitar 
el default, comprobe que si se agraga el valor de numberTex, si 
el numero no corresponde con los casos, asi que aun no se porque
hizo ambos, si hay uno que ni usara*/




