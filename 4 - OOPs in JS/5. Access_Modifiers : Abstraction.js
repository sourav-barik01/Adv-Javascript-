class Product {
    #name;      // Way to make the variable private
    price
    description;

    constructor(n, p, d){                
        this.#name = n;
        this.price = p;
        this.description = d;
    }
    display(){
        console.log(this.#name);
    }
    set setName(x){                              // set keyword is used to set the data
        if(typeof(x) !== "string"){
            console.log("Invalid Type");
            return;
        }
        this.#name = x;
    }
    get getName(){                               // get keyword is used to get the data
        return this.#name;
    }
}

const p = new Product("Bag", 1000, "Brown In Color");
p.display();                         // Expected Output : Bag
console.log(p);                      // Expected Output : Product { price: 1000, description: 'Brown In Color' }. Here name is not there due to pvt name
p.setName = -1;                      // Expected Output : Invalid Type
p.setName = "New Bag";               // The name is set to new name
p.getName;
console.log(p);                      // Expected Output : Product { price: 1000, description: 'Brown In Color' }. Here name is not there due to pvt name
p.display();                         // Expected Output : New Bag
