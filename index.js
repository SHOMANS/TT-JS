// (function regFunc(x) {
//   console.log('test');
//   return x;
// })(); // self invoke

// const arrowFunc = (x) => x;

// regFunc()

// (function regFunc() {
//   console.log(this);
// })(); // window Obj

// function regFunc() {
//   console.log(this);
// }
// regFunc();

// const arrowFunc = () => {
//   console.log(this);
// };

// arrowFunc();

// const myObj = {
//   name: 'Ashraf',
//   func: function () {
//     console.log(this);
//   },
// };

// myObj.func(); // myObj

// const myNewObj = {
//   name: 'Ashraf',
//   func: () => {
//     console.log(this);
//   },
// };

// myNewObj.func(); // window

// function testRegFunc() {
//   console.log(this);
// }

// const myObj = {
//   name: 'Ashraf',
// };

// testRegFunc.call(myObj); // myObj
// testRegFunc.apply(myObj); // myObj

// function test(x) {
//   console.log(x);
// }

// new test(4); // 4

// const test = (x) => {
//   console.log(x);
// };

// new test(4); // error

// class testClass2 {
//   name = 'Rana';
//   print() {
//     console.log(this);
//   }
// }

// const Test2 = new testClass2();
// Test2.print();

// class testClass {
//   name = 'Rana';
//   test = () => {
//     console.log(this);
//   };
// }

// const Test = new testClass();
// Test.test();

// ---------------------------------

// const user = {
//   name: 'Ezz',
//   age: 23,
//   DateOfBirth: new Date('07-09-1999'),
//   jobs: ['programmer', 'engineer'],
//   address: {
//     street: 'Omar Al mokhtar',
//     number: '',
//   },
// };

// console.log(user.address.street);

// const myCopy = { user: { ...user } };

// const testObj = new Object(user);

// myCopy.name = 'Hasan';
// myCopy.user.name = 'Wasim';

// console.log(myCopy.name);
// console.log(myCopy.user.name);
// console.log(user.name);

// console.log(testObj);

// function test() {
//   return arguments;
// }
// console.log(test(5, 6, 3));

// const test = (...args) => {
//   return args;
// };
// console.log(test(5, 6, 3));

// ---------------------------------

// const name = 'abd';
// const yearOfBirth = 2001;
// const myText = 'Hello, my name is ' + name;

// console.log(myText);

// const myText = `Hello, my name is ${name}, and my age is ${2022 - yearOfBirth}
// I hate you
// and I don't like him`;
// console.log(myText);

// let testText =
//   'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem rerum alias repudiandae. Molestiae sunt doloremque mollitia sit voluptate. Dolor veritatis culpa rerum officia necessitatibus. Ex nobis repellat qui aliquid nemo!';

// testText = testText.concat('and I hate you');
// console.log(testText.split(' '));
// console.log('*'.repeat(10));

// const myString = new String('Hello World');
// console.log(myString.valueOf());

// const textNumber = '7.5';

// console.log(parseFloat(textNumber));
// console.log(parseInt(textNumber));
// console.log(Number(textNumber));
// console.log(+textNumber);

// const myArr = [1, 2, 3];

// const array1 = [1, 4, 9, 16];

// pass a function to map
// const map1 = array1.map((x) => x * 2);
// const forEach = array1.forEach((x) => x * 2);

// console.log(map1);
// console.log(forEach);
// console.log(array1);

// expected output: Array [2, 8, 18, 32]

// ---------------------------------------
// const array1 = ['M', 'O', 'H', 'A'];
// // MOHA

// const array1 = [1, 2, 3, 4];
// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

// console.log(sumWithInitial);
// expected output: 10

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]
