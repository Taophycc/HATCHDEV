"use strict";
// class Car {
//   public readonly brand: string;
//   public color: string;
//   private enginOn: boolean = false;
//   constructor(brand: string, color: string) {
//     this.brand = brand;
//     this.color = color;
//   }
//   protected startEngine() {
//     this.enginOn = true;
//     console.log(`${this.brand} engine has started`);
//   }
// }
// class SpeedCar extends Car {
//   public boost() {
//     return this.startEngine();
//   }
// }
// const ferrari = new SpeedCar("Ferrari", "Red");
// ferrari.boost();
// const renault = new Car("Renault", "green");
// const audi = new Car("Audi", "black");
// console.log(renault);
// class Person {
//   name: string;
//   height: number;
//   complexion: string;
//   constructor(name: string, height: number, complexion: string) {
//     this.name = name;
//     this.height = height;
//     this.complexion = complexion;
//   }
//   sleep(): void {
//     console.log(`${this.name} is sleeping`);
//   }
// }
// const ade = new Person("Ade", 5.11, "Dark");
// ade.sleep();
// const williams = new Person("Williams", 5.9, "Fair");
// williams.sleep();
// class Student {
//   name: string;
//   age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
//   speak(): void {
//     console.log(`Hi my name is ${this.name}, I am ${this.age} years old`);
//   }
// }
// const ayo = new Student("Ade", 5);
// ayo.speak();
// const fola = new Student("Fola", 6);
// fola.speak();
// class Animal {
//   name: string;
//   skinType: string;
//   constructor(name: string, skinType: string) {
//     this.name = name;
//     this.skinType = skinType;
//   }
//   makeSound(): void {
//     console.log(`${this.name} is making a sound`);
//   }
// }
// const animal1 = new Animal("Dog", "Fur");
// console.log(animal1);
// animal1.makeSound();
// class Dog extends Animal {
//   breed: string;
//   constructor(name: string, skinType: string, breed: string) {
//     super(name, skinType);
//     this.breed = breed;
//   }
//   //   barks(): void {
//   //     console.log(`${this.name} is barking whoof!!!!`);
//   //   }
//   makeSound(): void {
//     console.log(`${this.name} is barking whoof!!!`);
//   }
// }
// const dog1 = new Dog("Bingo", "fur", "golden retriever");
// console.log(dog1);
// dog1.makeSound();
// class Bird extends Animal {
//   //   breed: string;
//   //   constructor(name: string, skinType: string, breed: string) {
//   //     super(name, skinType);
//   //     this.breed = breed;
//   //   }
//   flying(): void {
//     console.log(`${this.name} is flying`);
//   }
// }
// const bird1 = new Bird("Parrot", "feathers");
// bird1.flying();
// class User {
//   public name: string;
//   public role: string;
//   public email: string;
//   constructor(name: string, role: string, email: string) {
//     this.name = name;
//     this.role = role;
//     this.email = email;
//   }
//   static createGuest(role: string) {
//     console.log(`This is a ${role} User`);
//   }
//   static validateEmail(email: string) {
//     if (email.includes("@")) {
//       console.log("This is a valid email ...");
//     } else {
//       console.log("Error invalid Email ...");
//     }
//   }
// }
// const john = new User("John Doe", "Guest", "john.doe@email.com");
// User.validateEmail(john.email);
// User.createGuest("Guest");
// // class GLE {
// //   engine: Engine;
// //   doors: Door[];
// //   seats: Seat[];
// // }
// // const gle = new GLE()
// // class Engine {}
// // class Door {}
// // class Seats {}
