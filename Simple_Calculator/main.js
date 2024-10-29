"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
//  Asking Questions from Users through Inquirer.
let answers = await inquirer_1.default.prompt([
    { message: "Enter First Number:", type: "number", name: "firstNumber" },
    { message: "Enter Second Number:", type: "number", name: "secondNumber" },
    {
        message: "Select one Operator to perform Operations",
        type: "list",
        name: "Operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
// Conditional Satements IF-Else:
if (answers.Operator === "Addition") {
    console.log(answers.firstNumber + answers.secondNumber);
}
else if (answers.Operator === "Subtraction") {
    console.log(answers.firstNumber - answers.secondNumber);
}
else if (answers.Operator === "Multiplication") {
    console.log(answers.firstNumber * answers.secondNumber);
}
else if (answers.Operator === "Division") {
    console.log(answers.firstNumber / answers.secondNumber);
}
else
    console.log("Invalid Input.");
