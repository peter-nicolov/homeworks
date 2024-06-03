// Task 1

// let x = 1;
// let y = 2;
// let res1 = `${x}${y}`; // Add the code, it is necessary to use the variables x and y

// console.log(res1); // "12"
// console.log(typeof res1); // "string"

// let x = 'true';
// let y = 2;
// let res2 = x + y; // Add code is required use variables x and y

// console.log(res2); // "true2"
// console.log(typeof res2); // "string"

// let x = 1;
// let y = 2;
// let res3 = x < y; // Add code is required use variables x and y

// console.log(res3); // true
// console.log(typeof res3); // "boolean"

// let x = 1;
// let y = 'string';
// let res4 = x * y; // Add code is required use variables x and y

// console.log(res4); // NaN
// console.log(typeof res4); // "number"

// Task 2
// a)

// let number = prompt('Enter value');
// let isPositive = (number > 0) ? "number is positive" : "number is negative";

// console.log(isPositive);

// b)

// let number = prompt('Enter value');
// let isMultipleOfSeven = (number % 7) ? "number is not a multiple of 7" : "number is a multiple of 7";

// console.log(isMultipleOfSeven);

// Task 3

// const empty = [20, 'Word', true, null];
// console.log(empty.length)

// empty.push(prompt('Write any value'))
// console.log(empty[4])

// empty.shift();
// console.log(empty)

// Task 4

// let cities = ['Rome', 'Lviv', 'Warsaw'];

// console.log(cities.join(' * '));

// Task 5

// const isAdult = +prompt('How old are you?');

// if (isAdult < 18) {
//     console.log('You are still too young.');
// } else {
//     console.log('You have reached the age of majority.');
// }

// Task 7 
// A

// const timestamp = new Date();
// const hours = timestamp.getHours().toString();
// const minutes = timestamp.getMinutes().toString();
// const seconds = timestamp.getSeconds().toString();

// console.log(`${hours}:${minutes}:${seconds}`);

// if (hours > 22 && hours < 5) {
//     console.log('Good night!')
// } else if (hours > 4 && hours < 12) {
//     console.log('Good morning!')
// } else if (hours > 10 && hours < 18) {
//     console.log('Good day!')
// } else if (hours > 16 && hours < 24) {
//     console.log('Good evening!')
// };

// Task 7
// B

// const timestamp = new Date();
// const hours = timestamp.getHours().toString();
// const minutes = timestamp.getMinutes().toString();
// const seconds = timestamp.getSeconds().toString();

// console.log(`${hours}:${minutes}:${seconds}`);

// switch(true) {
//     case hours > 22 && hours < 5:
//         console.log('Good night!');
//         break;
//     case hours > 4 && hours < 12:
//         console.log('Good morning!')
//         break;
//     case hours > 10 && hours < 18:
//         console.log('Good day!')
//         break;
//     case hours > 16 && hours < 24:
//         console.log('Good evening!')
//         break;
// };

// Task 6

function isValidNumber(value) {
    return !isNaN(value) && value > 0;
}

const sideA = parseFloat (prompt('Enter value for side A:'));
const sideB = parseFloat (prompt('Enter value for side B:'));
const sideC = parseFloat (prompt('Enter value for side C:'));

if (!isValidNumber(sideA) || !isValidNumber(sideB) || !isValidNumber(sideC)) {
    console.log("Incorrect data");
} else {

    const s = (sideA + sideB + sideC) / 2;
    const area = Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC));

    if (isNaN(area) || area <= 0) {
        console.log("Incorrect data");
    } else {
        console.log(`Area of the triangle: ${area.toFixed(3)}`);

        const isRightTriangle = (sideA ** 2 + sideB ** 2 === sideC ** 2) ||
                                (sideA ** 2 + sideC ** 2 === sideB ** 2) ||
                                (sideB ** 2 + sideC ** 2 === sideA ** 2);

        if (isRightTriangle) {
            console.log("The triangle is a right triangle.");
        } else {
            console.log("The triangle is not a right triangle.");
        }
    }
}
