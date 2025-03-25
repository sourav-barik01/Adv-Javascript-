/*
When you pass a callback to a third-party library or HOF, you rely on them to execute your callback, that may cause some problems like:
-> A Callback may be called multiple times.
-> A Callback would never get called.
-> A Callback may be called synchronously.
This is known as Inversion Of Control -> Which is a major problem as compared to Callback Hell

How can we solve this ??
Promises are designed specifically to solve all these trust issues with callbacks. I’m not going to go in depth on what promises are, 
but if you don’t know what a promise is, just think of it as a “ container for an asynchronously delivered value
(An object that is used as a placeholder for the future result of an asynchronous operation)”.
Promises allow us to not rely on callbacks passed into asynchronous functions to handle asynchronous results.
Instead, we can chain Promises for a sequence of asynchronous operations, escaping the Callback hell.
*/

// Example Of IOC in Javascript :-
console.log("Hello");
setTimeout(function exec() {
  console.log("Inside Timeout");
}, 4000)
console.log("End");
/* We are in control of lines 17 and 21, and line 19 is going to happen 4 seconds later, so we are not in control of line 19 and how 
it is executed. setTimeout() is an utility of the Timer API, and that API is responsible for calling the callback for us, 
which is inverting the control */
