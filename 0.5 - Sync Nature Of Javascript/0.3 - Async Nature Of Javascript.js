// Problem 1
console.log("Starting the Program");
function syncOperation() {
    console.log("Sync Operation Started");
    for(let i=0; i<100000000; i++) {}
    console.log("Sync Operation Ended");
}
function asyncOperation() {
    console.log("Async Operation Started");
    setTimeout(function exec() {
        console.log("Async Operation Ended");
    }, 4000);
}
syncOperation();
asyncOperation();
syncOperation();
console.log("Ending the Program");

/*
Output :
Starting the Program
Sync Operation Started
Sync Operation Ended
Async Operation Started
Sync Operation Started
Sync Operation Ended
Ending the Program
Async Operation Ended
*/


// Problem 2
console.log("Starting the Program");
function syncOperation() {
    console.log("Sync Operation Started");
    for(let i=0; i<100000000; i++) {}
    console.log("Sync Operation Ended");
}
function asyncOperation() {
    console.log("Async Operation Started");
    setTimeout(function exec() {
        for(let i=0; i<100000000; i++) {}
        console.log("Async Operation Ended");
    }, 5000);
}
function asyncOperation1() {
    console.log("Async Operation Started1");
    setTimeout(function exec() {
        console.log("Async Operation Ended1");
    }, 0);
}
function asyncOperation3() {
    console.log("Async Operation Started3");
    setTimeout(function exec() {
        console.log("Async Operation Ended3");
    }, 200);
}
syncOperation();
asyncOperation();
asyncOperation1();
asyncOperation3();
syncOperation();
console.log("Ending the Program");

/*
Output :
Starting the Program
Sync Operation Started
Sync Operation Ended
Async Operation Started
Async Operation Started1
Async Operation Started3
Sync Operation Started
Sync Operation Ended
Ending the Program
Async Operation Ended1
Async Operation Ended3
Async Operation Ended
*/ 
