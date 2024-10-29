// FUNCTIONS :-

function myFunction() {
  console.log("Welcome to ApnaCollege!");
  console.log("We are learning JS.");
}
myFunction();

// Function of Sum of two numbers:
function mySum(n1, n2) {
  let sum = n1 + n2;
  console.log(sum);
}
mySum(121, 892);

// RETURN:
function sum(x: number, y: number): number {
  return x + y;
}
let val = sum(3, 4);
console.log(val);
// ----------------------------------------------------------

// Sum Function:
function sum(x: number, y: number): number {
  return x + y;
}

// Arrow Function:
const arrowSum = (x, y) => {
  console.log(x + y);
};
arrowSum(5, 6);

// Multiplication Function:
function mul(x: number, y: number): number {
  return x * y;
}

// Arrow Function:
const arrowMul = (x, y) => {
  console.log(x * y);
};
arrowMul(5, 9);

// Arrow Function:
let printHello = () => {
  console.log("Hello!");
};
printHello();

function ali(yougurt: string = "Hello Ali Dahi le ao.") {
  console.log(yougurt);
  console.log("Hello Ali Dahi le ao.");
}
// Caliing the Function:
ali();
ali();

function hi(variable: string) {
  console.log(variable);
}
hi("Hello Everyone!");

function arrow(n: number = 5786) {
  console.log(5786);
  console.log("Hello Ali Dahi le ao.");
  console.log("Musa khan");
}
// Caliing the Function:
arrow();
arrow();
arrow();
arrow();

//--------------------------------------------------

// For-Each Loop for Arrays:-
let arr = [1, 2, "Mumbai", 4, 5];

arr.forEach(function printVal(val) {
  console.log(val);
});

or
arr.forEach((val) => {
  console.log(val.toString().toUpperCase());
});

let arr1 = ["mumbai", "karachi", "lahore"];
arr1.forEach((val, i, arr1) => {
  console.log(val.toUpperCase(), i, arr1);
});
// ------------------------------------------------------------------

// Some More Imp Methods of ARRAY:-

// 1) Map Methode: (creates a new array)
let nums = [12, 34, 56, 78];
// nums.map((val) => {
//   console.log(val);
// });
// console.log(nums);

// for copying aan array:
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
// isPalindrome:-
const isPalindrome = (str: string): boolean => {
  let myPalin = str.split("").reverse().join("");
  return myPalin === str;
};
console.log(isPalindrome("level"));
// ------------------------------------------------------------------
//! Homework for you Guys.. 🧑‍💻
// Q 1: Create a function called calculateAverage that takes an array of numbers as a parameter and returns the average of those numbers.

function calculateAverage(arry: number[]): number {
  if (arry.length === 0) {
    return 0; // Handle case when the array is empty
  }
  let sum = arry.reduce((res, curr) => res + curr);

  // return arry.reduce((acc, num) => acc + num, 0) / arry.length;

  let avg = sum / arry.length;
  return avg;
}
console.log(calculateAverage([]));
// ------------------------------------------------------------------

// Q 2: Write a function called findMaxValue that takes an array of numbers as a parameter and returns the maximum value in the array.
const findMaxValue = (numbers: number[]): number => {
  if (numbers.length === 0) {
    return 0;
  }
  const maxValue = numbers.reduce((res, curr) => (res > curr ? res : curr));
  return maxValue;
};

console.log(findMaxValue([56, 89, 41, 233]));

// ------------------------------------------------------------------

// ARROW / LAMDA FUNCTION:-
let myFunc = (hi: number, hello: number) => console.log(hi, hello);

console.log(myFunc(8, 9));

let arrowFunc = (a: number) => console.log(a);
arrowFunc(5786);

let arrowFunc = (a: number) => {
  console.log(a);
};
arrowFunc(5786);

//--------------------------------------------------

// RETURN STATEMENT:-

function checking(a: number, b: number) {
  //   console.log(a + b);
  //   a + b;
  return a + b;
}
console.log(checking(2, 2));

let arrowfunc = (a: number, b: number): void => {
  return console.log(a + b);
  //   console.log(a, b);
};
arrowfunc(5, 6);
//---------------------------
function greet(name: string, id: number): string {
  return `Hello ${name}, your id is ${id}.`;
}

const myGreet = greet("Abdul", 12);
console.log(myGreet);

// or 

const greet = (name: string, id: number): string =>
  `Hello ${name}, your id is ${id}.`;

const myGreet = greet("Abdul", 12);
console.log(myGreet);
// tsc -w --> for  automatic conversion.
// ---------------------------------------------------------

// Practice Qs:
// 1) Count Vowels:-
function countVowels(str: string) {
  let count = 0;
  for (let char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  console.log(count);
}
countVowels("apnacOllege");

// 2) Doing the same thing by Arrow Function:-

let countVowel = (str: string) => {
  let count = 0;
  for (let char of str.toLowerCase()) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    )
      count++;
  }
  return count;
};

console.log(countVowel("AEiou")); // Output: 3

// 3) Print the square of each number of array using for-Each Loop.
let nums = [2, 4, 6, 8, 10, 9];
nums.forEach((num) => {
  // let sq = num * num;
  // console.log(sq);
  console.log(num ** 2);
});

// OR

let nums = [2, 4, 6, 8, 10, 9, 7];

let calSquare = (num) => {
  console.log(num ** 2);
};
nums.forEach(calSquare);

// 4) Filter out marks greater than 90 in an array?
let marks = [89, 56, 95, 78, 91, 45, 99];
const toppers = marks.filter((val) => {
  return val > 90;
});
console.log(toppers);

// 5)
let input = 4; // Initialize the input value
let arr: number[] = []; // Initialize an empty array to hold the values

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

// ----------------------------------------------------------------------

// Sir Zia Repo
// Functions:-

// Note: All parameters are required

// Named function
function add(x: number, y: number): number {
  return x + y;
}

//Anonymous function
let myAdd1 = function (x: number, y: number): number {
  return x + y;
};

//Anonymous function with explict type
let myAdd2: (x: number, y: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};
console.log(myAdd2(5, 8));

//type names dont matter
let myAdd3: (baseValue: number, increment: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};
console.log(myAdd3(5, 5));

//Lambda functions / Arrow Function:-
let myAdd4 = (a: number, b: number) => a + b;
//output will be: var myAdd4 = function(a : number, b : number) {return a + b};
console.log(myAdd4(5,5));

type GreetFunction = (a: string) => void;
function greeter(fn: GreetFunction) {
  //....
}
// --------------------------------------------------------------------------

// Named function with optional parameters
function buildName(firstName: string, lastName?: string): string {
  if (lastName) return firstName + " " + lastName;
  else return firstName;
}

console.log(buildName("Musa", "Khan"));

let result1 = buildName("Bob");  //ok
let result2 = buildName("Bob", "Adams", "Sr.");  //error, too many parameters
var result3 = buildName("Bob", "Adams");  //also ok

//anonymous function type with optional parameters
var buildName1 : (firstName: string, lastName?: string) => string =
function(firstName: string, lastName?: string) : string {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
// --------------------------------------------------------------------------

// Named function with optional and default parameters
// (Note that the parameter type will be optional when used with default value)
function buildName(firstName: string, lastName = "Khan"): string {
  if (lastName) return firstName + " " + lastName;
  else return firstName;
}
// console.log(buildName("Musa", "Butt"));

let result1 = buildName("Bob"); //works correctly because last parameter is optional
let result2 = buildName("Bob", "Adams", "Sr."); //error, too many parameters
let result3 = buildName("Bob", "Adams"); //correct

// anonymous function type with defult parameters
// (Note that the parameter type will be optional when used with defult value)
let buildName1: (firstName: string, lastName?: string) => string = function (
  firstName: string,
  lastName = "Khan"
): string {
  if (lastName) return firstName + " " + lastName;
  else return firstName;
};
console.log(buildName1("Hamza", "Karim"));
// --------------------------------------------------------------------------
// Function Rest Parameter:-

function buildName(firstName: string, ...restOfName: string[]) {
  //Named function with Rest parameters
  return firstName + " " + restOfName.join(" ");
}

var employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");

console.log(employeeName);

//anonymous function type with Rest parameters
var buildNameFun: (fname: string, ...rest: string[]) => string = function (
  firstName: string,
  ...restOfName: string[]
) {
  return firstName + " " + restOfName.join(" ");
};
console.log(buildNameFun("Khan", "Zia", "U"));

// Note: Rest, optional and default parameters can only
// be at the end of the parameter list
// --------------------------------------------------------------------------

// Function Overloads:-
function sum(a: number, b: number): number;
function sum(a: string, b: string): string;

function sum(a: any, b: any): any {
  return a + b;
}

console.log(sum(5, 6));
console.log(sum("hello", "Ali"));
//------------------
//overloads give us type-checked calls

//its customary to order overloads from most specific to least specific
function add(arg1: string, arg2: string): string;//option 1
function add(arg1: number, arg2: number): number;//option 2
function add(arg1: boolean, arg2: boolean): boolean;//option 3
//this is not part of the overload list, 
//so it has only three overloads
function add(arg1: any, arg2: any): any {
    return arg1 + arg2;
}

//Calling 'add' with any other parameter types would cause an error except for the three options
console.log(add(1, 2));
console.log(add("Hello", "World"));
console.log(add(true, false));
// --------------------------------------------------------------------------

function greet(name: string, id: number) {
  console.log(`Hello ${name}, your id is ${id}.`);
}

greet("Musa", 1);

// or
// Fat Arrow Function:

const greet = (name: string, id: number) => {
  console.log(`Hello ${name}, your id is ${id}.`);
};

greet("Musa", 2);

// --------------------------------------------------------------------------   
// Qs: Q 1: Create a function called calculateAverage that takes an array of numbers as a parameter and returns the average of those numbers.

function calculateAverage(numbers: number[]): number {
  if (numbers.length === 0) {
    return 0; // To handle the case when the array is empty
  }

  let sum: number = 0;

  for (let num of numbers) {
    sum += num; // Summing up all the numbers in the array
  }

  let average: number = sum / numbers.length; // Calculating the average
  return average;
}

// Example usage
let numbersArray = [10, 20, 30, 40, 50];
console.log(calculateAverage(numbersArray)); // Output: 30

// --------------------------------------------------------------------------   

// Q 2: Write a function called findMaxValue that takes an array of numbers as a parameter and returns the maximum value in the array.

