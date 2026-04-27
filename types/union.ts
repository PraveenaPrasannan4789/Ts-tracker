let value: string | number;

value = "Hello";
value = 100;
console.log("value here", value);

function checkUnion(i: string | number): void {
  if (typeof i === "string") {
    console.log("String value");
  } else if (typeof i === "number") {
    console.log("number value");
  }
}

checkUnion("hi");
