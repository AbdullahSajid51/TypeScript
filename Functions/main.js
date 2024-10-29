"use strict";
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
function sum(x, y) {
    return x + y;
}
let val = sum(3, 4);
console.log(val);
// ----------------------------------------------------------
// Sum Function:
function sum(x, y) {
    return x + y;
}
// Arrow Function:
const arrowSum = (x, y) => {
    console.log(x + y);
};
arrowSum(5, 6);
// Multiplication Function:
function mul(x, y) {
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
function ali(yougurt = "Hello Ali Dahi le ao.") {
    console.log(yougurt);
    console.log("Hello Ali Dahi le ao.");
}
// Caliing the Function:
ali();
ali();
function hi(variable) {
    console.log(variable);
}
hi("Hello Everyone!");
function arrow(n = 5786) {
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
or;
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
// ARROW / LAMDA FUNCTION:-
let myFunc = (hi, hello) => console.log(hi, hello);
console.log(myFunc(8, 9));
let arrowFunc = (a) => console.log(a);
arrowFunc(5786);
let arrowFunc = (a) => {
    console.log(a);
};
arrowFunc(5786);
//--------------------------------------------------
// RETURN STATEMENT:-
function checking(a, b) {
    //   console.log(a + b);
    //   a + b;
    return a + b;
}
console.log(checking(2, 2));
let arrowfunc = (a, b) => {
    return console.log(a + b);
    //   console.log(a, b);
};
arrowfunc(5, 6);
// tsc -w --> for  automatic conversion.
// ---------------------------------------------------------
// Practice Qs:
// 1) Count Vowels:-
function countVowels(str) {
    let count = 0;
    for (let char of str) {
        if (char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u") {
            count++;
        }
    }
    console.log(count);
}
countVowels("apnacOllege");
// 2) Doing the same thing by Arrow Function:-
let countVowel = (str) => {
    let count = 0;
    for (let char of str.toLowerCase()) {
        if (char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u")
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
// ----------------------------------------------------------------------
// Sir Zia Repo
// Functions:-
// Note: All parameters are required
// Named function
function add(x, y) {
    return x + y;
}
//Anonymous function
let myAdd1 = function (x, y) {
    return x + y;
};
//Anonymous function with explict type
let myAdd2 = function (x, y) {
    return x + y;
};
console.log(myAdd2(5, 8));
//type names dont matter
let myAdd3 = function (x, y) {
    return x + y;
};
console.log(myAdd3(5, 5));
//Lambda functions / Arrow Function:-
let myAdd4 = (a, b) => a + b;
//output will be: var myAdd4 = function(a : number, b : number) {return a + b};
console.log(myAdd4(5, 5));
function greeter(fn) {
    //....
}
// --------------------------------------------------------------------------
// Named function with optional parameters
function buildName(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
console.log(buildName("Musa", "Khan"));
let result1 = buildName("Bob"); //ok
let result2 = buildName("Bob", "Adams", "Sr."); //error, too many parameters
var result3 = buildName("Bob", "Adams"); //also ok
//anonymous function type with optional parameters
var buildName1 = function (firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
};
// --------------------------------------------------------------------------
// Named function with optional and default parameters
// (Note that the parameter type will be optional when used with default value)
function buildName(firstName, lastName = "Khan") {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
// console.log(buildName("Musa", "Butt"));
let result1 = buildName("Bob"); //works correctly because last parameter is optional
let result2 = buildName("Bob", "Adams", "Sr."); //error, too many parameters
let result3 = buildName("Bob", "Adams"); //correct
anonymous;
function type() { }
with (defult)
    parameters(Note, that, the, parameter, type, will, be, optional, when, used);
with (defult)
    value;
let buildName1 = function (firstName, lastName = "Khan") {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
};
console.log(buildName1("Hamza", "Karim"));
// --------------------------------------------------------------------------
// Function Rest Parameter:-
function buildName(firstName, ...restOfName) {
    //Named function with Rest parameters
    return firstName + " " + restOfName.join(" ");
}
var employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log(employeeName);
//anonymous function type with Rest parameters
var buildNameFun = function (firstName, ...restOfName) {
    return firstName + " " + restOfName.join(" ");
};
console.log(buildNameFun("Khan", "Zia", "U"));
function sum(a, b) {
    return a + b;
}
console.log(sum(5, 6));
console.log(sum("hello", "Ali"));
//this is not part of the overload list, 
//so it has only three overloads
function add(arg1, arg2) {
    return arg1 + arg2;
}
//Calling 'add' with any other parameter types would cause an error except for the three options
console.log(add(1, 2));
console.log(add("Hello", "World"));
console.log(add(true, false));
