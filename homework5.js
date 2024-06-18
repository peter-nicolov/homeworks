//Task 1

// let mentor = {
//     course: 'JS Fundamental',
//     duration: 3,
//     direction: 'web dev',
//     direction1: 'web dev',
//     direction2: 'web dev'
// };

// function propsCount(currentObject){

//     let objectCount = Object.keys(mentor).length;
//     console.log(objectCount);

// }

// propsCount(mentor);

//Task 2

// let mentor  = {
//     course: 'JS Fundamental',
//     duration: 3,
//     direction: 'web dev',
//     direction1: 'QA',
//     direction2: 'BA'
// };

// function showProps(obj){

//     const keysArr = [];
//     const valuesArr = [];

//     for (const [key, value] of Object.entries(obj)) {
//         keysArr.push(key);
//         valuesArr.push(obj[key]);
//     }
//     console.log(keysArr);
//     console.log(valuesArr);
// }

// showProps(mentor);

// Task 3

// class Person {
//     constructor(name, surname){
//         this.name = name;
//         this.surname = surname;
//     }
//     showFullName (){
//         return `${this.name} ${this.surname}`;
//     }
// }
// class Student extends Person{
//     constructor(name, surname, year){
//         super (name, surname)
//         this.year = year;
//     }
//     showFullName(middleName){
//         return `${this.name} ${middleName} ${this.surname}`;
//     }
//     showCourse() {
//         let currentYear = new Date().getFullYear();
//         let course = currentYear - this.year;
//         return Math.min(Math.max(1, course), 6);
//     }
// }


// const stud1 = new Student ('Peter', 'Nicolov', 2022);

// console.log(stud1.showFullName("Petrovych"));
// console.log("Current course: " + stud1.showCourse());

// Task 4