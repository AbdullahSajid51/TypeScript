"use strict";
// // // Rest Parameter(...):-
// // // The rest parameter syntax allows a function to accept an indefinite number of arguments as an array. This is useful when you don't know how many arguments will be passed to the function.
// // // Rest operator packs elements means it packs individual elements in an array.
// // // Syntax:
// function myFunction(...args: type[]): void {
// // args is an array containing all the passed arguments
//   }
// // // Example:
// function sum(num1: number, num2: number, ...other: number[]) {
//   console.log(other);
// }
// sum(5, 9, 5);
// // // &
// function sum(...numbers: number[]): number {
//   return numbers.reduce((res, curr) => res + curr);
// }
// console.log(sum(1, 2, 3, 4, 5));
// console.log(sum(4, 5, 6, 7));
// // //-------------------------------------------------------
// // // Spread Operator:-
// // // The spread operator allows an iterable (like an array) to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.
// // // Spread Operator Unpacks element by Cloning & Merging of an array to make a new array.
// // // USES:
// // // 1) To Copy an array / to make clone of an array.
// const numbers = [1, 2, 3];
// const newNumbers = [...numbers];
// console.log(newNumbers);
// // // 2) Merge two arrays to make a new array.
// const oldNumbers = [1, 2, 3];
// const nwNumbers = [4, 5, 6];
// const totalNumbers = [...oldNumbers, ...nwNumbers];
// console.log(totalNumbers);
// // // 3) Compose & Modify the array.
// const oldNumbers = [1, 2, 3];
// const newNumbers = [4, 5, 6];
// const totalNumbers = [100, ...oldNumbers, ...newNumbers, 200];
// console.log(totalNumbers);
// // Same Uses as in Object:
// // OBJECT
// // 1) Clone / Copy of object.
// const order = {
//   id: 1,
//   date: "july 16 , 2024",
//   customerName: "Musa",
// };
// const newOrder = { ...order };
// console.log(newOrder);
// // // 2) Merge two objects
// const user = {
//   name: "Musa",
//   city: "Karachi",
// };
// const address = {
//   address: "main street",
// };
// const newUser = { ...user, ...address };
// console.log(newUser);
// // Rest Parameter: Used in function definitions to collect all remaining arguments into an array.
// // Spread Operator: Used in function calls, array literals, or object literals to spread elements or properties
// // Example using Both
// // Combining rest parameter and spread operator in a single example:
// function makeSandwich(breadType: string, ...fillings: string[]) {
//   console.log(
//     `Making a sandwich with ${breadType} bread and the following fillings:`
//   );
//   fillings.forEach((items) => console.log("-", items));
//   console.log(...fillings); // This line will log the fillings as individual items
// }
// let fillings = ["Ham", "Cheese", "Lettuce", "Tomato", "Chicken", "Salad"];
// makeSandwich("Whole Wheat", ...fillings);
// // Output:
// // Making a sandwich with Whole Wheat bread and the following fillings:
// // Ham Cheese Lettuce
// // In this example:
// // The makeSandwich function uses a rest parameter to accept any number of fillings.
// // The fillings array is spread into individual elements when passed to the makeSandwich function.
// // fillings array کو spread operator کی مدد سے individual elements میں تبدیل کر کے makeSandwich فنکشن کو دیا گیا ہے۔
// // Practice:
// function sandwich(bread: string, ...fillings: string[]) {
//   console.log(
//     `Making a sandwich with ${bread} bread and the following fillings `
//   );
//   fillings.forEach((items) => console.log("-", items));
// }
// let fillings = ["chicken", "tomato", "cheese"];
// sandwich("wheat", ...fillings);
// // 2)
function halfFryEgg(egg, ...ingredients) {
    console.log(egg);
    console.log(ingredients);
}
halfFryEgg(4, 1.5, 2, 6);
