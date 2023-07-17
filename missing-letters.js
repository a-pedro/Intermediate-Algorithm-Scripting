function fearNotLetter(str) {
  for (let i = 0; i < str.length; i++){
    //console.log(i)
    //console.log(str.charCodeAt(i))
    //console.log(str.charCodeAt(0) + i)
    if (str.charCodeAt(i) !== str.charCodeAt(0) + i ) {
      return String.fromCharCode(str.charCodeAt(0) + i)
    }
  }
  
}

console.log(fearNotLetter("abce")); 