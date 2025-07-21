"use strict";
class Animal {
    constructor(name) {
        this.name = name;
    }
    move() {
        console.log(`${this.name} is moving`);
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("Animal is making a sound");
    }
}
const bingo = new Dog("Bingo");
bingo.makeSound();
bingo.move();
// console.log(bingo);
