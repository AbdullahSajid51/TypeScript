"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Async-Await:-   (Async-await >> Promise chain >> callback hell)
function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("Success");
        }, 2000);
    });
}
// Doing the above code by Async-Await function:
function getAllData() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Fetching data1....");
        yield getData(1);
        console.log("Fetching data2....");
        yield getData(2);
        console.log("Fetching data3....");
        yield getData(3);
        console.log("Fetching data4....");
        yield getData(4);
    });
}
getAllData();
// OR
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Fetching data1....");
        yield getData(1);
        console.log("Fetching data2....");
        yield getData(2);
        console.log("Fetching data3....");
        yield getData(3);
        console.log("Fetching data4....");
        yield getData(4);
    });
})();
// ------------------------------------------------------------------------------
// Promise Chain:
console.log("Fetching data1....");
getData(1)
    .then((res) => {
    console.log("Fetching data2....");
    return getData(2);
})
    .then((res) => {
    console.log("Fetching data3....");
    return getData(3);
})
    .then((res) => {
    console.log(res);
});
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------
// Callback Hell:-
// Start the sequence of asynchronous operations
// getData(1, () => {
//     console.log("getting data2 ....");
//     getData(2, () => {
//       console.log("getting data3 ....");
//       getData(3, () => {
//         console.log("getting data4 ....");
//         getData(4);
//       });
//     });
//   });
// ----------------------------------------------------------------------
