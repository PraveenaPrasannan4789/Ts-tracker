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

// Example -2 intersection of interface
interface data1 {
  name: string;
}

interface data2 {
  age: number;
}

interface data3 extends data1, data2 {}

let xy: data3 = {
  name: "praveena",
  age: 27,
};
