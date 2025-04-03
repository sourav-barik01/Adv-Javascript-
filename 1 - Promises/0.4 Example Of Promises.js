// Eg : 1
function fetchUrl(url) {
  return new Promise(function(resolve, reject) {
    console.log("Start Downloading from", url);
    setTimeout(function processDownloading() {
      let data = "Dummy Data";
      console.log("Downloading Started...");
      resolve(data);
      console.log("Downloading Completed...");
    }, 4000);
  })
}

console.log("Start");
let p = fetchUrl("www.google.com")
p.then(function(value) {
  console.log("Value is", value);
});
console.log("End");

// Output:
// Start
// Start Downloading from www.google.com
// End
// Downloading Started...
// Downloading Completed...
// Value is Dummy Data

/***********************************************************************************/ 

// Eg : 2
console.log("Start Of File...");
setTimeout(function() {
  console.log("Timer 1 Done");
}, 0);
for(let i=0; i<10000; i++) {}
let p = Promise.resolve("Sourav's Promise!!");   // => Discussed in 0.7
p.then(function processPromise(value) {
  console.log("Whose's Promise ?", value);
});
setTimeout(function() {
  console.log("Timer 2 Done");
}, 0);
console.log("End Of File...");

// Output:
// Start Of File...
// End Of File...
// Whose's Promise ? Sourav's Promise!!
// Timer 1 Done
// Timer 2 Done
