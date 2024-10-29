// Using slice method to create a new array with elements from index 1 to 2 (exclusive)

let fruits: string[] = ["Banana", "Orange", "Kiwi"];
let slicedFruits = fruits.slice(1, 1);

console.log(slicedFruits);

let biryaniPlaces = ["farhan", "rehman", "sabir", "rajput", "nasir"];

// let favouriteBiryani = biryaniPlaces.splice(1, 2, "ghosia", "allahrazi");
biryaniPlaces.splice(2, 0, "ghosia", "allahrazi");
console.log(biryaniPlaces);
// console.log(favouriteBiryani);

// OBJECT:
let menu = {
Drink:"pepsi",
starter:"fish",
mainCourse:"biryani",
sweetdish:"custard"
}

// ENUMS:
// Three types of Enums:
// 1) Numeric
// 2) String
// 3) Heterogenous
// enums allows you to define a set of named constant / constant values.
enum realmenu {
  Drink,
  starter,
  mainCourse,
  sweetdish,
}
console.log(realmenu);

// 1) Numeric Enum:
enum Direction {
  Up,
  Down=5,
  Right=9,
  Left,
}
console.log(Direction);
console.log(Direction.Up);
console.log(Direction.Down);
console.log(Direction.Right);
console.log(Direction.Left);

// 2) String Enum:
enum DIRECTION1 {
  UP = "Up",
  DOWN = "123",
  RIGHT = "Karachi",
  LEFT = "India",
}
console.log(DIRECTION1);
console.log(DIRECTION1.Up);
console.log(DIRECTION1.Down);
console.log(DIRECTION1.Right);
console.log(DIRECTION1.Left);

// 3) Heterogenous Enum:
enum DIRECTION2 {
  UP = "Up",
  DOWN = 2,
  RIGHT,
  LEFT = "India",
  CENTER,
}
console.log(DIRECTION2.RIGHT);

// STRING LITERALS:-
// Four types of string literals:
// 1) Literal type
// 2) String type
// 3) Number type
// 4) Boolean type

// 1) Literal type
let habbit: "cricket";
habbit = "cricket";
habbit = "football";

// TYPE ALIAS:-
// Reuseability
type TrafficLights = "YELLOW" | "RED";
type shingponCountry = "RED";
type worldTrafficLights = TrafficLights & shingponCountry;

let TrafficLights: TrafficLights;
let phase4SignalNo4: worldTrafficLights = "YELLOW";
// let phase3SignalNo3: worldTrafficLights = "GREEN";
console.log(phase4SignalNo4);

// UNKNOWN TYPE:-
let Uname: unknown = "aisha";
Uname = false
Uname = 56

let things: any = true;

if(typeof Uname == "string") {
    console.log(Uname.toUpperCase())
} else {
    console.log(Uname.toLowerCase())
}

// TYPE CASTING:-
let myName: unknown = "ABC";
let updatedType = myName as string;
console.log(typeof updatedType);

// TS to JS --> Transpilation
// / development time  error, complie error, runtime error

// Assignment:
// how to check object data type?
// how to check function data type?
