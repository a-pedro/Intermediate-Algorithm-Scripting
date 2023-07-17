function destroyer(arr) {
  let args = Array.from(arguments)
  let targets = args.splice(1); 
  let newArr = [];

  console.log(args)
  
for (let el of arr){
  if (targets.indexOf(el) === -1){
    newArr.push(el);
  }
}

  return newArr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));