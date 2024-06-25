// Task 1

// let newWindow = window.open("", "", "width=300, height=300");

// setTimeout(function(){
//     newWindow.resizeTo(500, 500);
// }, 2000);

// setTimeout(function(){
//     newWindow.resizeTo(200, 200);
// }, 4000);

// setTimeout(function(){
//     newWindow.close();
// }, 6000);

// Task 2

// function changeCSS() {
//     let textElement = document.getElementById('text');
//     textElement.style.color = 'orange';
//     textElement.style.fontSize = '20px';
//     textElement.style.fontFamily = 'Comic Sans MS';
// }

// Task 3

// document.getElementById('button1').addEventListener('click', function() {
//     document.body.style.backgroundColor = 'blue';
// });

// document.getElementById('button2').addEventListener('dblclick', function() {
//     document.body.style.backgroundColor = 'pink';
// });

// document.getElementById('button3').addEventListener('mousedown', function() {
//     document.body.style.backgroundColor = 'brown';
// });
// document.getElementById('button3').addEventListener('mouseup', function() {
//     document.body.style.backgroundColor = 'white';
// });

// document.getElementById('link').addEventListener('mouseover', function() {
//     document.body.style.backgroundColor = 'yellow';
// });
// document.getElementById('link').addEventListener('mouseout', function() {
//     document.body.style.backgroundColor = 'white';
// });

// Task 4

// let dropdown = document.getElementById('dropdown');
// let removeButton = document.getElementById('removeButton');

// removeButton.addEventListener('click', function() {
//     const selectedOptionIndex = dropdown.selectedIndex;
    
//     if (selectedOptionIndex !== -1) {
//         dropdown.remove(selectedOptionIndex);
//     }
// });

// Task 5

// let button = document.getElementById('actionButton');
// let message = document.getElementById('message');

// button.addEventListener('click', function() {
//     message.textContent = 'I was pressed!';
// });

// button.addEventListener('mouseover', function() {
//     message.textContent = 'Mouse on me!';
// });

// button.addEventListener('mouseout', function() {
//     message.textContent = 'Mouse is not on me!';
// });

// Task 6

// function updateSizeDisplay() {
//     let width = window.innerWidth;
//     let height = window.innerHeight;
//     let sizeDisplay = document.getElementById('showSize');
//     sizeDisplay.textContent = `Window Size: ${width}px x ${height}px`;
// }

// window.addEventListener('resize', updateSizeDisplay);

// Task 7

