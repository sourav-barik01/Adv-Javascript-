/*
--> Map
The map() method of Array instances is an iterative method. It calls a provided callbackFn function once for each element in an 
array and constructs a new array from the results. For Eg: */

const array1 = [1, 4, 9, 16];
const map1 = array1.map((x) => x * 2);  // Pass a function to map
console.log(map1);  // Expected output: Array [2, 8, 18, 32]

// or we can pass a function, if arrow function is not prefered...

function squareFunc(x) {return x*2}
const map2 = array1.map(squareFunc);
console.log(map2);  // Expected output: Array [2, 8, 18, 32]

// Also if we are passing a passing a function to map and the callback function accept with one parameter then 2nd elem is index
const nos = [1,2,3,4,5];
function print(i, idx) {
  return `Element is ${i} & index is ${idx}`
}
const result = nos.map(print);
console.log(result);  // Output -> [`Element is 1 & index is 0`, `Element is 2 & index is 1`.... till Element 5]


// The following code takes an array of objects and creates a new array containing the newly reformatted objects.
const kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];
const reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value }));
console.log(reformattedArray); // [{ 1: 10 }, { 2: 20 }, { 3: 30 }]
console.log(kvArray);
/* Output :
[
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 }
]
*/

/*Using map() on sparse arrays
A sparse array(arrays where only a few locations in the array have any data, most of the locations are considered as “empty”) 
remains sparse after map(). The indices of empty slots are still empty in the returned array, and the callback 
function won't be called on them. */
console.log(
  [1, , 3].map((x, index) => {
    console.log(`Visit ${index}`);
    return x * 2;
  }),
);
// Output :
// Visit 0
// Visit 2
// [2, empty, 6]
