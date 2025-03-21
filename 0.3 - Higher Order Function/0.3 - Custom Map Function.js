// A Custom Map Function
function customMapper(arr, func) {
  let result = [];
  for(let i=0; i<arr.length; i++) {
    result.push(func(arr[i], i));
  }
  return result;
}

let nos = [1,2,3,4,5];
function print(i, idx) {
  return `Element is ${i} & index is ${idx}`
}
const ans = customMapper(nos, print);
console.log(ans);
/*
Output is :
[
  'Element is 1 & index is 0',
  'Element is 2 & index is 1',
  'Element is 3 & index is 2',
  'Element is 4 & index is 3',
  'Element is 5 & index is 4'
]
*/
const ans1 = customMapper(nos, (x) => { return x*2});    // Output -> [2, 4, 6, 8, 10]
