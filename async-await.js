const api = require('./promise');

async function fetchApi(fileUrl) {
  let url = await api.readFile(fileUrl);
  let res = await api.fetchUrl(url);
  return res.statusCode;
}

fetchApi('./url.txt').then(console.log).catch(console.error);