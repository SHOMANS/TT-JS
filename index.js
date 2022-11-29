//------------------------------------------------------------------------------
// outputs
//------------------------------------------------------------------------------

// console.log('Hello World'); // printing

// alert('Helllo');

// document.write('Hello From Javascript'); // to print in the document

//------------------------------------------------------------------------------
// comments
//------------------------------------------------------------------------------

// single line comment

/*
multiline comment
console.log(object);
console.log(object);
console.log(object);
console.log(object);
console.log(object);
*/

//------------------------------------------------------------------------------
// var, let, const
//------------------------------------------------------------------------------

// console.log(myGlobalVar); // var => can access the variable before declaration
// var myGlobalVar = 5;
// console.log(myGlobalVar);

// console.log(myLetVar); // let => Cannot access 'myLetVar' before initialization
// let myLetVar = 5;
// console.log(myLetVar);

// var test = 'test';
// console.log(test);
// var test = 'new test'; var can be redeclare
// console.log(test);

// let test = 'test';
// console.log(test);
// let test = 'new test'; let can not be redeclare => error
// console.log(test);

// var test = 'my test';
// for (let i = 0; i < 2; i++) {
//   var test = 'his test'; // redeclare
//   console.log(test);
// }
// console.log(test); // print "his test" => test is the redeclare one

// let testLet = 'my test';
// for (let i = 0; i < 2; i++) {
//   let testLet = 'his test';
//   console.log(testLet);
// }
// console.log(testLet); // print my test => can redeclare it in another scope

// let test = 'my test';
// for (let i = 0; i < 2; i++) {
//   test = 'his test';
//   console.log(test);
// }
// console.log(test); // it will print "his test"

//------------------------------------------------------------------------------

// console.log(1 + 2);
// console.log(1 + '2');
// console.log('1' + 2);

// console.log(3 - 2);
// console.log(3 - '4');
// console.log(3 - 'Rayan');

// console.log(3 * 2);
// console.log(3 * '4');
// console.log(3 * 'Rayan');

// console.log(3 / 2);
// console.log(3 / '4');
// console.log(3 / 'Rayan');

// let x = 0;
// console.log(x);
// console.log(x++); // 0

// let y = 0;
// console.log(y);
// console.log(++y); // 1

// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// console.log('Abd' || true);
// console.log(0 || true);
// console.log(false || 0);
// console.log(false || undefined);
// console.log(false || null);
// console.log(false || NaN);
// console.log(false || true);

// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// console.log('Abd' && true);
// console.log(0 && true);
// console.log(false && 0);
// console.log(false && undefined);
// console.log(undefined && null);
// console.log(0 && NaN);
// console.log(null && true);

// console.log(true && NaN);
// console.log({} && 0);
// console.log([] && 0);
// console.log(NaN && 0);

// console.log('false' || true);

// console.log(typeof 1);
// console.log(typeof '1');
// console.log(typeof true);
// console.log(typeof []);
// console.log(typeof {});
// console.log(Array.isArray([]));
// console.log(Array.isArray({}));
// console.log(typeof function () {});
// function testtt() {
//   return;
// }
// console.log(typeof testtt);
// const testt = () => {};
// console.log(typeof testt);

// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof NaN);

// console.log(isNaN('mohammed'));
// console.log([] == true);
// console.log(NaN === NaN);
// console.log([] === []);
// console.log({} === {});
// console.log(!!'');

// console.log(1 == '1');
// console.log(1 === '1');

// console.log(1 != '1');
// console.log(1 !== '1');

// let bilal = 'belal';

// // bilal += ' qasem';
// bilal = bilal + ' qasem';

// console.log(bilal);

//------------------------------------------------------------------------------
// functions
//------------------------------------------------------------------------------

// regular function
// function functionName () {
// }

// function println(value) {
//   console.log(value);
// }

// arrow function
// const println = (value) => {
//   console.log(value);
// };

// const println = (value) => console.log(value);

// calling function (execute or invoke)
// println('Rayan');
// println(6);
