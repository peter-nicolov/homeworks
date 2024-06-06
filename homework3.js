// Task 1

// function productOfArray(arr){

//     let result = 1;
//     for (let i = 0; i < arr.length; i++){
//         result *= arr[i];
//     }    
//     return result;
// }

// const arr = [2, 3, 4, 5];
// const result = productOfArray(arr)
// console.log(result);

// function productOfArray(arr){

//     let result = 1;
//     let i = 0;
    
//     while (i < arr.length){
//         result *= arr[i];
//         i++;
        
//     }    
//     return result;
// }

// const arr = [2, 3, 4, 5];
// const result = productOfArray(arr)
// console.log(result);

// Task 2

// const start = 0;
// const end = 15;

// for (let i = start; i <= end; i++) {
//     if (i % 2 === 0) {
//         console.log(`${i} is even`);
//     } else
//         console.log(`${i} is odd`);
    
// }

// Task 3

// function genRandArray(length, min, max){
//     const randArray = [];
//     for (let i = 0; i < length; i++) {
//         const randNumber = Math.floor(Math.random() * (max - min + 1)) + min;
//         randArray.push(randNumber);
//     }
//     return randArray;
// }

// const length = 5;
// const min = 1;
// const max = 500;

// const randomArray = genRandArray(length, min, max);
// console.log(randomArray);

// Task 4

// function raiseToDegree(a, b) {
//     return Math.pow(a, b);
// }

// function getInputAndCalculatePower() {

//     let a = prompt("Enter the base number (a):");
//     let b = prompt("Enter the exponent (b):");

//     a = parseInt(a); // Can we use a = +a and b = +b here?
//     b = parseInt(b);

//     if (isNaN(a) || isNaN(b)) {
//         console.log("Incorrect data. Please enter valid integers.");
//     } else {

//         const result = raiseToDegree(a, b);
//         console.log(`raiseToDegree(${a}, ${b}) = ${result}`);
//     }
// }

// getInputAndCalculatePower();

// Task 5

// function findMin() {

//     let min = arguments[0];
    
//     for (let i = 1; i < arguments.length; i++) {

//         if (arguments[i] < min) {
//             min = arguments[i];
//         }
//     }
    
//     return min;
// }

// console.log(findMin(12, -20, 4, -4, 0.2));

// Task 6

// function findUnique(arr) {
//     const uniqueElements = new Set(arr);
//     return uniqueElements.size === arr.length;
// }

// console.log(findUnique([1, 2, 3, 5, 3]));
// console.log(findUnique([1, 2, 3, 5, 11]));

// Task 7

// function lastElem(arr, count) {
//     if (count === undefined) {
//         return arr[arr.length - 1];
//     } else {
//         return arr.slice(-count);
//     }
// }

// console.log(lastElem([3, 4, 10, -5]));
// console.log(lastElem([3, 4, 10, -5], 1));
// console.log(lastElem([3, 4, 10, -5], 3));

// Task 8

// function upperCaseFirstLetter(str) {
//     const words = str.split(' ');

//     for (let i = 0; i < words.length; i++) {
//         words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//     }

//     return words.join(' ');
// }

// const inputString = 'i love java script';
// const outputString = upperCaseFirstLetter(inputString);
// console.log(outputString);