"use strict";
// // IF - ELSE || AGAR - WARNA:-
// let come = "Muhammad";
// if (come === "Muhammad") {
//   console.log("Yes Please Come Muhammad!");
// } else if (come === "Musa") {
//   console.log("Yes Please Come Musa Sir..");
// } else {
//   console.log("No You Can't come");
// }
// // Ticketing System
// let country = "Pakistan";
// let age = 11;
// if (country === "Pakistan") {
//   if (age >= 18) {
//     console.log("Here is Your Ticket..");
//   } else {
//     console.log("Age Restriction.");
//   }
// } else {
//   console.log("Invalid Country.");
// }
// // Example:
// let isRaining = true;
// if (isRaining) {
//   console.log("Wear a Raincoat.");
// } else console.log("Wear Sunglasses.");
// ---------------------------------------------------------------------------------------------
// // TERNARY OPERATORS: A ternary operator in TypeScript is a shorthand way of writing conditional statements. It is also known as the conditional operator. It allows you to assign a value based on a condition in a more concise way compared to using an if-else statement.
// // The syntax of the ternary operator is:
// // condition ? expressionIfTrue : expressionIfFalse
let age = 55;
let canVote = age >= 18 ? "Yes" : "No";
console.log(canVote); // Output: Yes
let isHungary = true;
let snack = isHungary ? "Apple" : "Water";
console.log(`You should have some ${snack}.`);
