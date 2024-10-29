"use strict";
// Using slice method to create a new array with elements from index 1 to 2 (exclusive)
let fruits = ["Banana", "Orange", "Kiwi"];
let slicedFruits = fruits.slice(1, 1);
console.log(slicedFruits);
let biryaniPlaces = ["farhan", "rehman", "sabir", "rajput", "nasir"];
// let favouriteBiryani = biryaniPlaces.splice(1, 2, "ghosia", "allahrazi");
biryaniPlaces.splice(2, 0, "ghosia", "allahrazi");
console.log(biryaniPlaces);
// console.log(favouriteBiryani);
// OBJECT:
let menu = {
    Drink: "pepsi",
    starter: "fish",
    mainCourse: "biryani",
    sweetdish: "custard"
};
// ENUMS:
// Three types of Enums:
// 1) Numeric
// 2) String
// 3) Heterogenous
// enums allows you to define a set of named constant / constant values.
var realmenu;
(function (realmenu) {
    realmenu[realmenu["Drink"] = 0] = "Drink";
    realmenu[realmenu["starter"] = 1] = "starter";
    realmenu[realmenu["mainCourse"] = 2] = "mainCourse";
    realmenu[realmenu["sweetdish"] = 3] = "sweetdish";
})(realmenu || (realmenu = {}));
console.log(realmenu);
// 1) Numeric Enum:
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 5] = "Down";
    Direction[Direction["Right"] = 9] = "Right";
    Direction[Direction["Left"] = 10] = "Left";
})(Direction || (Direction = {}));
console.log(Direction);
console.log(Direction.Up);
console.log(Direction.Down);
console.log(Direction.Right);
console.log(Direction.Left);
// 2) String Enum:
var DIRECTION1;
(function (DIRECTION1) {
    DIRECTION1["UP"] = "Up";
    DIRECTION1["DOWN"] = "123";
    DIRECTION1["RIGHT"] = "Karachi";
    DIRECTION1["LEFT"] = "India";
})(DIRECTION1 || (DIRECTION1 = {}));
console.log(DIRECTION1);
console.log(DIRECTION1.Up);
console.log(DIRECTION1.Down);
console.log(DIRECTION1.Right);
console.log(DIRECTION1.Left);
// 3) Heterogenous Enum:
var DIRECTION2;
(function (DIRECTION2) {
    DIRECTION2["UP"] = "Up";
    DIRECTION2[DIRECTION2["DOWN"] = 2] = "DOWN";
    DIRECTION2[DIRECTION2["RIGHT"] = 3] = "RIGHT";
    DIRECTION2["LEFT"] = "India";
    DIRECTION2[DIRECTION2["CENTER"] = void 0] = "CENTER";
})(DIRECTION2 || (DIRECTION2 = {}));
console.log(DIRECTION2.RIGHT);
// STRING LITERALS:-
// Four types of string literals:
// 1) Literal type
// 2) String type
// 3) Number type
// 4) Boolean type
// 1) Literal type
let habbit;
habbit = "cricket";
habbit = "football";
let TrafficLights;
let phase4SignalNo4 = "YELLOW";
// let phase3SignalNo3: worldTrafficLights = "GREEN";
console.log(phase4SignalNo4);
// UNKNOWN TYPE:-
let Uname = "aisha";
Uname = false;
Uname = 56;
let things = true;
if (typeof Uname == "string") {
    console.log(Uname.toUpperCase());
}
else {
    console.log(Uname.toLowerCase());
}
// TYPE CASTING:-
let myName = "ABC";
let updatedType = myName;
console.log(typeof updatedType);
// TS to JS --> Transpilation
// / development time  error, complie error, runtime error
// Assignment:
// how to check object data type?
// how to check function data type?
