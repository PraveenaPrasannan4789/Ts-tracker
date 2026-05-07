# keyof & typeof in TypeScript

---

# 🔹 keyof

## What is keyof?

`keyof` is used to get all keys of a type as a union.

---

## Example

```ts
type User = {
  name: string;
  age: number;
};

type UserKeys = keyof User;