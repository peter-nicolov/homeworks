// Task 1 

// const idTest = document.getElementById('test').innerHTML = 'Last';
// const idTest = document.querySelector('#test').innerHTML = 'Last';

// Task 2

// const idTest = document.querySelector('#image').innerHTML = '<img class="image" src ="cat.jpg">';

// console.log(idTest);

// Task 3

// const idTest = document.querySelectorAll('#text p');

// idTest.forEach((paragraph, index) => {
//     console.log(`Selector text ${index}: ${paragraph.textContent}`);
// });

// Task 4

// function showModal() {
//   let list = document.getElementById('list').getElementsByTagName('li');
//   let ind = [0, list.length - 1, 1, 3, 2];
//   let result = ind.map(index => list[index].textContent);
//   let textResult = document.getElementById('result');
//   textResult.textContent = result.join(', ');
// }

// Task 5

// let header = document.querySelector('h1');
// header.style.backgroundColor = 'green';

// let Par1 = document.querySelector('#myDiv p:first-of-type');
// Par1.style.fontWeight = 'bold';

// let Par2 = document.querySelector('#myDiv p:nth-of-type(2)');
// Par2.style.color = 'red';

// let Par3 = document.querySelector('#myDiv p:nth-of-type(3)');
// Par3.style.textDecoration = 'underline';

// let Par4 = document.querySelector('#myDiv p:last-of-type');
// Par4.style.fontStyle = 'italic';

// let listItems = document.querySelectorAll('#myList li');
// let horizontalText = '';
// listItems.forEach(function(li) {
//   horizontalText += li.textContent.trim();
// });
// listItems[0].parentNode.innerHTML = horizontalText;

// let invisibleSpan = document.querySelector('span');
// invisibleSpan.style.visibility = 'hidden';

// Task 6

// let message1 = prompt("Enter message 1:");
// let message2 = prompt("Enter message 2:");

// let input1 = document.getElementById('input1');
// let input2 = document.getElementById('input2');

// input1.value = message1;
// input2.value = message2;

// let inputSwap = input1.value;
// input1.value = input2.value;
// input2.value = inputSwap;

// Task 7

// let body = document.body;
// let main = document.createElement('main');
// let div = document.createElement('div');
// let p = document.createElement('p');

// main.className = 'Class1';
// div.id = 'Div1';
// p.textContent = 'Paragraph1';

// div.appendChild(p);
// main.appendChild(div);
// body.appendChild(main);