// Why we are doing return ?? Can we not use console.log() ?

// Actually console.log() return undefined. You can check it by
let x = console.log("Sourav"); 
console.log(x); /* Sourav is the input value given to function. The console function just print the input value
on the screen and then return undefined, no matter what the input was */

// The implementation of console.log() is like console is a object
console = {
  log : function () {}
}

/* Ans to 1st Ques : We are doing return to store that value so that value can be stored and used for later. But if we 
use console.log(), it will only be shown in the screen and can't be used anywhere...
Also if we dont return anything it automatically return undefined... */
