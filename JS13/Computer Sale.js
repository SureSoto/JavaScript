class InputDevice{

    constructor(inpuType, brand){
        this._inpuType = inpuType;
        this._brand = brand;
    }
    get inpuType(){
        return this._inpuType;
    }
    set inpuType (inpuType){
        this._inpuType = inpuType; 
    }
    get brand(){
        return this._brand;
    }
    set brand(brand){
        this._brand = brand;  
    }
}

class Mouse extends InputDevice{

    static mouseCounter = 0;

    constructor(inpuType, brand){
        super(inpuType, brand);
        this._idMouse = ++Mouse.mouseCounter;
    }

    get idMouse(){
        return this._idMouse;
    }
     
    
    toString(){
        return ` 
         Mouse:  ${this._idMouse}
         Input Type: ${this._inpuType} 
         Brand: ${this._brand}
         `
    }
}
class Keyboard extends InputDevice{

    static keyboardCounter = 0;

    constructor(inpuType, brand){
        super(inpuType, brand);
        this._idKeyboard = ++Keyboard.keyboardCounter;
    }
    get idKeyboard(){
        return this._idKeyboard;
    }
    
    toString(){
        return `
        Keyboard: ${this._idKeyboard} 
        Input Type: ${this._inpuType}
        Brand: ${this._brand}`
    }
}

class Monitor{

    static monitorCounter = 0;

    constructor(brand,size){
        this._idMonitor = ++Monitor.monitorCounter;
        this._brand = brand;
        this._size = size;
    }
    get idMonitor(){
        return this._idMonitor;
    }
   
    toString(){
       return `
       Monitor: ${this._idMonitor}
       Brand: ${this._brand}
       Size: ${this._size}`
    }
}

class Computer{

    static computerCounter = 0;

    constructor(name,monitor,keyboard,mouse){
        this._idComputer = ++Computer.computerCounter;
        this._name = name;
        this._monitor = monitor;
        this._keyboard = keyboard;
        this._mouse = mouse;
    }

    toString(){
        return `
        Computer: ${this._idComputer} ${this._name}
         ${this._monitor}
         ${this._keyboard}
        ${this._mouse}`
    }
}

class Order{
    static orderCounter = 0;
    constructor(){
        this._idOrder = ++Order.orderCounter;
        this._computers = [];
    }
    get idOrder(){
        return  this._idOrder;
    }
    addComputer(computer){
        this._computers.push(computer);
    }
    showOrder(){
        let computerOrder = '';
        for(let computer of this._computers){
            computerOrder += ` ${computer}`;
        }
        console.log(`Oder: ${this._idOrder}, Computers: ${computerOrder}`);
    }
    
   
}

//MOUSE OBJETC

let mouseOne = new Mouse('USB', 'Logitech');
console.log(mouseOne.toString());

let mouseTwo = new Mouse('Bluetooth', 'Logitech');
console.log(mouseTwo.toString());


//KEYBOARD OBJETC

let keyboardOne = new Keyboard('USB', 'AJAZZ');
console.log(`${keyboardOne}`);

let keyboardTwo = new Keyboard('USB', 'MSI');
console.log(keyboardTwo.toString());

//MONITOR OBJECT

let monitorOne = new Monitor('DELL', 32);
console.log(monitorOne.toString());

let monitorTwo = new Monitor('MAC', 24);
console.log(`${monitorTwo}`);

//COMPUTER OBJECT

let computerOne = new Computer('HP', monitorOne, keyboardOne, mouseOne);
console.log(`${computerOne}`);
let computerTwo = new Computer('HP', monitorTwo, keyboardTwo, mouseTwo);
console.log(`${computerTwo}`);

/*NOTA: Se puede imprimir asi keyboardTwo.toString() o `${keyboardOne}` ya que este ultimo
llama al metodo toString de una vez*/

//ORDER OBJET
let orderOne = new Order();
orderOne.addComputer(computerOne);
orderOne.addComputer(computerOne);
orderOne.addComputer(computerTwo);
orderOne.showOrder();
