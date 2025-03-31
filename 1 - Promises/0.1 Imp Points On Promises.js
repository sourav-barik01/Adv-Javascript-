function getRandomNumber(num){
    return Math.floor(Math.random()*num);
}
function createPromiseWithLoop(){
    return new Promise(function exec(resolve, reject) {
        for(let i=0; i<100000; i++) {}
        let x = getRandomNumber(5);
        if(x % 2 == 0) {
          resolve("Ok");
        }
        else {
          reject("Not Ok");
        }            
    })
}
function createPromiseWithAsync(){
    return new Promise(function exec(resolve, reject) {
        setTimeout(function() {
           let x = getRandomNumber(6);
            if(x % 2 == 0) {
              resolve("Ok");
            }
            else {
              reject("Not Ok");
            } 
        });
    })
}
let ans = createPromiseWithLoop();
let ans1 = createPromiseWithAsync();
console.log(ans);  // Promise { 'Ok' }
console.log(ans1);  // Promise { <pending> }


/*
For printing ans, the promise will wait till for loop is over and getRandmonNumber runs and provide the desired output 
bcz Promises are sync in nature. But for ans1, the promise automatically and immediately returns pending state, bcz till all
sync code are finished it will not run due to async nature i.e setTimeout
*/
