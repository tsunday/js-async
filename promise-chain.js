const { readFile, fetchUrl } = require('./promise');

// 1. Promise chain

function fetchApi(fileUrl) {
  readFile(fileUrl)
  .then(fetchUrl)
  .then(res => {
    console.log(res.statusCode);
  })
  .catch(err => {
    console.log('Something went wrong: ' + err);
  });
}

fetchApi('url.txt');


// 2. Promise.all

// file = readFile('url.txt');
// get = fetchUrl('http://www.google.com');

// Promise.all([file, get])
// .then(results => {
//   console.log('file: ' + results[0]);
//   console.log('get: ' + results[1].statusCode);
// })
// .catch(console.log);