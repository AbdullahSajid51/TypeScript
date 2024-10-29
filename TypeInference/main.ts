// Type inference in TypeScript refers to the compiler's ability to automatically determine the type of a variable based on the value it is assigned. This means that you don't always have to explicitly specify the types of variables, parameters, or return values. The TypeScript compiler uses the context in which the variable is used to infer its type.

// Strongly Typed Syntax:
let a: string = "Pakistan";
let b: number = 786;
let c: boolean = true;

// Type Inference -> means (Assuming):
let e = "USA"; // The Compiler infers the type 'String' for the variable e.

let f = 15.5; // The Compiler infers the type 'Number' for the variable f.

let g = false; // The Compiler infers the type 'Boolean' for the variable g.
// -------------------------------------------------------------------------
// Q1: Declear a variable message and initialize it with the value "Hello, TypeScript!". infer the type of message using type inference.

let message = "Hello, TypeScript!"; // The compiler infers the type 'String' for the variable message
console.log(typeof message);

// -------------------------------------------------------------------------

// Q2: write a function calculateArea that takes the length and width paramenter of type number and returns their product, Infer the return type of the function using type inference
const calculateArea = (len: number, width: number) => {
  return len * width;
};
console.log(calculateArea(5, 6)); // The compiler infers the type 'Number' for the function calculateArea
