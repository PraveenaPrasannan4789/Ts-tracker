//basic comparison

type demoType = {
  name: string;
  age: number;
};

interface intType {
  name: string;
  age: number;
}

// Extension vs Intersection
//  Interface
interface A {
  name: string;
}
interface B extends A {
  age: number;
}

// Type
type x = {
  name: string;
};

type y = x & {
  age: number;
};

// Union (ONLY type)
type ID = string | number;

// Declaration merging (ONLY interface)
interface User {
  name: string;
}

interface User {
  age: number;
}

const user: User = {
  name: "Praveena",
  age: 24,
};

// Function type (both ways)
// type
type typeExample = (a: number, b: number) => number;
//interface
interface fnExample {
  (a: number, b: number): number;
}

const fn: typeExample = (a, b) => {
  console.log("a,b", a, b);
  return a + b;
};

fn(5, 3);
