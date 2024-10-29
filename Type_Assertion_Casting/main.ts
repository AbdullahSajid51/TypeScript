// Explicit Casting / Type Assertion :

let myname: unknown = "Zia";
console.log((myname as string).length);
console.log((<string>myname).length);

// There are two syntaxes for type assertion:

// 1. Angle-Bracket Syntax
// This syntax uses angle brackets to perform a type assertion. Here's the code:
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;

// 2. As-Syntax:
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;

// Examples
// Type Assertion Example:
let value: any = "Hello, TypeScript!";
let strLength: number = (value as string).length; // Type assertion
console.log(strLength); // Output: 17

// Explicit Casting Example:
let numString: string = "123";
let num: number = Number(numString); // Explicitly casting string to number
console.log(num); // Output: 123

let boolValue: boolean = Boolean(numString); // Explicitly casting string to boolean
console.log(boolValue); // Output: true
