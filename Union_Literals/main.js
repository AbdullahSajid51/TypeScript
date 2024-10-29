"use strict";
// // UNION LITERALS:-
let myname;
myname = null;
console.log(myname);
myname = "zia";
console.log(myname);
myname = undefined; //Error
myname = 12; //Error
// // ---------------------------------------------
let myAge;
myAge = 16; // narrowing to number
console.log(myAge); // Output: 16
// console.log(myAge.toLowerCase()); // Error: Property 'toLowerCase' does not exist on type 'number'.
myAge = "Don't Know"; // narrowing to string
console.log(myAge); // Output: "Don't Know"
console.log(myAge.toString()); // Output: "Don't Know"
// toString() can be called on both string and number
console.log(myAge.toLowerCase()); // Output: "don't know"
// toLowerCase() can be called because myAge is known to be a string at this point
// // --------------------------------------------------
// // UNION TYPES:-
// A union type allows a variable to be one of several types. It's defined using the | (pipe) operator.
let UnionType;
UnionType = "Musa";
UnionType = "Abdullah";
UnionType = "Black color";
console.log(UnionType);
UnionType = true;
UnionType = 10;
UnionType = 100;
UnionType = 2000;
console.log(UnionType);
let move;
move = "north"; // Valid
move = "south"; // Valid
move = "up"; // Error: Type '"up"' is not assignable to type 'Direction'.
let literalType;
literalType = "Musa";
literalType = 20000;
console.log(literalType);
let data;
data = true;
data = "Musa";
data = null;
data = 56;
let myAge = "Musa";
// // --------------------------------------------------
// // Example:-
// // 1)
let a = 1000;
let b = "Musa Khan";
let c = false;
let d = 1000;
let e = "Musa Khan";
let f = false;
function setColor(color) {
    console.log(`Color set to ${color}.`);
}
setColor("blue");
setColor("red");
setColor("green");
// // --------------------------------------------------
// // Summary:
// // Union Types: Allow a variable to be one of several types.
// // Type Literals: Define exact values a type can take.
// // Type Aliases: Create new names for types to simplify and improve readability.
// // These features enhance TypeScript's type system, making it more expressive and flexible for handling various type-related scenarios.
