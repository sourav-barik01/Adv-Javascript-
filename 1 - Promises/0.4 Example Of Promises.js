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
