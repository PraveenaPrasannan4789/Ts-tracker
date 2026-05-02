//basic interface example
interface user {
  name: string;
  age: number;
}

//interface usage
const user: user = {
  name: "Praveena",
  age: 20,
};

//optional properties in interface
interface userNew {
  name?: string;
  age: 10;
}

// 🔹 Readonly property
// interface User {
//   readonly id: number;
//   name: string;
// }

// 👉 id cannot be changed after assignment

// 🔹 Function inside interface
// interface MathOperation {
//   (a: number, b: number): number;
// }

// const add: MathOperation = (a, b) => a + b;
// 🔹 Extending interface (important 🔥)
// interface Person {
//   name: string;
// }

// interface Employee extends Person {
//   id: number;
// }

// 👉 Combines properties (like intersection)

// 🎯 Purpose of this file

// 👉 Show how to define structured data cleanly

// 📄 type-vs-interface.ts

// This is a very common interview question ⚡

// ✅ Similarity

// Both can define object shapes:

// type UserType = {
//   name: string;
//   age: number;
// };

// interface UserInterface {
//   name: string;
//   age: number;
// }

// 👉 Both work the same here

// 🔥 Key Differences
// 1️⃣ Extension
// // Interface
// interface A {
//   name: string;
// }
// interface B extends A {
//   age: number;
// }

// // Type
// type A = { name: string };
// type B = A & { age: number };
// 2️⃣ Declaration merging (ONLY interface)
// interface User {
//   name: string;
// }

// interface User {
//   age: number;
// }

// 👉 Automatically becomes:

// interface User {
//   name: string;
//   age: number;
// }

// ❗ Types cannot do this

// 3️⃣ Flexibility
// type ID = string | number; // ✅ possible

// 👉 Interfaces cannot do unions
// 🚀 Real-world usage (important)
// interface ApiResponse {
//   status: number;
//   data: string;
// }

// function fetchData(): ApiResponse {
//   return {
//     status: 200,
//     data: "Success"
//   };
// }
