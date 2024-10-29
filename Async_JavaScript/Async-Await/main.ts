// Async-Await:-   (Async-await >> Promise chain >> callback hell)
function getData(dataId: any) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("Success");
    }, 2000);
  });
}

// Doing the above code by Async-Await function:
async function getAllData() {
  console.log("Fetching data1....");
  await getData(1);
  console.log("Fetching data2....");
  await getData(2);
  console.log("Fetching data3....");
  await getData(3);
  console.log("Fetching data4....");
  await getData(4);
}
getAllData();

// OR

(async function () {
  console.log("Fetching data1....");
  await getData(1);
  console.log("Fetching data2....");
  await getData(2);
  console.log("Fetching data3....");
  await getData(3);
  console.log("Fetching data4....");
  await getData(4);
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
