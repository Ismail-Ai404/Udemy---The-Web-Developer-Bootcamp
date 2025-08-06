/** @format */
// This file is part of the "JavaScript Basics" course.
// It contains basic JavaScript concepts and examples.
// Variables
let name = "John";
let age = 30;
let isStudent = true;
console.log("Welcome to JavaScript Basics!");
// Data types
let number = 42; // Number
let string = "Hello, World!"; // String
let isActive = false; // Boolean
let userDetails = { name: "Alice", age: 25 }; // Object
let hobbies = ["reading", "gaming", "coding"]; // Array
let nothing = null; // Null
// let symbol = Symbol("description");
// let bigint = Math.pow(2, 53) + 1n; // BigInt
// console.log(typeof bigint); // BigInt
// Constants
const PI = 3.14;
const MAX_USERS = 100;
// Functions
function greet(userName) {
     return `Hello, ${userName}!`;
}

// Arrow function
const add = (a, b) => a + b;
// Objects
const user = {
     name: "John",
     age: 30,
     isStudent: true,
};
// Arrays
const numbers = [1, 2, 3, 4, 5];
// Loops
for (let i = 0; i < numbers.length; i++) {
     console.log(numbers[i]);
}
// Conditional statements
if (isStudent) {
     console.log(`${name} is a student.`);
}
// Switch statement
switch (age) {
     case 18:
          console.log("You are an adult.");
          break;
     case 30:
          console.log("You are in your thirties.");
          break;
     default:
          console.log("Age is just a number.");
}
// Error handling
try {
     console.log(greet(name));
} catch (error) {
     console.error("An error occurred:", error);
}
console.log("End of JavaScript Basics course.");
console.log(`PI is approximately ${PI}`);
console.log(`Max users allowed: ${MAX_USERS}`);
console.log(`Max users allowed: ${MAX_USERS}`);

// Importing aSnd exporting modules
// export { greet, add, user, numbers };
// Example of importing
// import { greet, add s} from './basics.js';
// This code demonstrates basic JavaScript syntax and features.
// It can be used as a starting point for learning JavaScript.
// End of the JavaScript Basics course code.
// Note: This code is for educational purposes and may not cover all JavaScript features.
// It is recommended to explore further and practice coding in JavaScript.

//Todo App
let prompt1 = "new";
prompt1 = prompt("Enter a task for your todo list:").toLocaleLowerCase().trim();
if (
     prompt1 === undefined ||
     prompt1 === "" ||
     prompt1 === null ||
     prompt1 === " "
)
     prompt1 = prompt("Enter a task for your todo list:")
          .toLocaleLowerCase()
          .trim();

let todoList = [];
while (true) {
     if (prompt1 === "q") break;
     else if (prompt1 === "new") {
          newtask = prompt("Add a new task:");
          todoList.push(newtask);
          console.log(`Task added: ${newtask}`);
          prompt1 = prompt("Enter a task for your todo list:")
               .toLocaleLowerCase()
               .trim();
     } else if (prompt1 === "list") {
          console.log("Your todo list:");
          for (let list of todoList) {
               console.log(`- ${list}`);
          }
          prompt1 = prompt("Enter a task for your todo list:");
     } else if (prompt1 == "delete") {
          let taskToDelete = prompt("Enter the task you want to delete:");
          let index = todoList.indexOf(taskToDelete);
          if (index !== -1) {
               todoList.splice(index, 1);
               console.log(`Task deleted: ${taskToDelete}`);
          } else {
               console.log(`Task not found: ${taskToDelete}`);
          }
          prompt1 = prompt("Enter a task for your todo list:")
               .toLocaleLowerCase()
               .trim();
     } else {
          console.log(`Invalid Action ${prompt1}`);
          prompt1 = prompt("Enter another task or type 'q' to quit:")
               .toLocaleLowerCase()
               .trim();
     }
}
console.log("Todo list management completed.");
// This code provides a simple todo list management system.
// Users can add, list, and delete tasks from their todo list.
// It uses basic JavaScript concepts such as arrays, loops, and conditionals.
// The todo list is stored in an array, and users can interact with it through prompts.
// The code can be extended with more features like saving the todo list to local storage or a database.
// This is a basic implementation and can be improved with better error handling and user experience.
