class Engine {
  start() {
    console.log("Engine Started");
  }
}

class Car {
  engine: Engine;

  constructor(engine: Engine) {
    this.engine = engine;
  }

  startCar() {
    console.log("Car Started");
    this.engine.start();
  }
}

const engine = new Engine();
const car = new Car(engine);
console.log(engine, car);
car.startCar();

// Composition
class Heart {
  beat() {
    console.log("Heart is beating");
  }
}

class Human {
  heart: Heart;

  constructor() {
    this.heart = new Heart();
  }

  alive() {
    console.log("I am alive");
    this.heart.beat();
  }
}

const person = new Human();
person.alive();
