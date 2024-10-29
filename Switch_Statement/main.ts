// A 'switch' statement in TypeScript is used to execute one block of code among many options based on the value of an expression. It is an alternative to using multiple 'if-else' statements when you need to compare a variable against multiple potential values.

// When to Use Which?
// . Use if-else when you have complex conditions, ranges, or when conditions depend on more than one variable.
// . Use switch when you need to compare a single variable against a set of fixed values and want a cleaner, more organized structure for this comparison.
// --------------------------------------
// switch (key) {
//   case value:
    
//     break;

//   default:
//     break;
// }
// --------------------------------------
// Example:
// Using if-else
let day = "Tuesday";

if (day === "Monday") {
  console.log("Start of the workweek!");
} else if (day === "Tuesday") {
  console.log("It's Tuesday, keep going!");
} else if (day === "Wednesday") {
  console.log("Midweek already.");
} else if (day === "Thursday") {
  console.log("Almost there!");
} else if (day === "Friday") {
  console.log("It's Friday, time to relax!");
} else {
  console.log("It's the weekend!");
}
//---------------------------------------

// Using switch

let day = "Tuesday";

switch (day) {
  case "Monday":
    console.log("Start of the workweek!");
    break;
  case "Tuesday":
    console.log("It's Tuesday, keep going!");
    break;
  case "Wednesday":
    console.log("Midweek already.");
    break;
  case "Thursday":
    console.log("Almost there!");
    break;
  case "Friday":
    console.log("It's Friday, time to relax!");
    break;
  default:
    console.log("It's the weekend!");
    break;
}

// ----------------------------

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
// ----------------------------
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
// ----------------------------

// let weekend: string = "sunday";
// switch (weekend) {
//   case "saturday":
//     console.log("Its time for Picnic.");
//     break;
//   case "sunday":
//     console.log("Its time for Rest.");
//     break;
//   default:
//     console.log("Its time for Work.");
//     break;
// }
// ----------------------------

let weekend: string = "Tuesday";
if (weekend == "sunday") {
  console.log("Its time for Rest.");
} else if (weekend == "saturday") {
  console.log("Its time for Picnic.");
} else console.log("Its time for Work.");