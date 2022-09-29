// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// This code sets the name variable to Dane, then checks the name.
// If the name is Mary, the console says 'Hi, Mary!'. In all other values for name, the console says 'How do you do?'
// In this case, we should see the console say 'How do you do?'
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We define two variables, secret and code. code has the value 123, and secret is yet unassigned.
// Two conditionals: the first checks code's value - if it is exactly 123, it stores secret's value as super, then multiplies code's value by two.
// The second conditional checks if code is greater than 250 - if it is, it stores secret's value as duper.
// Finally, the console tells us secret's value. In this case, the console should say super.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// The first three lines store three pieces of information (presumably about a single person): student status, age, and zip.
// Then based on the values stored, the console logs a single response.
// If the person is both a student and has a zip code value less than 80000, the console logs 'You're a sudent on the West Coast!'
// If that is not the case and the student's age is <30, the console logs 'what are your hobbies?'
// If neither of those are true but the person is a student, the console logs 'Welcome to Prime!'
// In all other cases, the console logs "How about the weather?"
// In this case, the console will log 'Welcome to Prime!'
//

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
FIX - variables stored incorrectly. Should be
let colorOne = 'blue';
let colorTwo = 'red';

let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

FIX - result should set both colors to purple.
if (mix === true) {
  colorOne = 'purple';
  colorTwo = 'purple';
}

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

FIX - original used an or statement, not and.
if (temp > 39 && time >=4) {...}

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

FIX - wrong outputs. Also, confusing way to state the condition.
if(age>=minAge) {
  console.log('enter');
} else {
  console.log('no entry');
}

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

