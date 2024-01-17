/* The bind() method of Function instances creates a new function that, when called, calls this function with its this keyword set to the provided value, 
and a given sequence of arguments preceding any provided when the new function is called.  */

const module = {
  x: 42,
  getX: function () {
    return this.x;
  },
};

const unboundGetX = module.getX;
console.log(unboundGetX());     // The function gets invoked at the global scope due to which this gives undefined
// Expected output: undefined

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// Expected output: 42


// Always keep in mind, the bind() return a function and we store it and call it. For eg see : boundGetX
