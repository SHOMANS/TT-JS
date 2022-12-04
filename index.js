// const myObject = {
//   name: 'Hadeel',
//   age: 21,
//   favColor: 'pink',
// };

// console.log(myObject);
// console.log(Object.keys(myObject)); // to get all keys of the object

//-----------------------------------------------------

// if (true) console.log('true');

// if (true) {
//   console.log('true');
//   console.log('true2');
// }

// if (1 === 2) {
//   console.log('true');
//   console.log('true2');
// } else {
//   console.log('not true');
// }

// if (1 === 2) {
//   console.log('true');
//   console.log('true2');
// } else if (1 === 3) {
//   console.log('not true');
// } else {
//   console.log('not not true');
// }

//-----------------------------------------------------

// true === 1 ? console.log(true) : console.log(false);
// true === 1 || false === 0 ? console.log(true) : console.log(false);

//-----------------------------------------------------

// console.log(Math.round(Math.random() * 10)); 0 to 10
// console.log(Math.floor(Math.random() * 11)); 0 to 10
// console.log(Math.ceil(Math.random() * 9)); 1 to 10

//-----------------------------------------------------

// const color = 'green';

// switch (color) {
//   case 'red':
//     console.log('its Red');
//     break;
//   case 'blue':
//     console.log('its blue');
//     break;
//   default:
//     console.log('its not one of the options');
// }

//-----------------------------------------------------

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

//-----------------------------------------------------

// const arr = ['a', 'b', 'c', 'd'];

// for (let i = 0; i < arr.length; i++) {
//   console.log(i, arr[i]);
// }

// for (let item in arr) {
//   console.log(item, arr[item]);
// }

// for (let item of arr) {
//   console.log(item);
// }

//-----------------------------------------------------

// const myObject = {
//   name: 'Hadeel',
//   age: 21,
//   favColor: 'pink',
// };

// for (let item in myObject) {
//   console.log(item);
// }

// for (let item of myObject) {
//   console.log(item);
// }

//-----------------------------------------------------

// const myStr = 5678;

// const myArr = [...myStr.toString()];

// console.log(myArr);

//-----------------------------------------------------

// const myFunc = (name = 'Name not found') => {
//   console.log(name);
// };

// myFunc('Matar');
// myFunc();
// myFunc();

//-----------------------------------------------------

// function sum(name, ...hadeel) {
//   let sum = 0;
//   for (let arg of hadeel) sum += arg;
//   console.log(name);
//   return sum;
// }

// let x = sum('4', 9, 16);

// console.log(x);

//-----------------------------------------------------

// const myDiv = document.querySelector('div');
// const myDiv = document.getElementById('myDev');
// const myInput = document.getElementById('myInput');
// const myAnchor = document.querySelector('a');
// console.log(myDiv);

// myDiv.innerHTML = 'not Hello';

// myAnchor.target = '_blank';
// myAnchor.href = 'https://google.com';

// myDiv.style.backgroundColor = 'red';

// console.log(myDiv.style);

// myDiv.addEventListener('mousemove', function () {
//   myDiv.style.backgroundColor = 'blue';
// });

// myDiv.addEventListener('mouseleave', function () {
//   myDiv.style.backgroundColor = 'red';
// });

// myAnchor.onclick = () => {
//   myAnchor.style.color = 'pink';
// };

// myAnchor.onblur = () => {
//   myAnchor.style.color = 'green';
// };

// myInput.addEventListener('keypress', (e) => {
//   if (e.target.value.length > 50) {
//     e.preventDefault();
//   }
//   document.querySelector('span').innerHTML = 51 - e.target.value.length;
//   console.log(50 - e.target.value.length);
// });

//-----------------------------------------------------

const myDiv = document.getElementById('myDiv');
const myBtns = document.querySelectorAll('button');

const arrayData = ['text alsdjfhal', 'text not asdfkgjsd;fl', 'text is asdfkgjsd;fl', 'text are asdfkgjsd;fl'];

const dataObject = {
  0: 'text alsdjfhal',
  1: 'text not asdfkgjsd;fl',
  2: 'text is asdfkgjsd;fl',
  3: 'text are asdfkgjsd;fl',
};

myBtns.forEach((button, index) => {
  button.onclick = function () {
    // myDiv.textContent = arrayData[index];
    myDiv.textContent = dataObject[index];
  };
});
