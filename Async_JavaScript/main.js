"use strict";
// synchronous JavaScript
// asynchronous JavaScript
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Macro Task
// Micro Task
// Call Back Hell
// function greeting() {
//   setTimeout(() => {
//     console.log("Hello World");
//   }, 2000);
// }
// function printName() {
//   setTimeout(() => {
//     console.log("Ali");
//   }, 1000);
// }
// greeting();
// function greeting(cb: any) {
//   setTimeout(() => {
//     console.log("Hello World");
//     cb();
//   }, 2000);
// }
// function printName() {
//   setTimeout(() => {
//     console.log("Ali");
//   }, 1000); // 1000 milisecond or  1sec
// }
// greeting(printName);
// TOPICS:
// Promise
// Pending
// Fulfilled
// Rejected
function makeBiryani() {
    return new Promise((resolve, reject) => {
        const isReady = true; // Assuming biryani is ready in this case
        if (isReady) {
            setTimeout(() => {
                resolve("Yes, I will cook biryani");
            }, 2000);
        }
        else {
            reject("No, I will not cook biryani");
        }
    });
}
makeBiryani()
    .then((result) => {
    console.log(result);
    console.log("You all are invited.");
})
    .catch((err) => {
    console.log(err);
});
//   console.log("Hello world");
// async await:
function biryaniKidawat() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield makeBiryani();
            console.log("You all are Invited");
            console.log(result);
        }
        catch (error) {
            console.log(error);
        }
        finally {
            console.log("It's Final");
        }
    });
}
biryaniKidawat();
console.log("Hello World");
Promise.resolve(console.log("Promise Console"));
console.log("First Console");
setTimeout(() => {
    console.log("First set time out");
}, 0);
Promise.resolve("Promise Console").then((value) => console.log(value)); // First Run
console.log("Second Console");
// Search:
// Macro task que
// Micro task que
