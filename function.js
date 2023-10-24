// Question 1
// Write a JavaScript function named `calculateArea` that calculates and returns the area of a rectangle.
// The function should take two parameters: `length` and `width`. 
// Test your function by calling it with different values.

function calculateArea(length, width) {
    return length * width;
  }
  
  // Test the function with different values
  const length1 = 5;
  const width1 = 8;
  const area1 = calculateArea(length1, width1);
  console.log(`The area of the rectangle is: ${area1}`);
  
  const length2 = 10;
  const width2 = 3;
  const area2 = calculateArea(length2, width2);
  console.log(`The area of the rectangle is: ${area2}`);
  

// Question 2: Scope Exploration
// Declare a variable globalVar in the global scope and give it a value.
// Inside a function, declare a variable localVar and give it a different value.
// Attempt to access both globalVar and localVar within the function.
// Write comments explaining your observations about variable scope.


let globalVar = "I am a global variable"; // Declare a global variable in the global scope

function myFunction() {
  // Declare a local variable inside the function
  let localVar = "I am a local variable";

  // Access globalVar and localVar
  console.log("Inside the function:");
  console.log("globalVar: " + globalVar);
  console.log("localVar: " + localVar);
}

// Call the function
myFunction();

// Attempt to access globalVar and localVar outside the function
console.log("Outside the function:");
console.log("globalVar: " + globalVar);

// This will result in an error since localVar is not accessible outside the function.
// console.log("localVar: " + localVar);


// Question 3
// Create a function called counter that returns another function. The inner function should increment 
// and return a counter variable each time it's called. Use closures to achieve this. 
// Test your counter function by creating multiple counters and incrementing them separately.

function counter() {
    let count = 0; // This variable is stored in the closure of the inner function.
  
    // The inner function, when called, increments and returns the counter.
    return function () {
      count++;
      return count;
    };
  }
  
  // Create multiple counter instances
  const counter1 = counter();
  const counter2 = counter();
  
  // Increment and display counts for the first counter
  console.log("Counter 1:");
  console.log(counter1()); // Output: 1
  console.log(counter1()); // Output: 2
  
  // Increment and display counts for the second counter
  console.log("Counter 2:");
  console.log(counter2()); // Output: 1
  console.log(counter2()); // Output: 2
  console.log(counter2()); // Output: 3
  