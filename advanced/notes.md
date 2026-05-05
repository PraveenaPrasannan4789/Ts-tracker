# Utility Types in TypeScript

---

## What are Utility Types?

Utility types are **built-in TypeScript helpers** used to transform existing types.

---

## Why use Utility Types?

- Reduce code duplication
- Improve readability
- Quickly modify types

---

## Common Utility Types

---

### Partial<T>

Makes all properties optional

```ts
type User = {
  name: string;
  age: number;
};

type PartialUser = Partial<User>;