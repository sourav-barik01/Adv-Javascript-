// Creating Inheritance Using Class Based Prototype
class Category {
    constructor(x){
        this.categoryName = x;
    }
}
class Product extends Category {
    constructor(x, y){
        super(x);    // By this we pass value to super class i.e Category
        this.productName = y;
    }
}

const obj = new Product("Realme", "Mobiles");
console.log(obj)        // Expected Output : Product { categoryName: 'Realme', productName: 'Mobiles' }

<-------------------------------------------------------------------------

// Creating Inheritance Using Function by using setPrototypeOf()
function A() {}
function B()  {}
Object.setPrototypeOf(A.prototype, B.prototype);            // We can see in console : That they are jointly inherited with each other A & B

------------------------------------------------------------------------->

// You can see how B() can use the function which is declared in A()
function A() {}
A.prototype.fun = function() {console.log("Hi I am in A")};        // In Console : ƒ () {console.log("Hi I am in A")}

function B() {}
Object.setPrototypeOf(B.prototype, A.prototype);            // In Console : A {constructor: ƒ}

const x = new B();
x.fun();        // Expected Output : Hi I am in A

<-------------------------------------------------------------------------

// Therefore you can use in js, there is only multilevel inheritance and no multiple inheitance. Same is in the case of JAVA
