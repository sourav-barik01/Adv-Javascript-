// The call() method of Function instances calls this function with a given this value and arguments provided individually.

function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

console.log(new Food('cheese', 5).name);
// Expected output: "cheese"

// Always keep in mind the major difference b/w bind() and call() is bind returns a new function whereas call() doesn't and works on same function
