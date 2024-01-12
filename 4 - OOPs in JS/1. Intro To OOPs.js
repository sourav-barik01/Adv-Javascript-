> Classes are the blueprint creating objects (a particular data structure), providing initial values for state (member variables or attributes), and implementations of behavior (member functions or methods).
The user-defined objects are created using the class keyword.
> Objects are real life entities; their properties are different which helps us to uniquely identify 2 objects but behaviour are different.

Every class contains attributes and behaviors. Attributes are the characteristics of the class that help to distinguish it from other classes. 
Behaviors are the tasks that an object performs. A person's attributes, for example, include their age, name, and height; while their behaviors include the fact that a person can speak(), run(), walk(), and eat(). 
In OOPs, attributes are called properties and behaviors are called functions. Properties are presented with different data types, and behaviors are described using functions. 

// Eg. of a class
class Student {
    // properties
        name         // no use of let var const
        rollNo
    // methods
        grade()      // no use of function keyword
        introduceSelf()
};
const obj = new Student();    // way to create an object
