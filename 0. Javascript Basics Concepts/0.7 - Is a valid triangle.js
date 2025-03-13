function isValidTriangle(a, b, c) {
  if (a + b > c && b + c > a && a + c > b) {
    return true;
  } else {
    return false;
  }
}

let x = isValidTriangle(4, 4, 3);
console.log(x); // Output: true
