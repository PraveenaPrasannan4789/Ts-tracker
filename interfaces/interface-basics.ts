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

//Readonly property
interface UserNew1 {
  readonly id: number;
  name: string;
}

// id cannot be changed after assignment

//Function inside interface
interface MathOperation {
  (a: number, b: number): number;
}

const add: MathOperation = (a, b) => a + b;

//Extending interface
interface Person {
  name: string;
}

interface Employee extends Person {
  id: number;
}
//Combines properties (like intersection)
