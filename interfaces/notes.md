## interface-basics.ts
# What is an interface?

An interface defines the structure (shape) of an object

## It tells:

what properties exist
what their types are
Basic example
interface User {
  name: string;
  age: number;
}

## Any object of type User must have:

name (string)
age (number)
Usage
const user: User = {
  name: "Praveena",
  age: 24
};
Optional properties
interface User {
  name: string;
  age?: number; // optional
}
Readonly property
interface User {
  readonly id: number;
  name: string;
}

## id cannot be changed after assignment

Function inside interface
interface MathOperation {
  (a: number, b: number): number;
}

const add: MathOperation = (a, b) => a + b;
Extending interface (important )
interface Person {
  name: string;
}

interface Employee extends Person {
  id: number;
}

## Combines properties (like intersection)

Purpose of this file

## Show how to define structured data cleanly

## type-vs-interface.ts

This is a very common interview question

# Similarity

Both can define object shapes:

type UserType = {
  name: string;
  age: number;
};

interface UserInterface {
  name: string;
  age: number;
}

## Both work the same here

Key Differences
Extension
// Interface
interface A {
  name: string;
}
interface B extends A {
  age: number;
}

// Type
type A = { name: string };
type B = A & { age: number };
Declaration merging (ONLY interface)
interface User {
  name: string;
}

interface User {
  age: number;
}

## Automatically becomes:

interface User {
  name: string;
  age: number;
}

Types cannot do this

Flexibility
type ID = string | number; // # possible

## Interfaces cannot do unions