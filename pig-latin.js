function translatePigLatin(str) {
  return str.replace(/(^[aeiou]+\w*)/,"$1way").replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
}

console.log(translatePigLatin("algorithm"));