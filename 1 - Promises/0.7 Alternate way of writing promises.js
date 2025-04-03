function alternatePromise(url) {
  return new Promise(function(resolve, reject) {
    resolve("Sourav's Promise!!");
  })
}
// or
let p = Promise.resolve("Sourav's Promise!!");
// The promise used in line 7 will be same as 1. It is the short cut way of writing promise which will be always be resolved.

p.then(function processPromise(value) {
  console.log("Whose's Promise ?", value);
});
