# Generics in TypeScript

---

## What are Generics?

Generics allow you to write **reusable, flexible, and type-safe code**.

Instead of fixing a type, you use a **placeholder type (`T`)**

---

## Why use Generics?

- Avoid code duplication
- Maintain type safety
- Work with multiple data types

---

## Basic Example

```ts
function identity<T>(value: T): T {
  return value;
}