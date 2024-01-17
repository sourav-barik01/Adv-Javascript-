var obj1 = {
    name : "Sourav",
    company : "Not Placed",
    display : () => {
        console.log(this.name, "is", this.company, "and is student of BIT Mesra");      // agr yaha this ko value ni mila toh ek scope upr jyega
    }
}

var obj2 = {
    name : "Sourav",
    company : "Not Placed",
    display : () => {
        setTimeout(() => {
            console.log(this.name, "is", this.company, "and is student of BIT Mesra");
        })
    }
}

var obj3 = {
    name : "Sourav",
    company : "Not Placed",
    display : function(){
        console.log(this.name, "is", this.company, "and is student of BIT Mesra");
    }
}


console.log(this);      // Expected o/p : {} bcz this in lexical scoping or in arrow function returned empty obj / undefined
obj1.display();      // Expected o/p : undefined is undefined and is student of BIT Mesra
obj2.display();      // Expected o/p : undefined is undefined and is student of BIT Mesra
obj3.display();      // Expected o/p : Sourav is Not Placed and is student of BIT Mesra
