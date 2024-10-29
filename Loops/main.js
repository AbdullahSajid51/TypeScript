"use strict";
// // LOOPS:-
// // 1)FOR LOOP:
// // Print 1 to 5:
// for (let i = 1; i <= 5; i++) {
//   console.log(i, "Apna College");
// }
// // console.log(i); // shows an error
// // or
// for (var i = 1; i <= 5; i++) {
//   console.log(i, "Apna College");
// }
// console.log(i); // output = 6
// // Calculate the sum of 1 to n:
// let sum = 0;
// let n = 6;
// for (let i = 1; i <= n; i++) {
//   sum = sum + i;
// }
// console.log("sum =", sum);
// console.log("Loop has Ended.");
// // ---------------------------------------------
// // 2) WHILE LOOP:
// let n = 1;
// while (n <= 5) {
//   console.log(n, "Apna college");
//   n++;
// }
// // ---------------------------------------------
// // 3) DO-WHILE LOOP: (Necessary to run atleast one time)
// let j = 1;
// do {
//   console.log("j =", j);
//   j++;
// } while (j <= 5);
// // ---------------------------------------------
// // 4) For-of LOOP: (for string & arrays)
// let str = "JavaScript";
// for (let i of str) {
//   console.log("i =", i);
// }
// // for length of string:
// let str = "JavaScript";
// let size = 0;
// for (let i of str) {
//   console.log("i =", i);
//   size++;
// }
// console.log("String size =", size);
// // ---------------------------------------------
// // 5) For-in LOOP: (for object & arrays)
// let student = {
//   name: "Musa",
//   age: 24,
//   cgpa: 9.5,
//   isPass: true,
// };
// for (let key in student) {
//   console.log("Key =", key, ", Value =", student[key]);
// }
// // ----------------------------------------------------------
// // Practice Qs:
// // 1) print all even numbers from 0 to 100.
// for (let n = 0; n <= 100; n++) {
//   if (n % 2 === 0) {
//     console.log("num =", n);
//   }
// }
// // For ODD Numbers:
// for (let n = 0; n <= 100; n++) {
//   if (n % 2 !== 0) {
//     console.log("num =", n);
//   }
// }
// // 2)
// let guessNum = 6;
// let gameNUm = 6;
// if (gameNUm === guessNum) {
//   console.log(`You Guess correct Number ${gameNUm}.`);
// } else {
//   console.log(`You Guess Wrong Number ${gameNUm}.`);
// }
// // -------------------------------------------------------------------------------------------------------------
// // NESTED LOOP:-
// let n: number = 10;
// let a: string = "";
// for (let i: number = 1; i <= n; i++) {
//   for (let j: number = 1; j <= i; j++) {
//     a += "*";
//   }
//   a += "\n";
//   // console.log(i);
// }
// console.log(a);
// // Creating a Mathmetic table of 2:-
// let i: number = 2;
// for (let n: number = 1; n <= 10; n++) {
//   console.log(`2 x ${n} = ${i * n}`);
// }
// OR
// let number = 2;
// for (let i = 1; i <= 10; i++) {
//   console.log(`${number} x ${i} = ${number * i}`);
// }
// -----------------------------------------------------------------------------
