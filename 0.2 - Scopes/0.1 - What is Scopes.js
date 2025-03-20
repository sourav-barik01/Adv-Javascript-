/* What is Scopes ? -> It means visibility of variables & function
--> JavaScript has 4 kinds of scopes:
a) Global scope: The default scope for all code running in script mode.
b) Module scope: The scope for code running in module mode.
c) Function scope: The scope created with a function.
--> In addition, identifiers declared with certain syntaxes, including let, const, class, or (in strict mode) function, can belong to an additional scope:
d) Block scope: The scope created with a pair of curly braces (a block) */

/* Everything inside our code will be used in one of the following 2 ways
a) Either it will be getting some values assigned to it
b) Or some value will be retrieved from it */

/* Do You think JS is compiled lang or interpreted lang ? -> Its a Hybrid of both Compiled & Interpreted
--> Behaving like INTERPRETED
Input :                                  Output :
console.log("Hello, World!");            Hello, World!
console.lo("Bye");                       Uncaught TypeError: console.lo is not a function
--> Behaving like COMPILED
Input :                                  Output :
console.log("Hello World");              Uncaught SyntaxError: Unexpected Token '......'
console......log("Bye"); 
--> JavaScript is both interpreted and compiled — it's considered a hybrid language.
Traditionally: JavaScript was interpreted by browsers (executed line-by-line using an interpreter).
Modern JavaScript Engines (like V8 in Chrome and Node.js) use Just-In-Time (JIT) compilation, which compiles 
JavaScript code into machine code at runtime for faster execution */

// We will study about how js execution takes place on next file...
