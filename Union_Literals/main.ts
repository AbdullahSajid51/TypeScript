// // UNION LITERALS:-
let myname: string | null;

myname = null;
console.log(myname);

myname = "zia";
console.log(myname);

myname = undefined; //Error
myname = 12; //Error
// // ---------------------------------------------
let myAge: string | number;

myAge = 16; // narrowing to number
console.log(myAge); // Output: 16

// console.log(myAge.toLowerCase()); // Error: Property 'toLowerCase' does not exist on type 'number'.

myAge = "Don't Know"; // narrowing to string
console.log(myAge); // Output: "Don't Know"

console.log(myAge.toString()); // Output: "Don't Know"
// toString() can be called on both string and number

console.log(myAge.toLowerCase()); // Output: "don't know"
// toLowerCase() can be called because myAge is known to be a string at this point

// // --------------------------------------------------

// // UNION TYPES:-
// A union type allows a variable to be one of several types. It's defined using the | (pipe) operator.

let UnionType: string | number | boolean | null | undefined;

UnionType = "Musa";
UnionType = "Abdullah";
UnionType = "Black color";
console.log(UnionType);

UnionType = true;

UnionType = 10;
UnionType = 100;
UnionType = 2000;
console.log(UnionType);

// // --------------------------------------------------

// // TYPE LITERAL:-
// // Type literals in TypeScript allow you to define exact values a type can take. This can be useful for enforcing specific values.
// // A type that can be used to specify a fixed set of possible string values.

type Direction = "north" | "south" | "east" | "west";

let move: Direction;
move = "north"; // Valid
move = "south"; // Valid
move = "up";    // Error: Type '"up"' is not assignable to type 'Direction'.

let literalType: "Musa" | 20000;

literalType = "Musa";
literalType = 20000;
console.log(literalType);

// // --------------------------------------------------
// let newAge = Math.random() > 0.6 ? "Khan" : 60;

// //newAge.toLowerCase();//Error: Transpiler cannot narrow

// if (newAge === "Khan") {
//   // Type of newAge: string
//   newAge.toUpperCase(); // Can be called
// }
// // OR
// if (typeof newAge === "string") {
//   // Type of newAge: string
//   newAge.toUpperCase(); // Can be called
// }

// typeof newAge === "string"
//   ? newAge.toUpperCase() // Ok: string
//   : newAge.toFixed(); // Ok: number
// console.log(newAge);
// // --------------------------------------------------

// let age: number | "died" | "unknown";

// age = 90;//OK
// age = "died";//OK
// age = "unknown";//OK
// // age = "living";//Error

// let zia: "zia";

// zia = "zia";
// //zia = "khan";//Error
// // --------------------------------------------------

// let yourName = Math.random() > 0.6 ? "Hira Khan" : undefined;

// if (yourName) {
//   yourName.toUpperCase(); // Ok: string
// }

// //yourName.toUpperCase();//Error: Object is possibly 'undefined'.

// yourName?.toUpperCase(); //OK
// // --------------------------------------------------

// // TYPE ALIAS:-
// // Type aliases allow you to create a new name for a type. This can simplify complex type definitions and improve code readability.

// // Syntax:
// // type AliasName = ExistingType;

// // You can also define a type alias
type RawData = boolean | number | string | null | undefined;

let data: RawData;
data = true;
data = "Musa";
data = null;
data = 56;

// You can even combine them

type Id = number | string;

type IdMaybe = Id | undefined | null;

let myAge : IdMaybe = "Musa"
// // --------------------------------------------------

// // Example:-
// // 1)
let a: string | number | boolean = 1000;
let b: string | number | boolean = "Musa Khan";
let c: string | number | boolean = false;

type letType = string | number | boolean; // type alias

let d: letType = 1000;
let e: letType = "Musa Khan";
let f: letType = false;

// // 2)
type Color = "red" | "green" | "blue";

function setColor(color: Color) {
  console.log(`Color set to ${color}.`);
}
setColor("blue");
setColor("red");
setColor("green");
// // --------------------------------------------------

// // Summary:
// // Union Types: Allow a variable to be one of several types.

// // Type Literals: Define exact values a type can take.

// // Type Aliases: Create new names for types to simplify and improve readability.

// // These features enhance TypeScript's type system, making it more expressive and flexible for handling various type-related scenarios.
