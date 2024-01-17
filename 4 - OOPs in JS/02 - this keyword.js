// A function's this keyword behaves a little differently in JavaScript compared to other languages.
// Except one case(arrow function), this always referred to calling site/content

// Eg.
let students1 = {
    name : "Sourav",
    roll : "BTECH/60024",
    Seme : "VIII",
    display(){
        console.log(this);
    }
}

let students2 = {
    name : "Ayush",
    roll : "7339",
    Seme : "XI",
    display(){
        console.log(this);
    }
}

students1.display();
students2.display();

// Expected Output
{                                // Here, this returns the whole student1 object
  name: 'Sourav',
  roll: 'BTECH/60024',
  Seme: 'VIII',
  display: [Function: display]        
}
{                                // Here, this returns the whole student2 object
  name: 'Ayush',
  roll: '7339',
  Seme: 'XI',
  display: [Function: display]
}


// Note : But this is not the case in arrow function
// Eg.
let students1 = {
    name : "Sourav",
    roll : "BTECH/60024",
    Seme : "VIII",
    display:() => {
        console.log(this);
    }
}

let students2 = {
    name : "Ayush",
    roll : "7339",
    Seme : "XI",
    display(){
        console.log(this);
    }
}

students1.display();
students2.display();

// Expected Output
{}                        // Therefore arrow function doesn't point to current call
{
  name: 'Ayush',
  roll: '7339',
  Seme: 'XI',
  display: [Function: display]
}
