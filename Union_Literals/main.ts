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
const userInput = (value: string | number): string | number => {
  if (typeof value === "string") {
    return value.toLocaleUpperCase();
  } else if (typeof value === "number") {
    return value * 2;
  } else {
    throw new Error("Invalid Data");
  }
};
console.log(userInput("ali"));

// // --------------------------------------------------
// Doing the same above code By Using Ternary Operators:-
const userInput = (value: string | number): string | number => 
  typeof value === "string" 
    ? value.toUpperCase() 
    : typeof value === "number" 
      ? value * 2 
      : (() => { throw new Error("Invalid Data"); })();

// Test Cases
console.log(userInput("musa")); 
console.log(userInput(6));    

// // --------------------------------------------------
//todo HOMEWORK TIME By Thapa Technical:

//? We want to create a function that formats the value passed to it in a specific way based on its type:
//? 1. If the input is a number, it should add a dollar sign and format it with two decimal places.
//? 2. If the input is a boolean, it should return "Yes" for true and "No" for false.
//? 3. If the input is a string, it should capitalize the first letter.
const formatValue = (value: string | boolean | number): string => {
  if (typeof value === "number") {
    return `$${value.toFixed(2)}`;
    // return "$" + value.toFixed(2)
  } else if (typeof value === "boolean") {
    return value ? "Yes" : "No";
  } else {
    return value[0].toUpperCase() + value.slice(1);
  }
};

// Test Cases
console.log(formatValue(123.456));  // Output: "$123.46"
console.log(formatValue(true));     // Output: "Yes"
console.log(formatValue("thapa"));  // Output: "Thapa"
// // --------------------------------------------------
const capitalizeFirstLetter = (value: string): string => {
  return value[0].toUpperCase() + value.slice(1);
};

console.log(capitalizeFirstLetter("hello")); // Output: "Hello"
console.log(capitalizeFirstLetter("world")); // Output: "World"

// // --------------------------------------------------


type Person = {
  name: string;
  age: number;
};

type Employee = {
  emp_id: number;
  department: string;
};

type EmployeeDetails = Person | Employee

const employee: EmployeeDetails = {
  name: "Musa",
  age: 23,
  // emp_id: 562,
  // department: "It"
}


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
// ---------------------------------------------------------------------------------------------------------------------------------------------

// // INTERSECTION (&):- 
type Person = {
  name: string;
  age: number;
};

type Employee = {
  emp_id: number;
  department: string;
};

type EmployeeDetails = Person & Employee

const employee: EmployeeDetails = {
  name: "Musa",
  age: 23,
  // emp_id: 562,
  // department: "It"
}
// -------------------------------------------------
//todo Homework Question By Thapa Technical: Combine User and Account Data

//todo You are building a user management system, and you have two TypeScript types:

//? User: Represents basic user information, with the following properties:
//? id (number): The user's unique identifier.
//? name (string): The user's name.
//? email (string): The user's email address.

//? Account: Contains details about the user's account, with the following properties:
//? accountId (number): The account's unique identifier.
//? accountType (string): The type of the account (e.g., "Savings," "Checking," etc.).
//? balance (number): The account balance.

/* Your task is to create a function called combineUserAndAccount that takes a User
   object and an Account object as arguments and returns a new object representing 
   the combined information of the user and their account. */

// Ensure that the resulting object contains all the properties from both User and Account types.

type User = {
  name: string;
  email: string;
  id: number;
};

type Account = {
  accountId: number;
  accountType: string;
  balance: number;
};

const user: User = {
  name: "Musa Khan",
  email: "musakhan51@gmail.com",
  id: 7865,
};
const account: Account = {
  accountId: 12345,
  accountType: "Savings",
  balance: 20000000,
};
const combineUserAccount = (user: User, account: Account) => {
  return {
    ...user, // Spread operator to include all properties from the User object
    ...account, // Spread operator to include all properties from the Account object
  };
};
const combineData: User & Account = combineUserAccount(user, account);
console.log(combineData);
// ---------------------------------------------------------------------------------------------------------------------------------------------
