// Function Overloading in TypeScript

// function overLoadExample(a: number, b: string): number;
// function overLoadExample(a: number, b: number): number;

//implementation-1

function overLoadExample(a: any, b: any): any {
  return a + b;
}

console.log("overLoad Example", overLoadExample("hello", "praveena"));

// implementation-2
function combine(a: any, b: any): any {
  return a + b;
}
const result1 = combine("Hello ", "World");
const result2 = combine(10, 20);

console.log("String Combine:", result1);
console.log("Number Combine:", result2);

// 2. Overload with different return types

function format(value: number): string;
function format(value: string): string;

function format(value: any): string {
  if (typeof value === "number") {
    return `Number: ${value}`;
  }
  return `String: ${value}`;
}

console.log(format(100));
console.log(format("TypeScript"));

// // 3. Real-world example (API-like)

function getUser(id: number): { id: number; name: string };
function getUser(email: string): { email: string; name: string };

function getUser(param: any): any {
  if (typeof param === "number") {
    return { id: param, name: "User by ID" };
  } else {
    return { email: param, name: "User by Email" };
  }
}

console.log(getUser(1));
console.log(getUser("test@example.com"));

// =======================================
// Important Notes:
// - Overload signatures (top) → only types
// - Implementation (bottom) → actual logic
// =======================================
