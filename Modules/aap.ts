// IMPORT FILE:

import add from "./main.js"; // import with default
console.log(add(5, 10));

import { userNames, favcolor } from "./main.js"; // import without default
userNames["0"] = "Hussain";
console.log(userNames);

// import { favcolor as color } from "./main.js";
console.log(favcolor);

import { obj as person } from "./main.js";

person.name = "Musa";
console.log(person); // Dot Notation
// console.log(person["name"]); // Square Bracket Notation

// ----------------------------------------------------------
