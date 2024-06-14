// Task 1

function calcRectangleArea (width, height){

    if (typeof width !== 'number' || isNaN(width)){
    throw new TypeError ('The width must be a numeric value.');
    }
    if (typeof height !== 'number' || isNaN(height)){
        throw new TypeError ('The height must be a numeric value.');
    }
    return width * height;
}

function alerts(){
    try{

        let width = parseFloat (prompt('Enter width value'));
        let height = parseFloat (prompt('Enter height value'));

        let area = calcRectangleArea(width, height);

        alert(`The area of the rectangle is: ${area}`);

    } catch (error) {

        alert(`${error.name}: ${error.message}`);
    }
}

alerts();

// Task 2

// function checkAge (){
//     try{

//         let age = prompt('Please enter your age');

//         if (age === ""){
//             throw new TypeError ('The field is empty! Please enter your age.');
//         } else if (age != +age){
//             throw new SyntaxError ('Please enter a valid numeric value for your age.');
//         } else if(age < 14){
//             throw new RangeError ('You are too young to watch this movie.');
//         } else {
//             alert("You have access to watch the movie!");
//         }
//     }catch(error){
//         alert(`${error.name}: ${error.message}`);
//     }
// }

// checkAge();

// Task 3

// class MonthException extends Error{
//     constructor(message){
//         super(message);
//         this.name = 'MonthException';
//     }
// }

// let month = +prompt('Enter month number');

// function showMonthName (month){

//     switch (month) {
//         case 1: console.log('Jan'); break;
//         case 2: console.log('Feb'); break;
//         case 3: console.log('Mar'); break;
//         case 4: console.log('Apr'); break;
//         case 5: console.log('May'); break;
//         case 6: console.log('Jun'); break;
//         case 7: console.log('Jul'); break;
//         case 8: console.log('Aug'); break;
//         case 9: console.log('Sep'); break;
//         case 10: console.log('Oct'); break;
//         case 11: console.log('Nov'); break;
//         case 12: console.log('Dec'); break;
//     }
// }

// try{
//     if (month < 1 || month > 12){
//         throw new MonthException('Incorrect month number');
//     }

// } catch(error) {
//     console.log(error.name + ' ' + error.message);
// }

// showMonthName(month);

// Task 4

// function showUser(id) {
//     if (id < 0) {
//         throw new Error(`ID must not be negative: ${id}`);
//     }
//     return { id: id };
// }

// function showUsers(ids) {
//     const users = [];
    
//     for (let i = 0; i < ids.length; i++) {
//         try {
//             let user = showUser(ids[i]);
//             users.push(user);
//         } catch (error) {
//             console.error(error.message);
//         }
//     }
    
//     return users;
// }

// const result = showUsers([7, -12, 44, 22]);
// console.log(result);