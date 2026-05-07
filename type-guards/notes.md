# Type Guards in TypeScript 

---

## What are Type Guards?

Type guards are techniques used to narrow down a type inside a condition.

They help TypeScript understand the exact type of a variable.

---

## Why use Type Guards?

- Improve type safety
- Avoid runtime errors
- Work safely with union types

---

# Common Type Guards

---

## 1. typeof

Used for primitive types:
- string
- number
- boolean
- bigint
- symbol
- undefined

### Example

```ts
function print(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
}

### Instanceof

Checks whether an object is created from a class.

Example
class Dog {}

const dog = new Dog();

console.log(dog instanceof Dog);
### in Operator

Checks whether a property exists inside an object.

Example
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
### Custom Type Guards

You can create your own type guard functions.

Example
type Cat = {
  meow: () => void;
};

function isCat(animal: any): animal is Cat {
  return animal.meow !== undefined;
}