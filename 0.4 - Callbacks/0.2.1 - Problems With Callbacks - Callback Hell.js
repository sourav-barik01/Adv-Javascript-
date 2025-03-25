/*
--> Callback Hell (Pyramid of Doom) : Basically it is a readibility problem, the code performs well and good
1) When multiple asynchronous operations depend on each other, callbacks get deeply nested, making the code hard to read and maintain.
2) Callback Hell in JS can be defined as the situation where we have nested callbacks(functions passed as arguments to other functions) 
which makes the code difficult to read and debug. The term “callback hell” describes the deep nesting of functions that can result in 
poor code readability and difficulty in debugging, especially when handling multiple asynchronous operations.
*/
function task1(callback){
    console.log("Hi i am task 1");
    callback();
}
function task2(callback){
    console.log("Hi i am task 2");
    callback();
}
function task3(callback){
    console.log("Hi i am task 3");
    callback();
}
function task4(callback){
    console.log("Hi i am task 4");
    callback();
}
function task5(callback){
    console.log("Hi i am task 5");
    callback();
}
task1(function(){        // This is callback hell
    task2(function(){
        task3(function(){
            task4(function(){
                task5(function(){
                    console.log("Task Completed!!!");
                })
            })
        })
    })
})

// Output :
// Hi i am task 1
// Hi i am task 2
// Hi i am task 3
// Hi i am task 4
// Hi i am task 5
// Task Completed!!!
