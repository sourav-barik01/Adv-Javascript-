/*
When a function is called with the new keyword, the function will be used as a constructor. new will do the following things:
> Creates a blank, plain JavaScript object. For convenience, let's call it newInstance. 
> It get link to a obj.prototype
*/
    
// Consider This Eg.
class Product {
    name;
    price
    description;

    constructor(n, p, d){                // In c++ / java, we write name as of class name but in js we write "constructor"
        this.name = n;
        this.price = p;
        this.description = d;
        // return 10;                     nothing happens as it doesn't need a return with primitive value bcz it means to return only non-primitive value
        return {};                        // But if we return obj, then it will give return object
        return this;                      // By default, this is returned everytime
    }

    display(){
        // Printing Product
    }
}

const obj = new Product("Bag", 800, "Brown Clour");
console.log(obj);                 // Expected Output : Product { name: 'Bag', price: 800, description: 'Brown Clour' }
console.log(obj.name);            // Expected Output : Bag
console.log(obj);                 // Expected Output : {} -> if we return {} from constructor


/*
Note : In c++ / java, there is a concept called constructor overloading, but in JS; there is no such thing. You can't create 2 constructor, only 
1 constructor can be created. If one constructor can be created how can it be overloaded ?
*/
