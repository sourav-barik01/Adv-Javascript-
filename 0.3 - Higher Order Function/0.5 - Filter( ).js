/* filter(callbackFn) : The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to 
just the elements from the given array that pass the test implemented by the provided function. 
It should return a truthy value to keep the element in the resulting array, and a falsy value otherwise.*/

const words = ["spray", "elite", "exuberant", "destruction", "present"];
const result = words.filter((word) => word.length > 6);
console.log(result);  // Expected output: Array ["exuberant", "destruction", "present"]

/*
--> Return value
A shallow copy of the given array containing just the elements that pass the test. If no elements pass the test, 
an empty array is returned.
*/

// Eg -> Create a filtered array that has all elements with values less than 10 removed.
function isBigEnough(value) {
  return value >= 10;  // returning boolean
}
const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);  // filtered is [12, 130, 44]

// Eg 2 -> Find all prime numbers in an array
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
function isPrime(num) {  // return booleans
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}
console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]

// Eg 3 -> Searching in an Array
const fruits = ["apple", "banana", "grapes", "mango", "orange"];
function filterItems(arr, query) {
  return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));  // return boolean
}
console.log(filterItems(fruits, "ap")); // ['apple', 'grapes']
console.log(filterItems(fruits, "an")); // ['banana', 'mango', 'orange']
