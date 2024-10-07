// Your age in human years
const myAge = 25; // Replace this with your age

// Calculate the dog years for the first two years
let earlyYears = 2 * 10.5;

// Calculate the remaining years
let laterYears = (myAge - 2) * 4;

// Calculate your age in dog years
let myAgeInDogYears = earlyYears + laterYears;

// Display the result
console.log(`If you were a dog, you would be ${myAgeInDogYears} years old!`);


// guided by openAI on more like real calculator
const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask the user for input
rl.question('Enter your age in human years: ', (myAge) => {

  // Ensure the input is valid
  if (myAge <= 0 || isNaN(myAge)) {
    console.log("Please enter a valid age.");
  } else {
    // Calculate early years (first 2 years count as 10.5 dog years each)
    let earlyYears = 2 * 10.5;

    // Calculate later years (every year after the first two counts as 4 dog years)
    let laterYears = (myAge - 2) * 4;

    // If the age is less than or equal to 2, handle only early years
    if (myAge <= 2) {
      laterYears = 0;
    }

    // Calculate total dog years
    let myAgeInDogYears = earlyYears + laterYears;

    // Display the result
    console.log(`If you were a dog, you would be ${myAgeInDogYears} years old!`);
  }

  // Close the interface
  rl.close();
});
