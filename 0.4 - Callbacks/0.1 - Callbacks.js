/* A callback function is a function passed into another function as an argument, which is then invoked inside the outer 
function to complete some kind of routine or action or A callback is a function passed as an argument to another function. */
function createQuote(quote, callback){ 
  var myQuote = "Like I always say, " + quote;
  callback(myQuote); 
}
function logQuote(quote){
  console.log(quote);  
}
createQuote("eat your vegetables!", logQuote);   // Like I always say, eat your vegetables! or

createQuote("eat your vegetables!", function(quote){   // This can also be written
  console.log(quote); 
});


/*
Q. When to use Callbacks ?
-> Where callbacks really shine are in asynchronous functions, where one function has to wait for another function 
(like waiting for a file to load).
*/
function serverRequest(query, callback){
  setTimeout(function(){
    var response = query + "full!";
    callback(response);
  },5000);
}
function getResults(results){
  console.log("Response from the server: " + results);
}
serverRequest("The glass is half ", getResults);

// Result in console after 5 second delay: Response from the server: The glass is half full!
/* In the above example, we make a mock request to a server. After 5 seconds elapse the response is modified and then our 
callback function getResults gets executed. Also, if you are already familiar with setTimeout, then you’ve been using callback 
functions all along. The anonymous function argument passed into the above example’s setTimeout function call is also a callback! 
So the example’s original callback is actually executed by another callback.*/ 
