/*
JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables, 
classes, or imports to the top of their scope, prior to execution of the code.
Hoisting is often considered a feature of var declarations as well, although in a different way. 
In colloquial terms, any of the following behaviors may be regarded as hoisting:
a) Being able to use a variable's value in its scope before the line it is declared. ("Value hoisting")
b) Being able to reference a variable in its scope before the line it is declared, without throwing a ReferenceError, but the value is always undefined. ("Declaration hoisting")
c) The declaration of the variable causes behavior changes in its scope before the line in which it is declared.
d) The side effects of a declaration are produced before evaluating the rest of the code that contains it.
*/
// --> Note that the following is not a form of hoisting:
{
  var x = 1;
}
console.log(x); // 1
// There's no "access before declaration" here; it's simply because var declarations are not scoped to blocks.


