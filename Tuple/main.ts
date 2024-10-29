// TUPLE:- (Typed Array /Fixed length array / Heterogenous array)
// Syntax:
// let tuple: [type1, type2, ...]

// ? -> optional
// It also follow Sequence
let arr: [string, number, boolean, { name: string }?] = [
  "Musa",
  56,
  true,
  { name: "Ali" },
];
console.log(arr);
console.log(arr[0]);
console.log(arr.length);
console.log(typeof arr);
// --------------------------------
// Tuple types have the advantage that you can accurately describe the type of an array of mixed types

// Typically an array contains zero to many objects of a
// single type. TypeScript has special analysis around
// arrays which contain multiple types, and where the order
// in which they are indexed is important.

// These are called tuples. Think of them as a way to
// connect some data, but with less syntax than keyed objects.

// You can create a tuple using JavaScript's array syntax:

const failingResponse = ["Not Found", 404];

// but you will need to declare its type as a tuple.

const passingResponse: [string, number] = ["{}", 200];

// If you hover over the two variable names you can see the
// difference between an array ( (string | number)[] ) and
// the tuple ( [string, number] ).

// As an array, the order is not important so an item at
// any index could be either a string or a number. In the
// tuple the order and length are guaranteed.

// --------------------------------

// Tuples Should be READ ONLY:- means Aik dafa tuple bana lia tu us me kuch add aur delete na hosake

type PersonInfo = readonly [string, number, boolean];
// type PersonInfo = [string, number, boolean];

const displayPersonInfo = (person: PersonInfo) => {
  const [name, age, hasDrivingLicense] = person;
  console.log(
    `Name: ${name}, Age: ${age}, Driving License: ${
      hasDrivingLicense ? "Yes" : "No"
    }`
  );
};

const person1: PersonInfo = ["Musa", 22, true];
const person2: PersonInfo = ["Ali", 12, false];
// const person3: PersonInfo = [false, "Abdull", 55] // Shows an Error because order is incorrect.

displayPersonInfo(person1);
displayPersonInfo(person2);

// person1.push("codinng"); // This is not a good practice of Tuple. This should be avoid by using 'readonly' key word.
// console.log(person1);
// --------------------------------
