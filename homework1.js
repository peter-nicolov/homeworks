    // Task 2

console.log('Nicolov')

    // Task 3

let firstName = 'Peter';
let lastName = 'Nicolov';
console.log(firstName);
console.log(lastName);

firstName = 'Pepi';
console.log(firstName);

firstName = lastName;
console.log(firstName);

// Task 4

 const myData = {
    name: 'Peter Nicolov',
    age: '35',
    male: true,
    isMarried: undefined,
    hasKids: null
 };
console.log(myData);
console.log(typeof myData);

// Task 5

let isAdult = confirm('Do you have the age for majority?');
console.log(isAdult);

// Task 7

let userName = prompt('What is your name?');
let userEmail = prompt('What is your email?');
let userPass = prompt('What is your password?');

console.log(`Dear ${userName}, your email is ${userEmail}, your password is ${userPass}.`)

// Task 6

let myName = 'Peter';
let myLastName = 'Nicolov';
let studyGroup = 3;
let birthYear = 1988;
let hasMarriage = false;
let numberOfKids;
let wifeName = null;

console.log(typeof studyGroup);
console.log(typeof birthYear);
console.log(typeof hasMarriage);
console.log(typeof myName);
console.log(typeof myLastName);

console.log(typeof numberOfKids);
console.log(typeof wifeName);

// Task 8

const secondsInMinute = 60;
const minutesInHour = 60;
const hoursInDay = 24;
const daysInMonth = 30;

const secondsInHour = secondsInMinute * minutesInHour;
const secondsInDay = secondsInMinute * minutesInHour * hoursInDay;
const secondsInMonth = secondsInMinute * minutesInHour * hoursInDay * daysInMonth;

console.log('One hour has:' + ' ' + secondsInHour + ' ' + 'seconds');
console.log('One day has:' + ' ' + secondsInDay + ' ' + 'seconds');
console.log('One month has:' + ' ' + secondsInMonth + ' ' + 'seconds');
