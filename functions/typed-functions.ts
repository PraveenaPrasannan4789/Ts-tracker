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
