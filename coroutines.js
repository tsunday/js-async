const api = require('./promise');

function* fetch(fileUrl) {
  let result = yield api.readFile(fileUrl);
  console.log(result);
  let res = yield api.fetchUrl(result);
  console.log('Success ' + res.statusCode);
}

// 1. Manual

let gen = fetch('./url.txt');
gen.next().value.then(val => {
  gen.next(val).value.then(val => {
    gen.next(val);
  });
});

// 2. Co library
// const co = require('co');

// co(function *(){
//   let result = yield api.readFile('./url.txt');
//   console.log(result);
//   let res = yield api.fetchUrl(result);
//   console.log('Success ' + res.statusCode);
// }).catch(console.error);


