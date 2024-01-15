/*
> Prototypes are the mechanism by which JavaScript objects inherit features from one another or
> JavaScript is a prototype based language, so, whenever we create a function using JavaScript, js engine adds a prototype property inside a function, 
Prototype property is basically an object (also known as Prototype object), where we can attach methods and properties in a prototype object, 
which enables all the other objects to inherit these methods and properties. 
> The JavaScript prototype property allows you to add new properties to object constructors:
*/

// Consider This Code
const myObject = {
  city: "Madrid",
  greet() {
    console.log(`Greetings from ${this.city}`);
  },
};
myObject.greet();       // Expected Output : Greetings from Madrid

/*
This is an object with one data property, city, and one method, greet(). If you type the object's name followed by a period into the console, like myObject., 
then the console will pop up a list of all the properties available to this object. You'll see that as well as city and greet, there are lots of other properties! 
> __defineGetter__
> __defineSetter__
> __lookupGetter__
> __lookupSetter__
> __proto__
> city
> constructor
> greet
> hasOwnProperty
> isPrototypeOf
> propertyIsEnumerable
> toLocaleString
> toString
> valueOf

When we create an obj using above function constructor, JS Engine will add dunder proto or __proto__ in the object which will point to the prototype’s constructor obj.
or you can also say The property of an object that points to its prototype is not called prototype. Its name is not standard, but in practice all browsers use __proto__. 
The standard way to access an object's prototype is the Object.getPrototypeOf() method. */

// Now try accessing one of them :
myObject.toString();                   // "[object Object]"

/*
It works (even if it's not obvious what toString() does).
What are these extra properties, and where do they come from ?
> Well, every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, so the prototype will have its 
own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype.
> When you try to access a property of an object: if the property can't be found in the object itself, the prototype is searched for the property. 
If the property still can't be found, then the prototype's prototype is searched, and so on until either the property is found, or the end of the chain is 
reached, in which case undefined is returned.

So when we call myObject.toString(), the browser:
> looks for toString in myObject
> can't find it there, so looks in the prototype object of myObject for toString
> finds it there, and calls it.

What is the prototype for myObject? To find out, we can use the function Object.getPrototypeOf():  */
Object.getPrototypeOf(myObject); // Object { }

/*
This is an object called Object.prototype, and it is the most basic prototype, that all objects have by default. The prototype of Object.prototype is null, 
so it's at the end of the prototype chain: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes/myobject-prototype-chain.svg
*/
