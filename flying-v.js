const fs = require('fs');
const http = require('http');

function fetchApi(fileUrl) {
  fs.readFile(fileUrl, 'utf8', (err, result) => {
    console.log(result);
    if (!err) {
      setTimeout(() => {
        http.get(result, (res) => {
          console.log(res.statusCode);
        })
      }, 1000)
    }
  });
}

fetchApi('url.txt');