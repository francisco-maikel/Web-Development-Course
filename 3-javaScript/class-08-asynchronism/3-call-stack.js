function sayHi() {
  //throw new Error ("Error in sayHi!!!")
  return "Hi!";
}

function greeting() {
  return sayHi();
}

function action() {
  action();
  return greeting();
}

const value = action();

console.log(value);