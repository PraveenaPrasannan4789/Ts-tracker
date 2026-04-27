enum Role {
  name = "test1",
  age = 30,
}

let userRole: Role = Role.name;
console.log("usernameee", userRole);

if (userRole === Role.name) {
  console.log("Admin access");
}
