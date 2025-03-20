/* JS Code Execution take place in 2 phases
1) Parsing(PP) -> In parsing phase, scope resolution is decided due to which keys get a tag,
              where they are which type of scope & syntax is checked..
              --> Pt. To Be Noted : Only Formal Declaration are done in Parsing Phase...
2) Execution(EP) -> In execution phase, values are assigned to key... & autoglobals takes place(Below to be read abt this)  */

// Also there are 2 types of Scoping -> Lexical Scoping(Done in Parsing Phase. Eg: JS) & Dynamic Scoping(Done in Runtime/Execution. Eg: Bash)
var name = "Sourav";
function ask(question){
  console.log(name, question);
}
function fun(){
  var name = "Barik";
  ask(", Why ?");
}
fun();    // Output -> Lexical Scoping : Sourav, Why ?  -> If JS has Dynamic Scoping : Barik, Why ?

// For Eg:
function outerFunction() {      // Parsing Phase -> outerFunction: global scope
  let outerVar = 10;    // 1) Parsing Phase -> outerVal: outerFunction scope  2) Exec Phase -> Value assigned to key
  function innerFunction() {    // Parsing Phase -> innerFunction: outerFunction scope
    let innerVar = 20;    // Parsing Phase -> innerVal: innerFunction scope  2) Exec Phase -> Value assigned to key
    console.log(outerVar); // 10 bcz EP will check if innerFunction scope has outerVar ? No, then jump 1 scope previous and get the value from i.e outerFunction scope
    console.log(innerVar); // 20 as innerVar is inside the scope of innerFunction
  }
  innerFunction();    // called on Execution Phase
  console.log(innerVar);  // Error: innerVar is not defined also EP will check if innerVar is outerFunction scope ? No, then move 1 scope prev. Due to which we reach global scope and we dont have any value and error comes..
}
outerFunction();
