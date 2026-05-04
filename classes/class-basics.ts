// =======================================
// TypeScript Classes - Examples & Exercises
// =======================================

// Basic Class
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): string {
    return `Hello, my name is ${this.name}`;
  }
}

const p1 = new Person("Praveena", 24);
console.log(p1.greet());

// =======================================
// Access Modifiers
// =======================================

class Employee {
  public name: string;
  private salary: number;

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }

  getSalary(): number {
    return this.salary;
  }
}

const emp = new Employee("John", 50000);
console.log(emp.name);
console.log(emp.getSalary());
// console.log(emp.salary); Error

// =======================================
// Readonly Property
// =======================================

class Car {
  readonly brand: string;

  constructor(brand: string) {
    this.brand = brand;
  }
}

const car = new Car("Toyota");
// car.brand = "Honda";

// =======================================
// Inheritance
// =======================================

class Animal {
  speak(): string {
    return "Animal makes sound";
  }
}

class Dog extends Animal {
  bark(): string {
    return "Dog barks";
  }
}

const dog = new Dog();
console.log(dog.speak());
console.log(dog.bark());

// =======================================
// Protected Example
// =======================================

class BankAccount {
  protected balance: number;

  constructor(balance: number) {
    this.balance = balance;
  }
}

class SavingsAccount extends BankAccount {
  showBalance(): number {
    return this.balance;
  }
}

const acc = new SavingsAccount(1000);
console.log(acc.showBalance());

// =======================================
// Exercises (Try yourself)
// =======================================

// Exercise 1:
// Create a class "Student" with:
// - name (string)
// - marks (number)
// - method getGrade() → returns "Pass" or "Fail"

// Exercise 2:
// Create a class "Rectangle" with:
// - width, height
// - method area()

// Exercise 3:
// Create a class "User" with:
// - private password
// - method checkPassword(input)

// Exercise 4:
// Create a class "Vehicle"
// Create subclass "Bike" with extra method start()
