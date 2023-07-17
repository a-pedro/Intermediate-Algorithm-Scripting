function spinalCase(str) {
  let fixedStr =  str.replace(/([a-z])([A-Z])/g, "$1_$2");
  let regex = /[\s_]+/g;
  return fixedStr.split(regex).join("-").toLowerCase();
}

console.log(spinalCase('ThisIsSpinalTap'));