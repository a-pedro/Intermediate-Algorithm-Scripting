function pairElement(str) {
  let result = [];
  for (let element of str){
    console.log(element)
    if (element === "G"){
      result.push(["G", "C"])
    }else if (element === "C") {
  result.push(["C", "G"])
    }else if (element === "A"){
      result.push(["A", "T"])
    } else if (element === "T"){
      result.push(["T", "A"])
    }
  }


  return result;
}

console.log(pairElement("GCG"));