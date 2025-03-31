// Eg : 1
console.log("Starting...");
function createPromise() {
  return new Promise(function exec(resolve, reject) {
    console.log("Resolving the Promise")    // This is sync
    resolve("Done");    
  });
}

setTimeout(function process() {    // goes in callback queue or macrotask queue
  console.log("Inside Timer");
}, 1000);

let p = createPromise();
p.then(function fulfillHandler(value) {        // As we are resolving therefore fulfillHandler is going in microtask queue
  console.log("We fulfilled with value", value);
}, function rejectHandler(value) {
  console.log("We Rejected with value", value);
})

for(let i=0; i<100000; i++) {}
console.log("Ending...");

// Output:
// Starting...
// Resolving the Promise
// Ending...
// We fulfilled with value Done  ->  priority of microtask queue >>>> callback queue
// Inside Timer

/*****************************************************************************************************************/

// Eg : 2
console.log("Starting...");
function createPromise() {
  return new Promise(function exec(resolve, reject) {
    setTimeout(function process() {
      console.log("Rejecting the promise");
      reject("Cancel")
    }, 3000)
  });
}

let p = createPromise();
// Multiple .then() can be created
p.then(function fulfillHandler1(value) {
  console.log("We fulfilled1 with value", value);
}, function rejectHandler1(value) {
  console.log("We Rejected1 with value", value);
})
p.then(function fulfillHandler2(value) {        // As we are resolving therefore fulfillHandler is going in microtask queue
  console.log("We fulfilled2 with value", value);
}, function rejectHandler2(value) {
  console.log("We Rejected2 with value", value);
})

for(let i=0; i<100000; i++) {}
console.log("Ending...");

// Output:
// Starting...
// Ending...
// Rejecting the promise  -> jb tk setTimeout ka 3sec khtm ni hoga tb tk reject call ni hoga due to which microtask queue will be empty
// We Rejected1 with value Cancel
// We Rejected2 with value Cancel
