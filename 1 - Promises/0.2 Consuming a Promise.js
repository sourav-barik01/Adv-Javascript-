function getRandomNumber(num){
  return Math.floor(Math.random()*num);
}

function createPromiseWithAsync(){
  return new Promise(function exec(resolve, reject) {
    console.log("Entering the executor callback in Promise Constructor");
    setTimeout(function() {
      console.log("Inside setTimeout");
      let x = getRandomNumber(6);
      if(x % 2 == 0) {
        resolve(x);
      }
      else {
        reject(x);
      } 
    }, 3000);
    console.log("Exiting the executor callback in Promise Constructor");
  })
}

console.log("Starting...");
const p = createPromiseWithAsync();
console.log("We are now waiting for the promise to complete");
console.log("Currently my promise object is like...", p);
// Here is we are consuming the promise with .then() ✅
p.then(function fulfilledHandler(value) {
  console.log("Inside fulfill handler with value", value);
  console.log("Promise after fulfillment is", p);
}, function rejectHandler(value) {
  console.log("Inside reject handler with value", value);
  console.log("Promise after rejection is", p);
});

// Output:
// Starting...
// Entering the executor callback in Promise Constructor
// Exiting the executor callback in Promise Constructor
// We are now waiting for the promise to complete
// Currently my promise object is like... Promise { <pending> }
// Inside setTimeout
// Inside reject handler with value 3
// Promise after rejection is Promise { <rejected> 3 }
