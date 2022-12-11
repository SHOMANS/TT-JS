// const callApi = (method, url) => {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = () => {
//       if (xhr.readyState === 4 && xhr.status === 200) {
//         resolve(JSON.parse(xhr.response));
//       } else if (xhr.readyState === 4 && xhr.status !== 200) {
//         reject('sth went wrong');
//       }
//     };

//     xhr.open(method, url);
//     xhr.send();
//   });
// };

// callApi('GET', 'https://jsonplaceholder.typicode.com/posts').then((res) => console.log(res));

// --------------------------------------------

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve('foo');
//     if (true) {
//       resolve('done');
//     } else {
//       reject('failed');
//     }
//   }, 3000);
// });

// myPromise
//   .then((handleFulfilledA) => {
//     console.log(handleFulfilledA);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log('finally');
//   });

// console.log('after');

// --------------------------------------------

// const myFirstFunction = () => {
//   mySecondFunction();
//   console.log('first');
// };

// const mySecondFunction = () => {
//   myThirdFunction();
//   console.log('second');
// };
// const myThirdFunction = () => {
//   console.log('third');
// };

// myFirstFunction();

// --------------------------------------------

// setTimeout(() => {
//   console.log('first');
// }, 2);

// setTimeout(() => {
//   console.log('second');
// }, 1);

// setTimeout(() => {
//   console.log('third');
// }, 0);

// console.log('out');

// --------------------------------------------

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve('foo');
//     if (true) {
//       resolve('done1');
//     } else {
//       reject('failed');
//     }
//   }, 3000);
// }).then((data) => {
//   console.log(data);
// });

// const myPromise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve('foo');
//     if (true) {
//       resolve('done2');
//     } else {
//       reject('failed');
//     }
//   }, 2);
// }).then((data) => {
//   console.log(data);
// });

// (async function myFunction() {
//   await myPromise;
//   console.log('async1');
//   await myPromise2;
//   console.log('async2');
// })();

// --------------------------------------------

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then((response) => response.json())
//   .then((json) =>
//     fetch('https://jsonplaceholder.typicode.com/todos/1', {
//       method: 'put',
//       body: {
//         title: 'delectus aut autem',
//       },
//     })
//       .then((response) => response.json())
//       .then()
//   )
//   .catch((err) => console.log(err))
// --------------------------------------------

// async function newFunc2() {}

(async () => {
  // get todo which has id 1
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await response.json();
  console.log('data', data);

  // update todo which has id 1 that comes from the response of get
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/' + data.id, {
    method: 'put',
    body: JSON.stringify({
      title: 'new',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const data2 = await res.json();
  console.log('data2', data2);

  // update todo which has id 1 that comes from the response of get again
  const res2 = await fetch('https://jsonplaceholder.typicode.com/todos/' + data.id, {
    method: 'put',
    body: JSON.stringify({
      title: 'new test',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const data3 = await res2.json();
  console.log('data3', data3);

  console.log('done');
})();
