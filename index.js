// const myButton = document.querySelector('button');
// const myDiv = document.querySelector('div');

// const langs = {
//   ar: {
//     buttonText: 'en',
//     divText: 'مرحبا أيها العالم',
//   },
//   en: {
//     buttonText: 'العربية',
//     divText: 'Hello World',
//   },
// };

// let lang = localStorage.getItem('lang') || 'en';

// const changeLangs = (lang) => {
//   myButton.textContent = langs[lang].buttonText;
//   myDiv.textContent = langs[lang].divText;
//   // if (lang === 'en') {
//   //   myButton.textContent = langs.en.buttonText;
//   //   myDiv.textContent = langs.en.divText;
//   // } else {
//   //   myButton.textContent = langs.ar.buttonText;
//   //   myDiv.textContent = langs.ar.divText;
//   // }
// };

// const toggleLang = () => {
//   lang = lang === 'en' ? 'ar' : 'en';
//   window.localStorage.setItem('lang', lang);
//   changeLangs(lang);
// };

// changeLangs(lang);

// myButton.onclick = toggleLang;

// --------------------------------------------

// const xhr = new XMLHttpRequest();

// xhr.onreadystatechange = () => {
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     console.log(JSON.parse(xhr.response));
//   } else if (xhr.readyState === 4 && xhr.status !== 200) {
//     throw Error('sth went wrong');
//   }
// };

// xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
// xhr.send();

// const callApi = async (method, url) => {
//   const xhr = new XMLHttpRequest();

//   xhr.onreadystatechange = () => {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       return JSON.parse(xhr.response);
//     } else if (xhr.readyState === 4 && xhr.status !== 200) {
//       throw Error('sth went wrong');
//     }
//   };

//   xhr.open(method, url, true);
//   xhr.send();
// };

// callApi('GET', 'https://jsonplaceholder.typicode.com/posts').then((res) => console.log(res));

// --------------------------------------------

// const myPost = {
//   userId: 1,
//   title4234: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
//   body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
// };

// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(myPost),
// })
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((error) => {
//     console.log('error', error);
//   });

// console.log(myData);

// --------------------------------------------

fetch('https://jsonplaceholder.typicode.com/posts/1', {})
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((error) => {
    console.log('error', error);
  });

// --------------------------------------------

const myPost = {
  userId: 1,
  title: 'new',
  body: 'new',
};

fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'delete',
  headers: {
    'Content-Type': 'application/json',
  },
  // body: JSON.stringify(myPost),
})
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((error) => {
    console.log('error', error);
  });

console.log(myData);

// --------------------------------------------
