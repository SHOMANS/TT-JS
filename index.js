// const myButton = document.querySelector('button');

// window.onscroll = () => {
//   if (window.scrollY > 200) {
//     myButton.style.display = 'block';
//   } else {
//     myButton.style.display = 'none';
//   }
// };

// myButton.addEventListener('click', () => {
//   window.scrollTo(0, 0);
//   // window.scrollBy(0, 100);
// });

// ---------------------------------------------

// const myButton = document.querySelector('button');

// myButton.onclick = () => {
//   window.location.assign('https://google.com');
// };

// console.log(window.history);

// ---------------------------------------------

// window.console.log('asdfasd');
// for (let i = 0; i < 2; i++) {
//   let name = 'myName';
//   console.log(window);
// }

// ---------------------------------------------

// var x = 'global';
// console.log(window);

// const p = () => {
//   var x = 'local';
//   console.log(`local : ${x}   global : ${window.x}`);
// };

// p();

// ---------------------------------------------

// let x = 'global';
// console.log(window);

// const p = () => {
//   let x = 'local';
//   console.log(`local : ${x}   global : ${window.x}`);
// };

// p();

// ---------------------------------------------

// const myButton = document.querySelector('button');

// let stopWatch = 0;

// const count = setInterval(() => {
//   stopWatch += 1;
//   if (stopWatch === 3) {
//     clearInterval(count);
//   }
//   console.log(stopWatch);
// }, 1000);

// myButton.onclick = () => {
//   clearInterval(count);
// };

// ---------------------------------------------

// const game = setTimeout(() => {
//   console.log('game over');
// }, 3000);

// myButton.onclick = () => {
//   clearTimeout(game);
// };

// ---------------------------------------------

// const themeChange = (theme) => {
//   console.log(theme);
//   localStorage.setItem('theme', theme);
//   document.body.style.backgroundColor = theme === 'dark' ? 'black' : 'white';
// };

// const darkButton = document.getElementById('dark');
// const lightButton = document.getElementById('light');

// darkButton.onclick = () => themeChange('dark');
// lightButton.onclick = () => themeChange('light');

// ---------------------------------------------

const myButtons = document.querySelectorAll('button');

// console.log(myButtons); // its a collection of buttons

myButtons.forEach((button) => {
  // we loop on the collection like the array and apply function on every button

  // console.log(button);
  button.onclick = () => {
    // const theme = button.id;
    const { id: theme } = button; // destructure the is from button parameter (object) then rename it to theme
    console.log(theme);
    localStorage.setItem('theme', theme);
    document.body.style.backgroundColor = theme === 'dark' ? 'black' : 'white';
  };
});

const theme = localStorage.getItem('theme');
document.body.style.backgroundColor = theme === 'dark' ? 'black' : 'white';
