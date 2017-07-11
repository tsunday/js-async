function* nextFromArray(arr) {
  for (el in arr) {
    yield arr[el];
  }
}

let gen = nextFromArray([1, 2, 3, 4, 5]);

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);