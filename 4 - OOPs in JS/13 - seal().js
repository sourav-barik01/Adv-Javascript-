/* The Object.seal() static method seals an object. Sealing an object prevents extensions and makes existing properties non-configurable. 
A sealed object has a fixed set of properties: new properties cannot be added, existing properties cannot be removed, their enumerability and configurability 
cannot be changed, and its prototype cannot be re-assigned. Values of existing properties can still be changed as long as they are writable. seal() returns the 4 
same object that was passed in.  */

const object1 = {
  property1: 42,
};

Object.seal(object1);
object1.property1 = 33;      // Already initialized value can be changed
console.log(object1.property1);
// Expected output: 33

delete object1.property1;     // But Cannot delete when sealed or perform new operation when seal
console.log(object1.property1);
// Expected output: 33
