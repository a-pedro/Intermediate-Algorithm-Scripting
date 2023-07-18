function uniteUnique(...arr) {
  let response = [];
  for (let arrays of arr){
    for (let element of arrays){
     if(! response.includes(element)){
       response.push(element);
     }
    }
  }
  return response
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));