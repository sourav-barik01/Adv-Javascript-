function sayHello() {
  return "Hello, ";
}
function greeting(helloMessage, name) {
  console.log(helloMessage() + name);    // Output -> Hello, JavaScript!
}
greeting(sayHello, "JavaScript!");    // Pass `sayHello` as an argument to `greeting` function
// HOF -> A function that returns a function or takes other functions as arguments is called a higher-order function. Eg: greeting()
// The function that we pass as an argument to another function is called a callback function. sayHello() is a callback function.

// Examples Of HOFs are : map, sort, filter, reduce etc...
