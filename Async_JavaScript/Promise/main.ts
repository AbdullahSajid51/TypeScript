// // promises is used to solve the problem of callback hell. It is a Solution of callback hell. It is an Object in JS.
// // PROMISE:
// const getPromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("I Am a Promise.");
//     // resolve("success");
//     reject("error");
//   });
// };

// let promise = getPromise();
// promise.then((res) => {
//   // res -> Parameter
//   console.log("Promise fulfilled,", res);
// });
// promise.catch((err) => {
//   // err -> Parameter
//   console.log("Rejected,", err);
// });

// function getData(dataId: any, getNextData: any) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("data", dataId);
//         resolve("Success");
//       reject("error");
//       if (getNextData) {
//         getNextData();
//       }
//     }, 5000); // 2 seconds delay
//   });
// }
// // -----------------------------------------------------------------------------------

// // PROMISE CHAIN:-
// function asyncFunction1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data1");
//       resolve("Success");
//     }, 4000);
//   });
// }

// function asyncFunction2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data2");
//       resolve("Success");
//     }, 4000);
//   });
// }

// // This Code Prints data1 first and then data2.
// console.log("Fetching data1....");
// let p1 = asyncFunction1();
// p1.then((res) => {
//   console.log("Fetching data2....");
//   let p2 = asyncFunction2();
//   p2.then((res) => {});
// });
// OR
// console.log("Fetching data1....");
// asyncFunction1().then((res) => {
//   console.log("Fetching data2....");
//   asyncFunction2().then((res) => {});
// });

// console.log("Fetching data2....");
// let p2 = asyncFunction2();
// p2.then((res) => {
//   console.log(res);
// });
// // -----------------------------------------------------------------------------------------

// function getData(dataId: any, getNextData: any) {
//   // Simulate an asynchronous operation with a timeout
//   setTimeout(() => {
//     console.log("data", dataId);
//     if (getNextData) {
//       getNextData();
//     }
//   }, 2000); // 2 seconds delay
// }

// // Callback Hell:-
// // Start the sequence of asynchronous operations
// getData(1, () => {
//   console.log("getting data2 ....");
//   getData(2, () => {
//     console.log("getting data3 ....");
//     getData(3, () => {
//       console.log("getting data4 ....");
//       getData(4);
//     });
//   });
// });

// // Doing the above code by promise function to solve callback hell:
// function getData(dataId: any) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//       resolve("Success");
//     }, 2000); // 4 seconds delay
//   });
// }

// // Promise Chain:
// console.log("Fetching data1....");
// getData(1)
//   .then((res) => {
//     console.log("Fetching data2....");
//     return getData(2);
//   })
//   .then((res) => {
//     console.log("Fetching data3....");
//     return getData(3);
//   })
//   .then((res) => {
//     console.log(res);
//   });
// // --------------------------------------------------------------------------------------------------------

// // 2nd Example (from Shanzay):-
let myPromise = new Promise((resolve, reject) => {
  console.log("Promise Pending");
  setTimeout(() => {
    // console.log("Promise Resolved");
    // resolve(["Ali", "Musa", "Hassan"]);
    console.log("Promise Rejecred");
    reject(new Error("Data fetch failed."));
  }, 2000);
});
myPromise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    // console.log("Something Went Wrong.");
    console.log(err);
  });
