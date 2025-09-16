function consecutiveSubstrings(string) {
  // type your code here
  const subStrings = [];
  for (let i = 0; i < string.length; i++) {
    for (let j = i; j < string.length; j++){
      subStrings.push(string.slice(i, j + 1));
    }
  }
  return subStrings;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
}

module.exports = consecutiveSubstrings;


