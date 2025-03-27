// The setInterval() method repeatedly calls a function/executes a code snippet, with a fixed time delay between each call.
// This method returns an interval ID which uniquely identifies the interval, so you can remove it later by calling clearInterval().
setInterval(function, delay, arg1, ...args);    // --> Syntax

const intervalID = setInterval(myCallback, 500, "Hi from setInterval");
function myCallback(a) {
  console.log(a);    // Output : Hi from setInterval
}

clearInterval(intervalID);    // -> Helps to clear the interval
