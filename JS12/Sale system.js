class Product{
    static productCounter = 0;

    constructor(name,price){
        this._name = name;
        this._price = price;
        this._idProduct = ++Product.productCounter;
    }
    get(){
        this._idProduct;
    }
    get(){
        this._name;
    }
    set(name){
        this._name = name;
    }
    get(){
        this._price;
    }
    set(price){
        this._price = price;
    }
    toString(){
        return `
        Id Product: ${this._idProduct} 
        Name: ${this._name} 
        Price: ${this._price}`
    }
}

class Order{
    
     
    static orderCounter = 0;
    static get MAX_PRODUCT(){
        return 5;
    }  
    
    constructor(order){
        this._idOrder = ++Order.orderCounter;
        this._products =[];
        this._addedProductCounter = 0;
    }
    get idOrder(){
        return this._idOrder;
    }
    addProduct(product){
        if(this._products.length < Order.MAX_PRODUCT){
            this._products.push(product);
        }
        else{
            console.log('No more products can be added')
        }

    }
    calculateTotal(){
        let totalSale = 0;
        for(let product of this._products){
            totalSale += product._price;
        }
        return totalSale;
    } 
    showOrder(){
        let productsOrder = '';
        for(let product of this._products){
            productsOrder += product.toString() + ' ';
        }
        console.log(`
                Order: ${this._idOrder}
                Total: ${this.calculateTotal()}$
                Product: ${productsOrder}`);
    }
    // toString(){

    // }
}

//MIS PRODUCTOS

let productOne = new Product('scissors', 2);
console.log(productOne.toString());

let producTwo = new Product('eraser', 1);
console.log(producTwo.toString());

let producThree = new Product('glue', 3);
console.log(producThree.toString());

let orderOne = new Order();
orderOne.addProduct(productOne);
orderOne.addProduct(productOne);
orderOne.addProduct(producThree);

orderOne.showOrder();