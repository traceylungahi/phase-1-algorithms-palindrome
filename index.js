function isPalindrome(word) {
  // Write your algorithm here
  let backWord = word.split("").reverse().join("");

  return word === backWord? true : false;
}

/* 
  Add your pseudocode here
*/
// write a function that receives an argument that is a string
// use the split method on the string to split the string into an array of substrings
// reverse the new array
// use the join method to join the elements of the array to a string
// compare both the original and reversed string
// if the strings match, should return true if not, should return false 
/*
  Add written explanation of your solution here
  For the string to be reversed, the .split() has to be used so that the string can be turned into a new array. The reverse() method reverses the elements in the array. The join() method then joins those elements into a string. The reversde and original strings are then compared, if they match, the output will be true, if not, the output will be false. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
