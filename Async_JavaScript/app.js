"use strict";
// // Sharaddha Khapra Lecture:
// // SYNCHRONOUS PROGRAMMING: (Line by Line & Follow Sequence)
// console.log("one"); // Pehle Run hoga
// console.log("two"); // Phir ye code hoga
// console.log("three"); // end may ye code run hoga
// // -------------------------------------------------------------------------------------
// // ASYNCHRONOUS PROGRAMMING:
// function hello() {
//   console.log("Hello");
// }
// setTimeout(hello, 4000); // timeout ; 2s = 2000milisecond
// // OR
// console.log("one");
// console.log("two");
// setTimeout(() => {
//   console.log("Hello");
// }, 4000);
// console.log("three");
// console.log("four");
// // ---------------------------------------------------------------------------------
// CALLBACKS:- A callback is a function passed as an argument to another function.
// function sum(a: any, b: any) {
//   console.log(a + b);
// }
// function calculator(a: any, b: any, sum: any) {
//   sum(a, b);
// }
// calculator(1, 5, sum);
// // OR
// calculator(6, 5, (a: any, b: any) => {
//   console.log(a + b);
// });
// // Example of Callback with setTimeout
// const hello = () => {
//   console.log("hello");
// };
// setTimeout(hello, 3000); // SetTimeout takes callback function like in this code 'hello' takes as an argument by SetTimeout.
// // -------------------------------------------------------------------------
function hello(callback, newName) {
    callback(newName);
}
let arrowFunc = (name) => {
    console.log(`Hello ${name}`);
};
hello(arrowFunc, "Ali");
// // -------------------------------------------------------------------------
// // Nesting: (Nested if-else)
// let age = 15;
// if (age >= 18) {
//   if (age >= 60) {
//     console.log("senior");
//   } else {
//     console.log("middle");
//   }
// } else {
//   console.log("child");
// }
// // -----------------------------------------------------------------
// function getData(dataId: any, getNextData: any) {
//   // Simulate an asynchronous operation with a timeout
//   setTimeout(() => {
//     console.log("data", dataId);
//     if (getNextData) {
//       getNextData();
//     }
//   }, 2000); // 2 seconds delay
// }
// // // Callback Hell (A Pyramid of Doom):-
// // // Start the sequence of asynchronous operations
// getData(1, () => {
//   console.log("getting data2 ....");
//   getData(2, () => {
//     console.log("getting data3 ....");
//     getData(3, () => {
//       console.log("getting data4 ....");
//       getData(4);
//     });
//   });
// });
