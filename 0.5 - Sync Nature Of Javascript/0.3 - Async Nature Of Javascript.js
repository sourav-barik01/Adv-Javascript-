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
Output:
Starting the Program
Sync Operation Started
Sync Operation Ended
Async Operation Started
Sync Operation Started
Sync Operation Ended
Ending the Program
Async Operation Ended
*/
