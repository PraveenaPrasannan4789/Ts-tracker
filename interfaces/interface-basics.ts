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
interface Person1 {
  name: string;
}

interface Employee extends Person1 {
  id: number;
}
const emp: Employee = {
  name: "Praveena",
  id: 1,
}; //Combines properties (like intersection)

const newData12: Employee = {
  name: "ammu",
  id: 90,
};
console.log("newData12", newData12);

//interface with methods
interface Person {
  name: string;
  greet(): string;
}

const person: Person = {
  name: "Praveena",
  greet() {
    return `Hello, I am ${this.name}`;
  },
};

//Index signature
interface StringArray {
  [index: number]: string;
}
const arr: StringArray = ["a", "b", "c"];
//This object behaves like an array of strings
