"use strict";
// OPERATORS:-
// 1) Arithmetic Operators:
let a = 5;
let b = 2;
console.log("a =", a, "& b =", b);
console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a x b =", a * b);
console.log("a / b =", a / b);
console.log("a % b =", a % b);
console.log("a ** b =", a ** b); // Exponentiation
// *Addition:-
let number1 = 10;
let number2 = 6;
console.log(number1 + number2);
// ---------------------------------------
// *Subtraction:-
let number1 = 10;
let number2 = 6;
console.log(number1 - number2);
// ---------------------------------------
// *Multiplication:-
let number1 = 10;
let number2 = 6;
console.log(number1 * number2);
// ---------------------------------------
// *Division:-
let number1 = 10;
let number2 = 2;
console.log(number1 / number2);
// ---------------------------------------
// *Exponentiation:-
let number1 = 10;
let number2 = 2;
console.log(number1 ** number2);
// ---------------------------------------
// *Modulus / Remainder:-
let number1 = 10;
let number2 = 2;
console.log(number1 % number2);
// -------------------------------------------------------
//// 2)ASSIGNNET OPERATOR:
let a = 5;
let b = 2;
a += 4; // a = a + 4
a -= 4;
a *= 4;
a /= 4;
a %= 4;
a **= 4; // a = a**4
console.log("a =", a);
// -------------------------------------------------------
//// 3)COMPARISON OPERATOR:
let a = 5;
let b = "3";
console.log("a =", a, "& b =", b);
// console.log("5 == 5", a == b);
// console.log("5 === '5'", a === b); // Strict version --> also check data type.
console.log("5 > 3", a > b);
// console.log("a != b", a != b);
// -------------------------------------------------------
//// 4)Logical OPERATOR:
let a = 6;
let b = 5;
let cond1 = a > b; // true
let cond2 = a === 6; // false
console.log("6 > 5 && a === 6", cond1 && cond2);
console.log("6 > 5 || a === 5", a > b || a === 5);
console.log("!(6 > 5) =", !(a > b));
//// It is used to combine multiple condition in one.
//// || sign of union
//// && --> if both statements are true then output will be True.
//// || --> if anyone statements are true then output will be True.
let l = 5;
let n = 2;
console.log(l >= 5 && l < 5);
console.log(l >= 5 || l < n);
// ---------------------------------------------------------------------------
// UNARY OPERATORS:(work on 1 operands)
let a = 5;
let b = 2;
console.log("a =", a, "& b =", b);
// console.log(++a); // pre-increment
console.log(a++); // post-increment
console.log(a);
// ---------------------------------------------------------------------------
// TERNARY OPERATORS: (work on 3 operands)
let age = 25;
age >= 18 ? console.log("adult") : console.log("not adult");
let result = age >= 18 ? "adult" : "not adult";
console.log(result);
// ----------------------------------------------------------------------------------------------------------
// PRACTICE QS:
// IF-ELSE STATEMENT:
let num = 36;
if (num % 5 === 0) {
    console.log(`${num} is a multiple of 5.`);
}
else {
    console.log(`${num} is NOT a multiple of 5.`);
}
// TERNARY OPERATOR:
let res = num % 5 === 0
    ? `${num} is a multiple of 5.`
    : `${num} is NOT a multiple of 5.`;
console.log(res);
let score = 63;
let grade;
if (score >= 80 && score <= 100) {
    grade = "A";
}
else if (score >= 70 && score <= 79) {
    grade = "B";
}
else if (score >= 60 && score <= 69) {
    grade = "C";
}
else if (score >= 50 && score <= 59) {
    grade = "D";
}
else {
    grade = "F";
}
console.log(grade);
