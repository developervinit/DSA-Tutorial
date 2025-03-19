//Linear Search Algorithm 🔍

//The naive string search algorithm is a straightforward way to find occurrences of a "pattern" string within a larger "text" string. It works by sliding the pattern across the text, one character at a time, and checking for a match at each position.

//-----------------------------------------

//Here's how it works conceptually:

//1. Initialization: Start at the beginning of the text and the beginning of the pattern.
//2. Comparison: Compare the first character of the pattern with the first character of the text.
//3. Match: If they match, compare the second character of the pattern with the second character of the text, and so on.
//4. Complete Match: If all characters of the pattern match the corresponding characters in the text, you've found a match! Record the starting index of the match in the text.
//5. Mismatch: If any characters don't match, shift the pattern by one position to the right in the text and start the comparison again from the beginning of the pattern.
//6. End of Text: If you reach the end of the text without finding a complete match, the pattern does not exist in the text.

//-----------------------------------------

//The naive string search algorithm has a time complexity of O(m*n) in the worst case, where n is the length of the text and m is the length of the pattern. This occurs when the pattern almost matches the text at every position, requiring many comparisons.

//-----------------------------------------

//Pseudo Code:-
//function naiveStringSearch(text, pattern)
////set count to 0
////for each index i from 0 up to the last possible starting position in the text (text length minus 1)
//////for each index j from 0 up to the last character of the pattern (pattern length minus 1)
////////if the character at position (i plus j) in the text is not the same as the character at position j in the pattern stop the inner loop (because there's no match at this starting position)
////////if the inner loop reached the end (j is the last character of the pattern increase count by 1 (because a full match of the pattern was found)
////return the final count.

//Naive search code:-
function naiveStringSearch(str, subStr) {
  let count = 0;
  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < subStr.length; j++) {
      if (str[i + j] !== subStr[j]) {
        break;
      }
      if (j === subStr.length - 1) {
        count++;
      }
    }
  }
  return count;
}

let input = "wowomgzomgomg";
let subStr = "omg";

let outPut = naiveStringSearch(input, subStr);
console.log(outPut); //3
