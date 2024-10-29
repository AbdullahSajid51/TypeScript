// ENUMS:-

// Syntax: enum name {}
// ENUM:-
enum Color {
  Red,
  Green,
  Blue,
} //starts with 0
var c: Color = Color.Green;
console.log(c);

enum Color1 {
  Red = 1,
  Green,
  Blue,
}
var colorName: string = Color1[2];
console.log(colorName);

enum Color2 {
  Red = 100,
  Green = 100,
  Blue = 4,
} //can assign values to all
var colorIndex = Color2["Blue"];
console.log(colorIndex);
// -------------------------------------
// CONST ENUM:-

const enum Color {
  Red,
  Green,
  Blue,
} //starts with 0
var c: Color = Color.Green;

const enum Color1 {
  Red = 1,
  Green,
  Blue,
}
// var colorName: string = Color[2]; //Not allowed with const enums
// console.log(colorName);

const enum Color2 {
  Red = 1,
  Green = 2,
  Blue = 4,
} //can assign values to all
var colorIndex = Color2["Blue"];
console.log(colorIndex);
// -------------------------------------

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
  Down = 5,
  Right = 9,
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
// -----------------------------------------------------------

// // Example:
enum color {
  Red = 1,
  Green,
  Blue,
}
// var colorName: string = color[2]; // for value
var colorName: number = color.Green; // for index
console.log(colorName);

// ------------------------------------------------
enum Day {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

function getDayName(day: Day): string {
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

let today: Day = Day.Wednesday;
console.log(getDayName(today)); // Output: Wednesday
//--------------------------------------------------------

// Use of Enums with example:
enum Roles {
  user = "User",
  admin = "Admin",
}

type LoginDetails = {
  name?: string;
  email: string;
  password: string;
  role: Roles;
};

const user1: LoginDetails = {
  name: "Musa",
  email: "Musa512gmail.com",
  password: "qwer",
  role: Roles.admin,
};

const user2: LoginDetails = {
  email: "As51@gmail.com",
  password: "happ134",
  role: Roles.user,
};

const isAdmin = (user: LoginDetails): string => {
  const { name, email, role } = user;
  return role === "Admin"
    ? `${name} is allowed to edit the website.`
    : `${email} is NOT allowed to edit the website.`;
};

console.log(isAdmin(user1));
console.log(isAdmin(user2));

//--------------------------------------------------------
