let result = addAll(5, 4, 13, 10, 9);
console.log(result); 

function addAll(){
    let add = 0;
    for (let i = 0; i < arguments.length; i++){
       add += arguments[i]; 
    }
    return add;
}