/* Previously, when classes where not present in JS, then we usually use functional constructor. It behave same as constructor; with all property same of class
& constructor. But actually the problem is of security breach */

// For Eg :
function classConstructor(x, y, z){
    this.name = x;
    this.rollNo = y;
    this.semester = z;
    this.display = () => {
        console.log(this);
    }
}
const obj = new classConstructor("Sourav", "BTECH/60024/20", 8);
console.log(obj);

// Expected Output : Here we can see it behave same as class & constructor
classConstructor {
  name: 'Sourav',
  rollNo: 'BTECH/60024/20',
  semester: 8,
  display: [Function (anonymous)]
}
