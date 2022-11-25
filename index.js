'use strict';

///////////////////////////////////////////////////////////////////////////////////
// Count down timer
const countDownFrom = 10;
for (let count = countDownFrom; count > 0; count--) {
  console.log(count);
}
console.log("Happy New Year!");

///////////////////////////////////////////////////////////////////////////////////
console.log("Please tell us which of the following age ranges you're interested in dating.");

const ageStep = 10; // Make age ranges of 10 years wide.
for (let age = 20; age < 110; age += ageStep) {
  const ageRangeLow = age;
  const ageRangeHigh = age + ageStep;

  // Asking the question and saving the answer is not relevant for the example.
  console.log(`Are you interested in dating people from ${ageRangeLow} - ${ageRangeHigh}? Y/N`);
}


///////////////////////////////////////////////////////////////////////////////////
// If we have two arrays with the same length: we can use one counter variable to
// access values in both.
const countries = ["Afghanistan", "Albania", "Algeria", "Andorra"];
const capitals = ["Kabul", "Tirana", "Algiers", "Andorra la Vella"];

for (let i = 0; i < countries.length; i++) {
  const country = countries[i];
  const capital = capitals[i];
  console.log(`The capital of ${country} is ${capital}.`);
}


///////////////////////////////////////////////////////////////////////////////////
console.log("Please tell us which hobbies you have.");
let hobbies = [];
// We don't use a condition here.
// If the user wants to stop adding questions we break out of the loop.
// We do not use a final expression here because the user may not have given
// a clear answer.
for (let hobbyNumber = 1;;) {
  const answer = prompt("Do you want to add more hobbies? Y/N");
  if (answer === "N") {
    // We exit the while loop so we don't need to do if-else here.
    break; 
  }
  if (answer !== "Y") {
    console.log("Your answer was unclear");
    continue;
  }

  const newHobby = prompt("What is another hobby you have?");
  
  hobbies.push(newHobby);
  console.log(`Hobby number ${hobbyNumber}: ${newHobby}`);
  hobbyNumber++;
}


console.log(`Your hobbies are: ${hobbies.join(', ')}.`);
