// =======================================
// Utility Types in TypeScript
// =======================================

interface User {
  name: string;
  age: number;
  email: string;
}

// 1. Partial (all optional)
const user1: Partial<User> = {
  name: "Praveena",
};

// 2. Required (all mandatory)
const user2: Required<User> = {
  name: "Praveena",
  age: 24,
  email: "test@example.com",
};

// 3. Readonly
const user3: Readonly<User> = {
  name: "Praveena",
  age: 24,
  email: "test@example.com",
};

// user3.name = "New"; ❌

// 4. Pick (select properties)
type UserNameOnly = Pick<User, "name">;

const user4: UserNameOnly = {
  name: "Praveena",
};

// 5. Omit (remove properties)
type UserWithoutEmail = Omit<User, "email">;

const user5: UserWithoutEmail = {
  name: "Praveena",
  age: 24,
};

// =======================================
