// TYPE ANNOTATIONS:- (Explicitly/Specificly define a type of a variable)
// 1) NUMBER:-
let myFavNum: number = 10;
let myFullName: string = "Musa Khan";

let sum1 = myFavNum + 10;
console.log(sum1);

let myFavnum: number = 5;
let myAge: number = 22;
let pi: number = 3.147;
let myNegVal: number = -5;

let computedValue: number = Math.sqrt(25);
console.log(computedValue);

let nanValue: number = NaN;
console.log(nanValue);

let num = 5; // TS Automatically "infers" type of a variable.
num = "Musa"; // Thats why shows an error.
// ---------------------------------------------
// 2) STRING:-

let myFullName: string = "Musa Bilal Khan";
let myFirstName: string = "Musa";
let myLastName: string = "Bilal Khan";

myFullName = myFirstName + " " + myLastName;
console.log(myFullName);

let sentence: string = "hello how are you!";
let sentenceLenght: number = sentence.length;
console.log(sentenceLenght);
// ---------------------------------------------
// 3) BigInt
let bigNum: bigint = 90071992547409960n;
console.log(bigNum);
// ---------------------------------------------
// 4) ANY:-
let favNum = 5;
favNum = "Musa"; // Shows error

let favNum2: any = 5;
favNum2 = "Musa";
favNum2 = true;
// ---------------------------------------------
// 5) UNKNOWN:- (Type Checking and type safety in unknown)
let num1: unknown;
num1 = 5;
num1 = "Musa";
num1 = true;
if (typeof num1 === "number") {
  console.log(num1 + 5);
}

// ---------------------------------------------
let num2: any;
num2 = 5;
num2 = "musa";
num2 = true;

if (typeof num2 === "number") {
  console.log(num2 + 5);
} else if (typeof num2 === "boolean") {
  console.log(num2);
}

// ---------------------------------------------
// // Homework:-

// todo 👉  Substring:
// Declare a variable longText of type string and assign it a long sentence. Extract the first 10 characters from longText and store them in a variable called shortText.

let longText: string =
  "I am Musa And I Am 20 years old. I am a student of Governor IT Initiative.";
// let shortText: string = longText.slice(0, 10);
let shortText: string = longText.substring(0, 10);
console.log(shortText);
// ---------------------------------------------

//  todo 👉  String Comparison:
// Declare two variables str1 and str2 of type string and assign them different sentences. Compare the two strings and store the result (true or false) in a variable called areEqual.

let str1: string = "I Am Musa Khan";
// let str2: string = "I Am Musa Khan";
let str2: string = "I Am Abdullah Sajid";
let areEqual: boolean = str1 === str2;
console.log(areEqual);
// ---------------------------------------------

//  todo 👉  String Template:
// Declare variables product and price of type string and number, respectively. Create a string using template literals to display the product and its price in the format "The product {product} is priced at {price} dollars."
let product: string = "Pen";
let price: number = 60;
console.log(`The Product ${product} is priced at ${price} dollars.`);

// -------------------------------------------------------------------------------------------------------
