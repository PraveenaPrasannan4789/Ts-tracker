# functions/ — What goes here?

This folder shows:

How to add types to functions
How to handle multiple function behaviors (overloading)
## typed-functions.ts
# What it means

You explicitly define:

parameter types
return type
#### Basic example
function add(a: number, b: number): number {
  return a + b;
}

## Explanation:

a: number, b: number → input types
: number → return type
#### Function with no return
function logMessage(message: string): void {
  console.log(message);
}

## void = returns nothing

#### Optional parameters
function greet(name: string, age?: number): string {
  return age ? `Hi ${name}, age ${age}` : `Hi ${name}`;
}
#### Default parameters
function multiply(a: number, b: number = 2): number {
  return a * b;
}
#### Arrow function
const subtract = (a: number, b: number): number => a - b;
## Purpose of this file

## Show how TypeScript makes functions safe and predictable

## function-overloads.ts
# What is function overloading?

It allows a function to have multiple type signatures

## Same function name, different input/output behavior

#### Example
function combine(a: string, b: string): string;
function combine(a: number, b: number): number;

// Implementation
function combine(a: any, b: any): any {
  return a + b;
}
#### Usage
const result1 = combine("Hello ", "World"); // string
const result2 = combine(10, 20);            // number
Important rules
Overload signatures → no implementation
Last function → actual implementation
Implementation uses broad types (any or union)
 Wrong example
function combine(a: string, b: string): string {
  return a + b;
}
function combine(a: number, b: number): number {
  return a + b;
}

##  This will error (multiple implementations)

## When to use overloading
When return type depends on input type
When function behaves differently for different inputs