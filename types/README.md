## union-types.ts
# What is a Union Type?

A union type allows a variable to hold multiple possible types.

let id: number | string;

id can be either a number OR a string.

# When to use
When a value can be more than one type
Common in APIs (e.g., ID can be string or number)
# Example
let value: string | number;

value = "Hello";
value = 100;
## Important

You can only use methods common to all types unless you narrow it.

function printId(id: number | string) {
  if (typeof id === "string") {
    console.log(id.toUpperCase()); // # safe
  } else {
    console.log(id.toFixed(2)); // # safe
  }
}
# Interview Tip
Union = OR (|)
Requires type narrowing
## intersection-types.ts
# What is an Intersection Type?

An intersection type combines multiple types into one.

type A = { name: string };
type B = { age: number };

type Person = A & B;

Person must have both name AND age

# When to use
When you want to merge multiple types
Useful for combining interfaces or reusable types
# Example
type Employee = {
  id: number;
};

type User = {
  name: string;
};

type EmployeeUser = Employee & User;

const emp: EmployeeUser = {
  id: 1,
  name: "Praveena"
};
## Important
Must satisfy ALL properties
If conflicting types → error
type A = { id: number };
type B = { id: string };

type C = A & B; //  conflict
# Interview Tip
Intersection = AND (&)
Combines multiple types into one
## enums.ts
# What is an Enum?

An enum is a way to define a set of named constants.

# Numeric Enum (default)
enum Role {
  Admin,
  User,
  Guest
}

Values:

Admin = 0
User = 1
Guest = 2
# Custom Values
enum Status {
  Success = 200,
  NotFound = 404,
  Error = 500
}
# String Enum
enum Direction {
  Up = "UP",
  Down = "DOWN"
}
# Example Usage
let userRole: Role = Role.Admin;

if (userRole === Role.Admin) {
  console.log("Admin access");
}