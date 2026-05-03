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

// 3️⃣ Union (ONLY type)
// type ID = string | number;
// 4️⃣ Declaration merging (ONLY interface)
// interface User {
//   name: string;
// }

// interface User {
//   age: number;
// }

// const user: User = {
//   name: "Praveena",
//   age: 24
// };
// 5️⃣ Function type (both ways)
// // Type
// type Add = (a: number, b: number) => number;

// // Interface
// interface AddFn {
//   (a: number, b: number): number;
// }
