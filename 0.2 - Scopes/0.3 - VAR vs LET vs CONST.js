// --> var is a global + functional scope and if we initialise it in for, while, if then it behave same as global scope
function testScope() {
  if (true) {
    var a = 10; // Function-scoped
    let b = 20; // Block-scoped
    const c = 30; // Block-scoped
  }
  console.log(a);   // ✅ 10 (Accessible)
  console.log(b);   // ❌ Error (Not accessible)
  console.log(c);   // ❌ Error (Not accessible)
}
testScope();

// --> var can be Hoisted whereas let & const can't be
console.log(a); // ✅ undefined (Hoisted)
var a = 10;
console.log(b); // ❌ ReferenceError: Cannot access 'b' before initialization
let b = 20;
console.log(c); // ❌ ReferenceError: Cannot access 'c' before initialization
const c = 30;
// And this reference error is known as TDZ(Temporal Dead Zone)...
// TDZ(Temporal Dead Zone) -> Accessing the block scope variable before the declaration. Happens only with let & const
console.log(name);    // Output -> Undefined ✅
console.log(surname);    // Output -> ReferenceError: Cannot access 'surname' before initialization ❌
var name = "Sourav";
let surname = "Barik";

// --> Re-declaration Allowed only in var whereas Re-assignment Allowed only in var & let
// Re-declaration with var
var x = 10;
var x = 20; // ✅ No Error
console.log(x); // 20
// Re-declaration with let
let y = 30;
let y = 40; // ❌ Error: Identifier 'y' has already been declared
// Re-assignment
y = 50; // ✅ Allowed
console.log(y); // 50
// Const Example
const z = 60;
z = 70; // ❌ Error: Assignment to constant variable.
console.log(z); // 60

/* --> Mutability with const
a) const does not make objects immutable, it only makes the variable binding immutable.
b) You can modify object properties when using const */
const person = { name: "John", age: 25 };
person.age = 26; // ✅ Allowed
console.log(person); // { name: 'John', age: 26 }
person = { name: "Doe", age: 30 }; // ❌ Error: Assignment to constant variablerties when using const. 

// --> var get added to window object
var a = 10;
let b = 20;
const c = 30;
console.log(window.a); // ✅ 10
console.log(window.b); // ❌ undefined
console.log(window.c); // ❌ undefined

                                      /*******************************************************************/

// BIGGER EXAMPLE FOR BETTER VISUALIZATION
// Eg : 1
function exampleScope() {
  var a = "I am function scoped!";
  var cnt = 0;
  if (true) {
    let b = "I am block scoped!";
    const c = "Me too!";
    console.log(a); // ✅ Accessible
    console.log(b); // ✅ Accessible
    console.log(c); // ✅ Accessible
  }
  let i = 0
  while(i <= 5){
    cnt++;  // Behave same as global variable
    i++;
  }
  console.log(a); // ✅ Accessible
  console.log(b); // ❌ Error (Block scoped)
  console.log(c); // ❌ Error (Block scoped)
  console.log(cnt);
}
exampleScope();

// Eg : 2
function loopUsingVar(){
  for(var i=0; i<1000; i++){}
  console.log(i);    // Output -> 1000 bcz in loop var behaves as global scope whereas in other lang it will give error
}
loopUsingVar();
