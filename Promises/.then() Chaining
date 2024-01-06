// The .then() also return a promise. So a chain can be made using this. Let's consider an example

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
        return "Value from Chain1";
    }, 
    function failed(value){
      console.log("The result is", value);
      return "Value from Chain1";
    }
)
.then(
    function secondSuccess(value){
        console.log("The result is", value);
    },
    function secondFailed(value){
        console.log("The result is", value);
    }
);


// And if you dont return anything from Chain1 then in 2nd .then() its value will be considered as undefined
