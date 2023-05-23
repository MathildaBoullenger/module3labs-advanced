// run 'npm init' and accept all the defaults
// run 'npm install node-fetch'
// add this line to package.json after line 5: "type": "module",
import fetch from 'node-fetch'
globalThis.fetch = fetch

function fetchURLData(url) {
    let fetchPromise = fetch(url).then(response => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error(`Request failed with status ${response.status}`);
        }

    });
    return fetchPromise;
}
fetchURLData('https://jsonplaceholder.typicode.com/todos/1')
.then(data => console.log(data))
.catch(error => console.error(error.message));

//a.

async function fetchURLDataAsync(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
fetchURLDataAsync('https://jsonplaceholder.typicode.com/todos/1')
.then(data => console.log(data))
.catch(error => console.error(error.message));

//b.
/*When given an invalid url we see slightly different error messages as the first function has a defined custom error message. 
In both cases, the error message will give us information on the error*/

//c.

const urls = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/users/1'
  ];

async function fetchURLDataAsync1(urls) {
    const promises = urls.map(url => fetch(url));
    const responses = await Promise.all(promises);
    const data = await Promise.all(responses.map(response => response.json()));
    return data;
}

fetchURLDataAsync1(urls)
  .then(data => {
    console.log(data); // Array of fetched and parsed data
  })
  .catch(error => {
    console.error(error.message);
  });
