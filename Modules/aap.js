"use strict";
// IMPORT FILE:
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const main_js_1 = __importDefault(require("./main.js")); // import with default
console.log((0, main_js_1.default)(5, 10));
const main_js_2 = require("./main.js"); // import without default
main_js_2.userNames["0"] = "Hussain";
console.log(main_js_2.userNames);
// import { favcolor as color } from "./main.js";
console.log(main_js_2.favcolor);
const main_js_3 = require("./main.js");
main_js_3.obj.name = "Musa";
console.log(main_js_3.obj); // Dot Notation
// console.log(person["name"]); // Square Bracket Notation
// ----------------------------------------------------------
