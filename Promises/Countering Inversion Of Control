/* 
This is a normal function in which High Order Function is taking a callback. But here occurs 2 problem with callback; 
1) Callback Hell : Basically its a readability problem where there are multiple callbacks inside callbacks resulting in pyramid form structure
2) Inversion Of Control : Where your callback power is given to other. It depends how your function is called by others
*/
function InversionOfControl(x, callBack){
    setTimeout(function hello(){
        console.log("Starting w/ ", x);
    }, 5000);
    callBack("Sourav");
}
InversionOfControl("Hello!", function exec(data){
   console.log("My Name is", data); 
});


// This get resolved by the promises
function createPromise(){
    return new Promise(function exec(res, rej){
        setTimeout(function hello(){
            res("Done");
        }, 5000);
    })
}

let x = createPromise();
x.then(
    function success(value){
        console.log("The result is", value);
}, function failed(value){
    console.log("The result is", value);
});
