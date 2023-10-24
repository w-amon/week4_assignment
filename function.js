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
  