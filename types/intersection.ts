// An intersection type combines multiple types into one.
interface user {
  name: string;
}

interface employee {
  age: number;
}

interface newUser extends user, employee {}

let x: newUser = {
  name: "praveena",
  age: 27,
};

console.log("combined user value", x);

type user1 = {
  name: string;
};

type employee1 = {
  age: number;
};

type newUser1 = user1 & employee1;

let x1: newUser1 = {
  name: "praveena",
  age: 27,
};

console.log("combined user value", x1);
