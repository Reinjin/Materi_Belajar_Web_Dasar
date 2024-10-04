export const name = 'fawwaz';
export const age = 20;
export const email = 'fawaz@gmail.com';

export function sayHello() {
    console.log('Hello');
}

export class Person {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

