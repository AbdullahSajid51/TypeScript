"use strict";
// A 'switch' statement in TypeScript is used to execute one block of code among many options based on the value of an expression. It is an alternative to using multiple 'if-else' statements when you need to compare a variable against multiple potential values.
// Syntax:-
// switch (key) {
//     case value:
//         break;
//     default:
//         break;
// }
// let day: number = 0;
// let dayName: string;
// switch (day) {
//   case 0:
//     dayName = "Sunday";
//     break;
//   case 1:
//     dayName = "Monday";
//     break;
//   case 2:
//     dayName = "Tuesday";
//     break;
//   case 3:
//     dayName = "Wednesday";
//     break;
//   case 4:
//     dayName = "Thursday";
//     break;
//   case 5:
//     dayName = "Friday";
//     break;
//   case 6:
//     dayName = "Saturday";
//     break;
//   default:
//     dayName = "Invalid day";
// }
// console.log(dayName);
// Example:
let dayOff = "Saturday";
switch (dayOff) {
    case "Saturday":
        console.log("Go Hiking");
        break;
    case "Sunday":
        console.log("Read a Book");
        break;
    default:
        console.log("Work on a Hobby");
}
