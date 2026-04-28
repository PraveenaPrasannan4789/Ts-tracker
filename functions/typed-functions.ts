// Typed Functions in TypeScript

function typedExample(a: number, b: string): any {
  return a + b;
}
console.log("typedFn result", typedExample(5, "hello"));

// 2. Function returning void
function voidExample(a: string, b: string): void {
  console.log("values", a, b);
}

voidExample("hello", "praveena");

// 3. Optional parameters
function greet(x: any, y?: any): any {
  if (y) {
    return x + y;
  }
  return x;
}
console.log("Optional Parameter Example", greet(5));
console.log("Optional Prameter Example", greet("hello", "function "));

// 4. Default parameters
function defaultParameter(a: number, b: number = 5): number {
  return a * b;
}

console.log("defaultParameter", defaultParameter(5));
console.log("defaultParameter", defaultParameter(5, 4));

// 5. Arrow function with types
const arrowExample = (a: number, b: number): number => {
  return a * b;
};
console.log("arrowExample", arrowExample(5, 3));

// 6. Function with object parameter
const printFn = (obj: { name: string; age: number }) => {
  return `Name: ${obj.name} Age:${obj.age}`;
};
console.log("printFn", printFn({ name: "ammu", age: 25 }));

7; // 7. Function type definition
//Instead of repeating types everywhere:
type fnType = (x: number, y: number) => number;

const example: fnType = (a, b) => {
  return a / b;
};

console.log("function type definition", example(15, 3));
