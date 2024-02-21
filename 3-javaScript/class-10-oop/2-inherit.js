class Bird {
  constructor() {
    this.skin = "Feather";
    this.header = "peck";
  }

  action() {
    return "Fly";
  }
}

class Chicken extends Bird {
  constructor() {
    super();
    this.footer = "webbed foot"
  }

 
  action() {
    return "run";
  }

  action() {
    return "swims";
  }
}

class Duck extends Bird {
  constructor() {
    super();
  }
}

const myBird = new Bird();
const myChicken = new Chicken();
const myDuck = new Duck();

console.log(myBird.action());
console.log(myChicken.skin);
console.log(myDuck.footer);
console.log(myDuck.action());

