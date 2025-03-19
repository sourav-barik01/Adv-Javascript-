console.log("abc" == "abc");  // true
let x = "abc";  // String Literals
let y = "abc";
console.log(x == y);  // true

let z = new String("abc");  // String Object
let a = String("abc");      
console.log(z);  // [String: 'abc']

console.log(a == z);  // true
console.log(a == x);  // true
console.log(x == z);  // true
console.log("abc" == new String("abc"));  // true
console.log(String("abc") == new String("abc"));  // true

console.log(typeof x); // string
console.log(typeof z); // object
console.log(typeof a); // string

console.log(a === z);  // false
console.log(a === x);  // true
console.log(x === z);  // false
console.log("abc" === new String("abc"));  // false
console.log(String("abc") === new String("abc"));  // false
