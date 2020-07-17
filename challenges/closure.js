// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
// When the variable `internal` is invoked inside the nested function, the interpreter can't find a variable by that name inside the function, so it moves its search to the next scope up, which would be the context of the top level function, where it will find the variable contained there and use its value.

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(num) {
  let counter = 0;
  for (let i = 1; i <= num; i++) counter += i;
  return counter;
};

console.log(summation(4));
