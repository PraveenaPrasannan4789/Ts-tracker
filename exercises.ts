function getEvenNumbers(numbers:number[]):number[]{
  return numbers.filter((num: number) => num % 2 === 0);
}

let result = getEvenNumbers([1, 2, 3, 4, 5, 6]);

console.log(result);



//sum of all the numbers in an array
function sumArray(nums:number[]):number {
  return nums.reduce((sum, num) => sum + num, 0);
}

console.log(sumArray([1, 2, 3, 4]));


//Create an interface User and a function that prints user details.
//{name: "Praveena", age: 25}


interface User {
  name: string;
  age: number;
}

function printUser(obj:User):void{
  console.log(`Name: ${obj.name}, Age: ${obj.age}`);
}

printUser({ name: "Praveena", age: 25 });


//Return only users who are above 18 years old.
// [
//   { name: "A", age: 17 },
//   { name: "B", age: 20 }
// ]

interface userData{
    name:string,
    age:number
}

function checkUsers(data:userData[]):userData[]{
return data.filter(val=>val.age>18);
}

console.log(checkUsers([{name:"praveena", age:25},{name:"Aby", age:17}]));
//An interface defines the structure of an object.
//“Any object of type User MUST have a name (string) and age (number).”


let value: string|number =15;
console.log('value',value);