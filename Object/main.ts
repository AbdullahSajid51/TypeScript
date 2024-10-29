// // // OBJECTS:-

const student = {
  fullName: "Musa Khan",
  age: 14,
  cgpa: 9.2,
  isPass: true,
};
student["fullName"] = "Abdullah Khan"; // Square Bracket Notation
student.fullName = "Abdullah Khan"; // Dot Notation

console.log(student.fullName); // Dot Notation
console.log(student["isPass"]); // Square Bracket Notation
// // // ----------------------------------------------

// // Anonymous Type:-  (Aik baar)
// // Key Features:
// // Defined inline where needed.
// // Useful for small, localized type definitions.
// // Not reusable as a named type.

const students: {
  stdId: number;
  stuName: string;
  fName: string;
} = {
  stdId: 2000,
  stuName: "Musa Khan",
  fName: "Bilal Khan",
};
console.log(students);
// // // ----------------------------------------------

// // // OBJECT ALIASED:-
// // // type AliasName = ExistingType;

type StudentType = {
  stdId: number;
  stuName: string;
  fName: string;
  studentClass?: string; // optional
};

const student1: StudentType = {
  stdId: 2000,
  stuName: "Musa Khan",
  fName: "Bilal Khan",
};

const student2: StudentType = {
  stdId: 2001,
  stuName: "Ahmed Ali",
  fName: "Kamran Ali",
  studentClass: "10",
};

console.log(student1);
console.log(student2);
// // // ----------------------------------------------
//! Calculate Total Price:
// Qs. Write a function called calculateTotalPrice that calculates and returns the total price (price * quantity) of the product.

type Product = {
  name: string;
  price: number;
  quantity: number;
};
const product: Product = {
  name: "Laptop",
  price: 1000,
  quantity: 5,
};

function calculateTotalPrice(product: Product) {
  const totalPrice = product.price * product.quantity;
  return totalPrice;
}
console.log(calculateTotalPrice(product));
// // // ----------------------------------------------
// // type: Can be extended using intersections.

// type ExtendedStudent = StudentType & { grade: string };

// // // ----------------------------------------------

// // // INTERFACE:-
// // It looks like you're trying to define an interface but used the wrong syntax. In TypeScript, the correct way to define an interface is using the interface keyword without the = sign. Here’s the corrected version of your code:

// // Correct way to define an interface in TypeScript
interface StudentType {
  stdId: number;
  stuName: string;
  fName: string;
}

const student1: StudentType = {
  stdId: 2000,
  stuName: "Musa Khan",
  fName: "Bilal Khan",
};

const student2: StudentType = {
  stdId: 2001,
  stuName: "Ahmed Ali",
  fName: "Kamran Ali",
};
console.log(student1);
console.log(student2);
// // // ----------------------------------------------

// // interface can extend other interfaces using the extends keyword.
interface ExtendedStudent extends StudentType {
  grade: string;
}

// // // ----------------------------------------------
interface itCourse {
  courseName: string;
  location?: string;
  onSiteStudents: number;
} 
let itCourse = {
  courseName: "TypeScript & JavaScrit",
  location: "Governor house Sindh",
  onSiteStudents: 50000,
};
console.log(itCourse);
// // // ----------------------------------------------
// Interfaces

interface Manager {
  name: string;
  subordiates?: number;
}

let storeManager: Manager = {
  name: "Bilal",
};

// // // ----------------------------------------------

interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

const myDog: Dog = {
  name: "Buddy",
  breed: "Golden Retriever",
};

// // // -------------------------------------------------------------------------------------

// // // Key Differences

// // // Reusability:

// // // Interface: Designed for reusability and extensibility, especially for object structures.
// // // Type Aliases: More versatile, can be reused for various type constructs (objects, unions, intersections, etc.).
// // // Anonymous Types: Not reusable, defined inline for specific usage.

// // // Extensibility:

// // // Interface: Can be extended using extends and can be merged.
// // // Type Aliases: Can use intersections for combining types but does not support declaration merging.
// // // Anonymous Types: Cannot be extended or reused.

// // // Declaration Merging:

// // // Interface: Supports declaration merging.
// // // Type Aliases: Does not support declaration merging.
// // // Anonymous Types: N/A.

// // // Complex Types:

// // // Interface: Specifically for object types.
// // // Type Aliases: Can define complex types including primitives, tuples, unions, intersections.
// // // Anonymous Types: Limited to the specific inline definition.

// // // When to Use Which?

// // // Interface: Use when defining the shape of an object that might need to be extended or implemented.

// // // Type Aliases: Use for defining various types, including complex ones like unions and intersections.

// // // Anonymous Types: Use for quick, one-off type definitions that do not need reusability.

// // // -------------------------------------------------------------------------------------

// // // ARRAY OF OBJECT:-
interface Employee {
  employeeId: number;
  employeeName: string;
  salary: number;
}

let collectionOfEmployee: Employee[] = [
  {
    employeeId: 7625,
    employeeName: "Musa Khan",
    salary: 50000,
  },
  {
    employeeId: 7626,
    employeeName: "Abdullah Khan",
    salary: 100000,
  },
];

console.log(collectionOfEmployee);
// // // -------------------------------------------------------------------------------------

// // // STRUCTURAL TYPING (also known as duck typing) :-

interface Circle {
  radius: number;
}

interface Disk {
  radius: number;
}

let circle: Circle = { radius: 10 };

let disk: Disk = {
  radius: 15,
};

circle = disk; // This is valid because Circle and Disk are structurally identical
disk = circle; // This is valid because Circle and Disk are structurally identical
// -------------------------------
// These two interfaces are completely
// transferrable in a structural type system:

// interface Ball {
//   diameter: number;
// }

// interface Sphere {
//   diameter: number;
// }

// let ball: Ball = { diameter: 10 };
// let sphere: Sphere = { diameter: 20 };

// sphere = ball;
// ball = sphere;
// -------------------------------

// // Key Points:
// // 1)Interfaces Circle and Disk:

// // Both interfaces have a single property radius of type number.
// // Structurally, they are identical.

// // 2)Structural Typing:

// // TypeScript uses structural typing (also known as duck typing).
// // In structural typing, two types are considered compatible if they have the same structure.

// // 3)Variable Assignment:

// // The variable circle is declared with the type Circle and assigned an object with a radius property of 10.
// // Even though circle is typed as Circle, it could be assigned an object of type Disk because both Circle and Disk have the same structure.

// // Summary:
// // In TypeScript, structural typing means that the shape of the data (i.e., the properties and their types) determines compatibility rather than the explicit name of the type. This allows for flexible and interoperable code, especially when working with objects that share the same structure.
// // // -------------------------------------------------------------------------------------

// // // ADDITIONAL PROPERTIES:-
interface Cylinder {
  radius: number;
  height: number;
}

let cylinder: Cylinder = {
  radius: 12,
  height: 5,
};

// Structural typing demonstration
circle = cylinder; // ok
cylinder = circle; // Error
// // // -------------------------------------------------------------------------------------

// // // FRESH OBJECT:-
// let myType = {
//   name: "zia",
//   id: 1,
// };
// myType = {
//   id: 2,
//   name: "Musa",
// };
// myType = {
//   id: 2,
//   name_person: "Musa", // error
// };
// myType = {
//   id: 2,
//   name: "Musa",
//   age: 25, // error
// };
// // // -------------------------------------------------------------------------------------
// // FRESH OBJECT:-
type User = {
  name: string;
  age: number;
};

// Fresh object
const user1: User = {
  name: "Alice",
  age: 30,
  // address: "123 Main St" // Error: Object literal may only specify known properties
};
//// In this example, user1 is a fresh object, and TypeScript checks that it only contains properties name and age. Adding an address property would cause a compile-time error because address is not defined in the User type.
// // // -------------------------------------------------------------------------------------

// // // STALE OBJECT:-
// myType = { id: 2, name: "Tom", age: 22 };

// //Case when STALE object literal are assigned to a variable

// let myType2 = { id: 2, name: "Tom" };

// //Case 1
// myType = myType2; //Case 1: can only assign a type which has the the same properties, rule same for fresh and stale object

// let myType3 = { id: 2, name_person: "Tom" };
// //Case 2a
// myType = myType3; //Case 2: Error, renamed or missing property, rule same for stale and fresh object
// // // -------------------------------------------------------------------------------------
type User = {
  name: string;
  age: number;
};

const extraInfo = {
  name: "Bob",
  age: 25,
  address: "456 Main St"
};

// Stale object (extraInfo is assigned to another variable)
const user2: User = extraInfo; // No error
//// In this example, extraInfo has an extra property address that is not in the User type. However, when extraInfo is assigned to user2, TypeScript does not perform excess property checks, and no error is thrown. This is because extraInfo is no longer a fresh object; it's a variable that might have been passed around, and TypeScript allows this flexibility.
// // // -------------------------------------------------------------------------------------
//// Here is a more detailed example illustrating the difference:

type Person = {
  name: string;
  age: number;
};

// Fresh object
const person1: Person = { name: "John", age: 40 }; // OK

// Fresh object with an excess property
const person2: Person = { name: "Jane", age: 25, address: "123 Street" }; // Error

// Stale object
const additionalInfo = { name: "Mark", age: 30, address: "456 Avenue" };
const person3: Person = additionalInfo; // OK, no error

// // // -------------------------------------------------------------------------------------

// // NESTED OBJECT:-
// const student = {
//   name: "Ali",
//   stuId: "JS24056",
//   fName: "Raza",
//   age: 30,
//   Qualification: {
//     grade: "10th",
//     result: "A-1",
//   },
// };
// // console.log(student);
// // console.log(student.Qualification);
// console.log(student.Qualification.result);
// console.log(student["Qualification"]["grade"]);
// // // -------------------------------------------------------------------------------------
type Author = {
  firstName: string;
  lastName: string;
};

type Book = {
  author: Author;
  name: string;
};

const myBook : Book = {
  author: {
      firstName: "Zia",
      lastName: "Khan"
  },
  name: "My Best Book"

}
// // // -------------------------------------------------------------------------------------

// // INTERSECTION TYPES:-
type personalDetail = {
  name: string;
  age: number;
};

type officialDetail = {
  email: string;
  status: string;
  salary: number;
};

// // syntax:
type Person = personalDetail & officialDetail;

let personobj: Person = {
  name: "Musa",
  age: 20,
  email: "aspakistani@gmail.com",
  status: "Manager",
  salary: 5653578952,
};
// // // -------------------------------------------------------------------------------------
interface Student {
  student_id: number;
  name: string;
}
  
interface Teacher {
  teacher_Id: number;
  teacher_name: string;
}
  
type intersected_type = Student & Teacher;
  
let obj1: intersected_type = {
  student_id: 3232,
  name: "rita",
  teacher_Id: 7873,
  teacher_name: "seema",
};
  
console.log(obj1.teacher_Id);
console.log(obj1.name);
// // // -------------------------------------------------------------------------------------

// // Summary of Differences:

// // Intersection Type (&): Requires objects to have all properties from all intersected types simultaneously.
// // Union Type (|): Allows objects to have properties from one type or another, but not necessarily both.

// // In practical terms:

// // Use intersection types (&) when you need objects that have all combined properties (e.g., combining personal and official details into a single object).
// // Use union types (|) when an object can take on different forms with varying sets of properties (e.g., handling objects that can be either personal details or official details, but not both at the same time).
