/* 
The sort() method of Array instances sorts the elements of an array in place and returns the reference to the same array, now sorted. 
The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of 
UTF-16 code unit values.
The time and space complexity of the sort cannot be guaranteed as it depends on the implementation. 

--> Parameters :-
compareFn Optional - A function that determines the order of the elements. The function is called with the following arguments:
a - The first element for comparison. Will never be undefined.
b - The second element for comparison. Will never be undefined.

--> It should return a number where:
a) A negative value indicates that a should come before b.
b) A positive value indicates that a should come after b.
c) Zero or NaN indicates that a and b are considered equal.
d) To memorize this, remember that (a, b) => a - b sorts numbers in ascending order. Means if(a-b) is -ve then return a, else b.
If omitted, the array elements are converted to strings, then sorted according to each character's Unicode code point value.

--> Return value
The reference to the original array, now sorted. Note that the array is sorted in place, and no copy is made. */

const stringArray = ["Blue", "Humpback", "Beluga"];
const numberArray = [40, 1, 5, 200];
const numericStringArray = ["80", "9", "700"];
const mixedNumericArray = ["80", "9", "700", 40, 1, 5, 200];

function compareNumbers(a, b) {
  return a - b;
}

stringArray.join(); // 'Blue,Humpback,Beluga'
stringArray.sort(); // ['Beluga', 'Blue', 'Humpback']

numberArray.join(); // '40,1,5,200'
numberArray.sort(); // [1, 200, 40, 5]
numberArray.sort(compareNumbers); // [1, 5, 40, 200]

numericStringArray.join(); // '80,9,700'
numericStringArray.sort(); // ['700', '80', '9']
numericStringArray.sort(compareNumbers); // ['9', '80', '700']

mixedNumericArray.join(); // '80,9,700,40,1,5,200'
mixedNumericArray.sort(); // [1, 200, 40, 5, '700', '80', '9']
mixedNumericArray.sort(compareNumbers); // [1, 5, '9', 40, '80', 200, '700']
