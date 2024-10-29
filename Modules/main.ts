// EXPORT FILE:

export default add; //kisi bhi important cheeze k sath default use karsakte hai. Aik file main kisi Aik cheez ko Default karte hain.

function add(num1: number, num2: number) {
  return num1 + num2;
}

let userNames: string[] = ["Musa", "Bilal", "Ali"];
userNames.push("Abdullah");
let favcolor: string = "red";

export { userNames, favcolor }; // export both variables in one line.

export let obj = {
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
