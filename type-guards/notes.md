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

## 1️⃣ typeof

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