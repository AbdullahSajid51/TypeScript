"use strict";
// ENUMS:-
// Syntax: enum name {}
// ENUM:-
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {})); //starts with 0
var c = Color.Green;
console.log(c);
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 1] = "Red";
    Color1[Color1["Green"] = 2] = "Green";
    Color1[Color1["Blue"] = 3] = "Blue";
})(Color1 || (Color1 = {}));
var colorName = Color1[2];
console.log(colorName);
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 100] = "Red";
    Color2[Color2["Green"] = 100] = "Green";
    Color2[Color2["Blue"] = 4] = "Blue";
})(Color2 || (Color2 = {})); //can assign values to all
var colorIndex = Color2["Blue"];
console.log(colorIndex);
var c = Color.Green;
var colorIndex = Color2["Blue"];
console.log(colorIndex);
// -------------------------------------
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
// -----------------------------------------------------------
// // Example:
var color;
(function (color) {
    color[color["Red"] = 1] = "Red";
    color[color["Green"] = 2] = "Green";
    color[color["Blue"] = 3] = "Blue";
})(color || (color = {}));
// var colorName: string = color[2]; // for value
var colorName = color.Green; // for index
console.log(colorName);
// ------------------------------------------------
var Day;
(function (Day) {
    Day[Day["Sunday"] = 0] = "Sunday";
    Day[Day["Monday"] = 1] = "Monday";
    Day[Day["Tuesday"] = 2] = "Tuesday";
    Day[Day["Wednesday"] = 3] = "Wednesday";
    Day[Day["Thursday"] = 4] = "Thursday";
    Day[Day["Friday"] = 5] = "Friday";
    Day[Day["Saturday"] = 6] = "Saturday";
})(Day || (Day = {}));
function getDayName(day) {
    switch (day) {
        case Day.Sunday:
            return "Sunday";
        case Day.Monday:
            return "Monday";
        case Day.Tuesday:
            return "Tuesday";
        case Day.Wednesday:
            return "Wednesday";
        case Day.Thursday:
            return "Thursday";
        case Day.Friday:
            return "Friday";
        case Day.Saturday:
            return "Saturday";
        default:
            return "Unknown";
    }
}
let today = Day.Wednesday;
console.log(getDayName(today)); // Output: Wednesday
//--------------------------------------------------------
