console.log("Task 1");
setTimeout(() => {
  console.log("Task 2 (asynchronous)");
}, 1000); // Task 2 will be logged after 1 second
console.log("Task 3");
