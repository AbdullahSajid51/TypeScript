"use strict";
// let fruits: string[] = ["apple", "mango", "grapes", "cherry"];
// console.log(fruits.push("orange"));
// console.log(fruits);
// const lastData = fruits.pop();
// console.log(lastData);
// console.log(fruits);
// // for (let i = 0; i < fruits.length; i++) {
// //   console.log(fruits[i]);
// // }
// // for (let fruit of fruits) {
// //   console.log(fruit);
// // }
// fruits.forEach((fruit: string) => {
//   console.log(fruit);
// });
// const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const doubleData: number[] = numbers.map((val: number) => {
//   return val * 2;
// });
// console.log(doubleData);
// const numToStr: string[] = numbers.map((curElm: number) => {
//   return curElm.toString();
// });
// console.log(numToStr);
// const evenNum: number[] = numbers.filter((curNum: number) => {
//   return curNum % 2 === 0;
// });
// console.log(evenNum);
// ----------------------------------------------
// Homework Time
//* Practice questions for map:
//? 1: Given an array of strings representing names, create a new array that contains the uppercase version of each name.
// const names: string[] = ["Alice", "Bob", "Anna", "Andrew", "Alex"];
// const upperCase = names.map((curName) => {
//   return curName.toUpperCase();
// });
// console.log(names);
// console.log(upperCase);
//? 2: Given an array of numbers, create a new array that contains the square of each number
// const numbers: number[] = [1, 2, 3, 4, 5, 6];
// const squareNum = numbers.map((curNum: number) => {
//   return curNum ** 2;
// });
// console.log(numbers);
// console.log(squareNum);
// ------------------------------------
//* Practice questions for filter:
//? 1: Given an array of strings, create a new array that contains only the strings with a length greater than 4.
// const names: string[] = ["Alice", "Bob", "Anna", "Andrew", "Alex"];
// const newArray = names.filter((curVal) => {
//   return curVal.length > 4;
// });
// console.log(names);
// console.log(newArray);
//? 2: Given an array of strings, filter out the names that start with the letter "A".
//const names: string[] = ["Alice", "Bob", "Anna", "Andrew", "Alex"];
// const newArray: string[] = names.filter((curVal: string) => {
//   return curVal.startsWith("A");
// });
// console.log(names);
// console.log(newArray);
// /--------------------------------------------
//! Homework 🧑‍💻
//? 1: Create a function called calculateAverage that takes an array of numbers as a parameter and returns the average of those numbers.
// const calculateAverage = (num: number[]) => {
//   if (num.length === 0) {
//     return 0;
//   }
//   const sum = num.reduce((res, curr) => {
//     return res + curr;
//   });
//   const avg = sum / num.length;
//   return avg;
// };
// console.log(calculateAverage([]));
//? 2: Write a function called findMaxValue that takes an array of numbers as a parameter and returns the maximum value in the array.
// const findMaxValue = (num: number[]) => {
//   if (num.length === 0) {
//     return 0;
//   }
//   const maxVal = num.reduce((res, curr) => (res > curr ? res : curr));
//   return maxVal;
// };
// console.log(findMaxValue([]));
// ----------------------------------
function findMaxValue(numbers) {
    if (numbers.length === 0) {
        return 0;
    }
    let maxVal = numbers.reduce((prev, cur) => (prev > cur ? prev : cur));
    return maxVal;
}
console.log(findMaxValue([]));
