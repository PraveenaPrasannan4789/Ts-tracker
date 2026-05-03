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
