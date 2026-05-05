// =======================================
// Generics in TypeScript
// =======================================

// 1. Basic generic function
function identity<T>(value: T): T {
  return value;
}

console.log(identity<string>("Hello"));
console.log(identity<number>(123));

// 2. Generic with array
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

console.log(getFirstElement<number>([1, 2, 3]));
console.log(getFirstElement<string>(["a", "b", "c"]));

// 3. Generic interface
interface Box<T> {
  value: T;
}

const numberBox: Box<number> = { value: 100 };
const stringBox: Box<string> = { value: "TypeScript" };

console.log(numberBox, stringBox);

// 4. Multiple generics
function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

console.log(pair<string, number>("Age", 24));

// =======================================
