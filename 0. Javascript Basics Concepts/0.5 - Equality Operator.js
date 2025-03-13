/* Basically there are 2 equality operator in js i.e (==) and (===).
(==) => Compare only values
(===) => Compare both values & its types
But this is the biggest myth about javascript. Let's refer the official doc from ECMAScript */

/* Official ECMAScript Documentation states: Both (==) & (===) check types...
a) For (==), it checks both the types of operands
   i) If type is same, then it calls (===)
  ii) If type is not same, then type conversion occurs (coercion) & then comparison is done.
b) For (===), it checks both the type of operands,
   i) If type is same, comparison of values takes place.
  ii) If type is not same, then it directly returns false */

// For Eg : 
console.log(1 == "1"); // return true
/* How ? JS will convert the string to number and get as (1 == 1), now as the type is same; (===) is called 
and (===) compares the values and return true. 
This is how the equality works */

// WE WILL READ MORE ABOUT THIS TOPICS IN COERCION
