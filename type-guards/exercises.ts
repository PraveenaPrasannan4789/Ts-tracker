//typeof

function print(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
}

//instanceof

//hecks whether an object is created from a class.

class Dog {}

const dog = new Dog();

console.log(dog instanceof Dog);

// in Operator

//Checks whether a property exists inside an object.

type User = {
  name: string;
};

type Admin = {
  permissions: string[];
};

function check(person: User | Admin) {
  if ("permissions" in person) {
    console.log(person.permissions);
  }
}

//Custom Type Guards

//You can create your own type guard functions.

type Cat = {
  meow: () => void;
};

function isCat(animal: any): animal is Cat {
  return animal.meow !== undefined;
}
