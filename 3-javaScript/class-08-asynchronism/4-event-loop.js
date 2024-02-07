// Call Stack
console.log(1);

// Task
setTimeout(() => {
  console.log(2);
}, 1000);

// Call Stack
for (let index = 0; index < 2000; index++) {
  console.log(index);
}

// Microtask
queueMicrotask(() => {
  console.log(4);
});
