// Task 1

// function getPromise(message, delay) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(message);
//         }, delay);
//     });
// }

// getPromise("test promise", 2000).then(function(data) {
//     console.log(data);
// });

// Task 2

// function calcArrProduct(arr) {
//     return new Promise((resolve, reject) => {

//         if (arr.every(element => typeof element === 'number')) {
//             const product = arr.reduce((acc, num) => acc * num, 1);
//             resolve(product);
//         } else {
//             reject("Error! Incorrect array!");
//         }
//     });
// }

// calcArrProduct([3, 4, 5])
//     .then(result => console.log(result))
//     .catch(error => console.log(error));

// calcArrProduct([5, "user2", 7, 12])
//     .then(result => console.log(result))
//     .catch(error => console.log(error));