/* Promises are nothing but
1) Readability Enhancers.
2) They can solve the problem of IOC.
3) Promises are special type of objects that get returned immediately when we call them.
4) Promises act as a placeholder for the data we hope to get back sometimes in future...
5) In these promises obj, we can attach the functionality we want to execute once the future task is done, promises will
automatically execute the attach functionality.

Q. How To Make & Certain Algorithm of PROMISE ?
a) How to create a promise => sync in nature
b) How to consume a promise
--> Promise: Either Fulfill or Not Fulfilled...

Promises have 3 states & 3 values :  Rejected <-- Pending --> Fulfilled
a) Pending(value: 0) => When we create a new promise object, this is the default state (Represent Work in Progress).
b) Fulfilled(value: argument of resolve) => If operation is completely successfull.
c) Rejected(value: argument of reject) => If operation is not successfull */ 

// Syntax for New Promise :
new Promise (function(resolve, reject) {})
/*
where, 
  new => keyword, used to create new object
  Promise => a type of constructor
  Promise(f) => this constructor expects a callback in it
  resolve() => a type of function which resolves the function or fulfilled it
  reject() => a type of function which reject the function or reject it
*/
