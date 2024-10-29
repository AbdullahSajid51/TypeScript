"use strict";
// // // OBJECTS:-
const student = {
    fullName: "Musa Khan",
    age: 14,
    cgpa: 9.2,
    isPass: true,
};
student["fullName"] = "Abdullah Khan"; // Dot Notation
student.fullName = "Abdullah Khan"; // Square Bracket Notation
console.log(student.fullName); // Dot Notation
console.log(student["isPass"]); // Square Bracket Notation
// // // ----------------------------------------------
// // Anonymous Type:-  (Aik baar)
// // Key Features:
// // Defined inline where needed.
// // Useful for small, localized type definitions.
// // Not reusable as a named type.
const students = {
    stdId: 2000,
    stuName: "Musa Khan",
    fName: "Bilal Khan",
};
console.log(students);
const student1 = {
    stdId: 2000,
    stuName: "Musa Khan",
    fName: "Bilal Khan",
};
const student2 = {
    stdId: 2001,
    stuName: "Ahmed Ali",
    fName: "Kamran Ali",
};
console.log(student1);
console.log(student2);
let itCourse = {
    courseName: "TypeScript & JavaScrit",
    location: "Governor house Sindh",
    onSiteStudents: 50000,
};
console.log(itCourse);
let storeManager = {
    name: "Bilal",
};
const myDog = {
    name: "Buddy",
    breed: "Golden Retriever",
};
let collectionOfEmployee = [
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
let circle = { radius: 10 };
let disk = {
    radius: 15,
};
circle = disk; // This is valid because Circle and Disk are structurally identical
disk = circle; // This is valid because Circle and Disk are structurally identical
let cylinder = {
    radius: 12,
    height: 5,
};
// Structural typing demonstration
circle = cylinder; // ok
cylinder = circle; // Error
// Fresh object
const user1 = {
    name: "Alice",
    age: 30,
    // address: "123 Main St" // Error: Object literal may only specify known properties
};
const extraInfo = {
    name: "Bob",
    age: 25,
    address: "456 Main St"
};
// Stale object (extraInfo is assigned to another variable)
const user2 = extraInfo; // No error
// Fresh object
const person1 = { name: "John", age: 40 }; // OK
// Fresh object with an excess property
const person2 = { name: "Jane", age: 25, address: "123 Street" }; // Error
// Stale object
const additionalInfo = { name: "Mark", age: 30, address: "456 Avenue" };
const person3 = additionalInfo; // OK, no error
const myBook = {
    author: {
        firstName: "Zia",
        lastName: "Khan"
    },
    name: "My Best Book"
};
let personobj = {
    name: "Musa",
    age: 20,
    email: "aspakistani@gmail.com",
    status: "Manager",
    salary: 5653578952,
};
let obj1 = {
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
