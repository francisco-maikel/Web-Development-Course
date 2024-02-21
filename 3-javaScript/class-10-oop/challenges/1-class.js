class Animal {
  constructor(name, race) {
    this.name = name
    this.race = race
  }
}

class Dog extends Animal {
  constructor(name, race) {
    super(name, race);
    this.sound = sound;
  }

action() {
    return `${this.name} está ${this.sound}`;
 }
}

const myDog = new Dog("Spyke", "Doberman", "latindo!");

console.log(myDog.name);
console.log(myDog.race);
console.log(myDog.action());
