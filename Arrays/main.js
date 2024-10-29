"use strict";
// // ARRAYS:- (collection of items)
let arry3 = ["Ali", "Musa", "Kazim", 5, 7, 8, 6];
let arry2 = [5, 7, 8, 6];
// -------------------------------------------
// Empty Array:-
let array = [];
array.push(1, 2, 3, 4, 5, 6); // dynamically adding
console.log(array);
//---------------------------------------
let fruits = ["apple", "mango", "grapes", "cherry"];
let fruits = ["apple", "mango", "grapes", "cherry"]; // Generic type
// fruits[0] = "Banana";
// console.log(fruits);
// console.log(fruits[0]);
// console.log(fruits.length);
// console.log(typeof fruits);
// -------------------------------------------------------------
//  Looping Over an Array: (Print all elements of an array).
//1) Using For Loop:
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }
// 2) Using For-of Loop:
let Cities = ["Karachi", "Hyderabad", "Mumbai", "Lucknow"];
for (let city of Cities) {
    console.log(city.toUpperCase());
}
// 3) Using For-Each:
Cities.forEach((city) => console.log(city));
// --------------------------------------------------------------------------
// For-Each Loop for Arrays:-
let arr = [1, 2, "Mumbai", 4, 5];
arr.forEach(function printVal(val) {
    console.log(val);
});
// or
arr.forEach((val) => {
    console.log(val.toString().toUpperCase());
});
let arr1 = ["mumbai", "karachi", "lahore"];
arr1.forEach((val, i, arr1) => {
    console.log(val.toUpperCase(), i, arr1);
});
// --------------------------------------------------------------------------
// Practice Qs:
// Qs1: Find the Average marks of Entire class?
// let marks = [85, 97, 44, 37, 76, 60];
// let sum = marks[0] + marks[1] + marks[2] + marks[3] + marks[4] + marks[5];
// let avg = sum / marks.length;
// console.log(avg);
// OR
// let sum = 0;
// for (let val of marks) {
//   // sum = sum + val;
//   sum += val;
// }
// let avg = sum / marks.length;
// console.log(`The Average marks of class is ${avg}`);
// -----------------------------------------------------------------------
// Qs2:
//
let items = [250, 645, 300, 900, 50];
let i = 0;
for (let val of items) {
    // console.log(`The Value at index ${i} = ${val}`);
    let offer = val / 10;
    items[i] = items[i] - offer;
    console.log(`The Value after Offer = ${items[i]}`);
    i++;
}
// OR
for (let i = 0; i < items.length; i++) {
    let offer = items[i] / 10;
    items[i] -= offer;
    console.log(`The Value after Offer = ${items[i]}`);
}
// --------------------------------------------------------------------------------
// METHODS:-
// 1) POP METHOD: (Delete from end & returns & changes the orginal array)
let fruits = ["apple", "mango", "grapes", "cherry"];
// console.log(fruits.join(""));
console.log(fruits.pop());
console.log(fruits);
// 2) PUSH METHOD:(Adds a new element at the end & returns new array length & changes the orginal array)
console.log(fruits.push("orange"));
console.log(fruits);
// 3) SHIFT METHOD:(Delete element from start & Returns)
console.log(fruits.shift());
console.log(fruits);
// 4) UNSHIFT METHOD:(Adds element at the begining & Returns new array lenght)
console.log(fruits.unshift("Kiwi"));
console.log(fruits);
// 5) SPLICE METHOD:(Adds new items to an array & change Original array)
// StartIndex, Delcount, Newelement;
let arr = [1, 2, 3, 4, 5, 6, 7];
// arr.splice(2, 2, 101, 102);
let newArr = arr.splice(2); // WORKS LIKE SPLICE METHOD.
console.log(newArr);
console.log(arr);
console.log(fruits.splice(0, 1, "Strawberry", "lemon"));
console.log(fruits);
// 6) SLICE METHOD: (Delete from start & Original array not change)
// Slice Method is also use to copy an array.
let marvelHero = ["Thor", "Spiderman", "Ironman", "Antman", "Dr.Strange"];
console.log(marvelHero);
console.log(marvelHero.slice(1, 3));
console.log(marvelHero.slice(1)); // one index se lekar end tak print kardega.
// 7) To String METHOD:
let foodItems = ["potato", "apple", "litchi", "burger"];
let marks = [89, 56, 74, 98];
console.log(marks);
console.log(marks.toString());
// 8) Concat METHOD:
// let marvelHero = ["Thor", "Spiderman", "Ironman"];
// let dcHero = ["Superman", "Batman"];
// let indianHero = ["Krish"];
// let heroes = marvelHero.concat(dcHero, indianHero);
// console.log(heroes);
// ------------------------------------------------------------------
// Some More Imp Methods of ARRAY:-
// 1) Map Methode: (creates a new array)
let nums = [12, 34, 56, 78];
nums.map((val) => {
    console.log(val);
});
console.log(nums);
// for copying an array:
let newArr = nums.map((val) => {
    return val ** 2;
});
console.log(nums);
console.log(newArr);
// 2) Filter Method:
let arr = [1, 2, 3, 4, 5, 6, 7];
let evenArr = arr.filter((val) => {
    return val % 2 === 0;
});
console.log(evenArr);
// ------------------------------------------------------------------
// 3) Reduce Method:
let arr1 = [1, 2, 3, 4];
let output = arr1.reduce((res, curr) => {
    return res + curr;
});
console.log(output);
// To find the largest number of an array:
let arr2 = [5, 8, 1, 4, 7];
const out = arr2.reduce((prev, curr) => {
    return prev > curr ? prev : curr;
});
console.log(out);
// ------------------------------------------------------------------
// Practice Questions:-
// 1)
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// a) Remove the first company from the array:
companies.shift();
console.log(companies);
// b) Remove Uber and add Ola in its space:
companies.splice(2, 1, "Ola");
console.log(companies);
// c) Add Amazon at the end
companies.push("Amazon");
console.log(companies);
// ------------------------------------------------------------------
// 4) Filter out marks greater than 90 in an array?
let marks = [89, 56, 95, 78, 91, 45, 99];
const toppers = marks.filter((val) => {
    return val > 90;
});
console.log(toppers);
// ------------------------------------------------------------------
// 2)
let input = 4; // Initialize the input value
let arr = []; // Initialize an empty array to hold the values
// Loop from 1 to the value of input (inclusive)
for (let i = 1; i <= input; i++) {
    arr[i - 1] = i; // Assign the value of i to the array at index i-1
}
console.log(arr);
// To Calculate the SUM of all Element in the array:
let sum = arr.reduce((res, curr) => {
    return res + curr;
});
console.log("SUM =", sum);
// To Calculate the PRODUCT / FACTORIAL of all Element in the array:
let product = arr.reduce((res, curr) => {
    return res * curr;
});
console.log("FACTORIAL", product);
// -------------------------------------------------------------------------------------
