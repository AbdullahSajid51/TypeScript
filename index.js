"use strict";
// // ARRAYS:-
// // Methods of an array:
// let students = ["osama","afzal","zohaib","naveed"]
// console.log(students);
// // Push Method (Adds New Element to the end of an array.)
// students.push("bilal");
// console.log(students)
// // Pop Method (Removes the last Element From an array.)
// const lastElement = students.pop()
// console.log(students);
// console.log(lastElement)
// // Shift Method (Removes the first Element From an array.)
// const firstElement = students.shift()
// console.log(students)
// // Unshift Method
// students.unshift("abdur rehman")
// console.log(students)
// //---------------------------------------------------------------------------------------------
// // OBJECTS:-
// It is in the form of Key and Value pair.
// In object there is no Index.
// let person = {
//     name: "Musa Khan",
//     age: 45,
//     address: ["address one","second address"],
//     greeting: function() {
//         console.log("HEllo World")
//     }
// };
// console.log(person.greeting())
// person["address"] = "my new address";
// console.log(person.address[1]);
// console.log(person["name"]);
// //---------------------------------------------------------------------------------------------
// // Rest Parameters (...args)
// function students(firstName:string, secondName:string, ...args) {
//     console.log(firstName,secondName)
//     console.log(args)
// }
// students("osama","ali","Musa","zohaib","bilal")
// //---------------------------------------------------------------------------------------------
// let students = ["ali","hassan","abbas"];
// console.log(students);
// let students2 = [...students];
// students2.push("ahmed")
// console.log(students);
// console.log(students2);
// let num=6
// let num1=num;
// num1=7
// console.log(num1)
// console.log(num)
// //---------------------------------------------------------------------------------------------
// // SPREAD OPERATOR(...):-
// let marks = [77, 55, 66, 44];
// // console.log(marks);
// console.log(...marks);
// // Assignment --> Read Primitive DataTypes.
// //---------------------------------------------------------------------------------------------
// // Pass By Value and Pass By Reference:-
// let students = ["ali","usman"]
// let studentsCopy = [...students];
// studentsCopy.push("Musa")
// console.log(students)
// console.log(studentsCopy)
