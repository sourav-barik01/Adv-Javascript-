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
