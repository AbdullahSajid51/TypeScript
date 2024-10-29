"use strict";
// EXPORT FILE:
Object.defineProperty(exports, "__esModule", { value: true });
exports.obj = exports.favcolor = exports.userNames = void 0;
exports.default = add; //kisi bhi important cheeze k sath default use karsakte hai. Aik file main kisi Aik cheez ko Default karte hain.
function add(num1, num2) {
    return num1 + num2;
}
let userNames = ["Musa", "Bilal", "Ali"];
exports.userNames = userNames;
userNames.push("Abdullah");
let favcolor = "red";
exports.favcolor = favcolor;
exports.obj = {
    name: "Ali",
    age: 2,
    gender: "Male",
};
// -----------------------------
// import inquirer from "inquirer";
// import chalk from "chalk";
// const answer = await inquirer.prompt({
//   name: "name",
//   type: "input",
//   message: chalk.red("What is your name?"),
// });
// console.log(`Hello, ${answer.name}!`);
// // ----------------------------------------------------------
// import chalk from "chalk";
// console.log(chalk.blue("Hello world!"));
// console.log(chalk.red.bold("Error! Something went wrong."));
// console.log(chalk.green.underline("Success! Operation completed."));
// console.log(chalk.yellow("Warning! Check your input."));
// console.log(chalk.cyan("This is cyan text"));
