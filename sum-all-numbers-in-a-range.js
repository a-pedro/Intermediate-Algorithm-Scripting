function sumAll(arr) {
  let accumulator = 0;
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++){
    accumulator += i;
  }
  return accumulator;
}

console.log(sumAll([1, 4]));