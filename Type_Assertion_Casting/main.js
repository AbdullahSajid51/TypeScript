"use strict";
// Explicit Casting / Type Assertion :
let myname = "Zia";
console.log(myname.length);
console.log(myname.length);
// There are two syntaxes for type assertion:
// 1. Angle-Bracket Syntax
// This syntax uses angle brackets to perform a type assertion. Here's the code:
let someValue = "this is a string";
let strLength = someValue.length;
// 2. As-Syntax:
let someValue = "this is a string";
let strLength = someValue.length;
// Examples
// Type Assertion Example:
let value = "Hello, TypeScript!";
let strLength = value.length; // Type assertion
console.log(strLength); // Output: 17
// Explicit Casting Example:
let numString = "123";
let num = Number(numString); // Explicitly casting string to number
console.log(num); // Output: 123
let boolValue = Boolean(numString); // Explicitly casting string to boolean
console.log(boolValue); // Output: true
