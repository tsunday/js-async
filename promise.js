const fs = require('fs');
const http = require('http');

function readFile(fileUrl) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileUrl, 'utf8', (err, result) => {
      if (err) {
        reject(err);
      }
      else {
        resolve(result);
      }
    });
  });
}

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    http.get(url, res => {
      if (res.statusCode != 404) {
        resolve(res);
      }
      else {
        reject(res.statusCode);
      }
    });
  });
}

module.exports = {
  readFile: readFile,
  fetchUrl: fetchUrl
}