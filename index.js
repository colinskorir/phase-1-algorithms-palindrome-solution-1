function isPalindrome(word) {
  // Convert the word to lowercase for case-insensitive comparison
  const reversedWord = word.split('').reverse().join('');
  return word === reversedWord;
}

/* 
  Pseudocode:
  1. Split the word into an array of characters.
  2. Reverse the array.
  3. Join the reversed array back into a string.
  4. Compare the reversed string with the original word.
  5. Return true if they are the same, otherwise return false.
*/

/*
  Explanation:
  A palindrome is a word that reads the same backward as forward. 
  To check this, we reverse the word and compare it to the original.
  If they match, the word is a palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("level"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hello"));
}

module.exports = isPalindrome;
