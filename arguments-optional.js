function addTogether() {
  const [first, second] = arguments;

  if (typeof (first) === "number") {
    if (typeof (second) === "number") return first + second;
    if (arguments.length === 1) return (second) => addTogether(first, second);
  }
}

console.log(addTogether(5)(7));