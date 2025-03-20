// TDZ(Temporal Dead Zone) -> Accessing the block scope variable before the declaration. Happens only with let & const
console.log(name);    // Output -> Undefined ✅
console.log(surname);    // Output -> ReferenceError: Cannot access 'surname' before initialization ❌
var name = "Sourav";
let surname = "Barik";
