// Function can be declared in different ways. For Eg:
function demo () {}    // function declaration bcz first word is "function"...
let ans = function demo1() {}    // named funtion expression -> if declaration of function at first didnt contain word "function". Below all are also func. expression
let ans1 = function() {}    // anonymous function expression
(function demo2() {})()    // Function Expression but when we call it using () then it becomes -> IIFE(Immediately Invoked Function Expression)
(function() {})()    // IIFE -> 
let ans2 = () => {}    // Arrow Function


/* Named Function Expression > Anonymous Function Expression, Why ? -> i) Better Readability  ii) For Recursion  iii) For debugging the 
function if we want logs then trace become difficult which is done by console.trace() */
/* For Example of Recursion :
Early versions of JavaScript did not allow named function expressions, and for this reason you could not make a 
recursive function expression. For example, this syntax worked: */
function factorial(n) {
  return n <= 1 ? 1 : factorial(n - 1) * n;
}
[1, 2, 3, 4, 5].map(factorial);
// but:
[1, 2, 3, 4, 5].map(function (n) {
  return n <= 1 ? 1 : /* what goes here? */ (n - 1) * n;
});
// did not. To get around this arguments.callee was added so you could do
[1, 2, 3, 4, 5].map(function (n) {
  return n <= 1 ? 1 : arguments.callee(n - 1) * n;
});
// However, the design of arguments.callee has multiple issues. Due to which it is Deprecated(This feature is no longer recommended)

