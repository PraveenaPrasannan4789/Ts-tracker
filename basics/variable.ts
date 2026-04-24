// ===============================
// TypeScript Variables Examples
// ===============================

// 1. Basic Types
let age: number = 25;
let userName: string = "Praveena";
let isLoggedIn: boolean = true;

console.log("Basic Types:", age, userName, isLoggedIn);


// 2. Type Inference (no need to explicitly mention type)
let city = "London"; // inferred as string
let score = 100;     // inferred as number

console.log("Type Inference:", city, score);


// 3. Arrays
let numbers: number[] = [1, 2, 3, 4];
let fruits: Array<string> = ["apple", "banana", "mango"];

console.log("Arrays:", numbers, fruits);


// 4. Tuple (fixed length & types)
let person: [string, number] = ["Praveena", 24];

console.log("Tuple:", person);


// 5. Enum
enum Role {
  Admin,
  User,
  Guest
}

let currentRole: Role = Role.Admin;
console.log("Enum:", currentRole);


// 6. Any (avoid when possible)
let randomValue: any = "Hello";
randomValue = 42;
randomValue = true;

console.log("Any:", randomValue);


// 7. Unknown (safer alternative to any)
let value: unknown = "TypeScript";

if (typeof value === "string") {
  console.log("Unknown (after check):", value.toUpperCase());
}


// 8. Null & Undefined
let u: undefined = undefined;
let n: null = null;

console.log("Null & Undefined:", u, n);


// 9. Union Types
let id: number | string;
id = 101;
id = "A101";

console.log("Union Type:", id);


// 10. Literal Types
let direction: "left" | "right";
direction = "left";

console.log("Literal Type:", direction);


// 11. Const vs Let
const PI: number = 3.14;
// PI = 3.141; ❌ Error (cannot reassign)

let counter: number = 1;
counter = 2; // ✅ allowed

console.log("Const vs Let:", PI, counter);


// 12. Type Assertion
let someValue: unknown = "Hello World";

// Method 1
let strLength1: number = (someValue as string).length;

// Method 2
let strLength2: number = (<string>someValue).length;

console.log("Type Assertion:", strLength1, strLength2);


// 13. Object Type
let user: { name: string; age: number } = {
  name: "Praveena",
  age: 24
};

console.log("Object:", user);


// ===============================
// End of File
// ===============================