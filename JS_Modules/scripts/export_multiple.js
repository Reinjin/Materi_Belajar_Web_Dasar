const company = "Programmer Pemula";

function sum(a, b) {
  return a + b;
}   

class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

export { company, sum, Person };