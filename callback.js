function callbackApi(input, callback) {
  setTimeout(() => {
    callback(input);
  }, 0);
}

console.log('A');
callbackApi('B', function myCallback(output) {
  console.log(output);
});
console.log('C');