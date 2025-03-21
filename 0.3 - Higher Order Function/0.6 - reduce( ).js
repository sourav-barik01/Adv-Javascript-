/*
a) reduce() is a HOF available for arrays which takes function f as argument.
b) What reduce() do is, go to every element of an array say current element as arr[i], reduce() will pass this element to the 
function f, and accumulate the result of further function calls with this particular result.
*/

let arr = [1,2,3,4,5,6];
function sum(prevElem, currElem) {
  console.log(prevElem, currElem);  
/* Output : 1 2
            3 3
            6 4
            10 5
            15 6
*/
  return prevElem + currElem;
}
const result = arr.reduce(sum);
console.log(result);  // Output : 21
const result1 = arr.reduce((accumulator, currentValue) => accumulator + currentValue)  // Using accumulator
console.log(result1);  // Output : 21
