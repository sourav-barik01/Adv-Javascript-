// The call() method of Function instances calls this function with a given this value and arguments provided individually.

const moduless = {
  x: 42,
  getX: function () {
    return this.x;
  },
};

const unboundGetX = moduless.getX;
console.log(unboundGetX());     // The function gets invoked at the global scope due to which this gives undefined
// Expected output: undefined

const boundGetX  = unboundGetX.call(moduless);
console.log(boundGetX );
// Expected output: 42

// Always keep in mind the major difference b/w bind() and call() is bind returns a new function whereas call() doesn't and works on same function
