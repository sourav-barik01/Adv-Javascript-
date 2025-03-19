/* What are arrays ?
Arrays actually store data in a linear contiguous orientation in the memory. */ 

// How to create arrays ?
let x = [];  // Array of 0 length
let y = ["Start", 1, 2, 3, "Hi", "Hello", "Bye", false, "End"];  // Length -> 8

// Comparison Of Arrays & Strings in JS
let x = [1, 2, 3]
let s = "Sourav";
// But for Updation
x[0] = 0;  // Possible. Arrays are mutable
s[1] = "a";  // Not Possible. Therefore in JS, strings are immutable(cant be updated or changed

// For iteration in arrays in js we use for-of loop which is best for arrays due to indexing
let arr = [1,2,3,"Sourav","Barik"];
for(const value of arr){
  console.log(value);      // Output -> 1 2 3 "Sourav" "Barik"
}

// Problem of DNF Algorithm
function swapArr(arr, i, j){
  let temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp;
}

function DNFAlgo(arr) {
  let i = 0, j = arr.length - 1;
  while(i <= j){
    if(arr[i] == 1){
      swapArr(arr, i, j);
      j--;
    } else {
      i++;
    }
  }
}

let arr = [1,1,1, 0, 0,1, 0, 1, 0];
DNFAlgo(arr);
console.log(arr);    // [0, 0, 0, 0, 1, 1, 1, 1, 1]
