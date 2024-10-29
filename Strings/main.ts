// // STRINGS:-
let str = "01234567";
// console.log(str);
// console.log(str.length);

// // METHODS OF STRING:

// // 1)Slice:
let newStr = str.slice(1, 3);
console.log(newStr);
console.log(str);

// // 2)Concat:
// let str1 = "Apna";
// let str2 = "College";
// let res = str1.concat(str2);
// let res2 = "Apna" + " College";
// console.log(res2);

// // 3) Replace:
// let str3 = "HelloHHHHH";
// console.log(str3.replace("H", "M"));

// // 4) CharAt:
// let str4 = "IloveJS";
// str4[0];
// console.log(str4);
// console.log(str4.charAt(0));

// // 5) Substring:
let longText: string = "TypeScript is a powerful typed superset of JavaScript.";

// let shortText: string = longText.slice(0, 10);

// let shortText: string = longText.substring(0, 10);
let shortText: string = longText.substring(10, 0);

console.log(shortText); // Output: TypeScript

// // ---------------------------------------------------------------------------------
// // Practice Qs :-

// let userName = "Abdullah";
// let add = "@";
// let lenCount = userName.length;

// let fullName = add + userName + lenCount;
// console.log(fullName);

// // or

// let fullName1 = "Abdullah";
// let userName2 = "@" + fullName1 + fullName1.length;
// console.log(userName2);
// // ----------------------------------------------------------------------------------

// // Single Line Comment.

// /* This is a
// multi line comment */
