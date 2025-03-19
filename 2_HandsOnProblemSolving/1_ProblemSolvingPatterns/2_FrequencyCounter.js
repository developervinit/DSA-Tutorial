//Frequency Counter Pattern.

//The Frequency Counter Pattern is a problem-solving technique in data structures and algorithms that uses objects or hash maps to collect and compare frequencies of data values. This approach is highly efficient for problems that involve analyzing data patterns, finding duplicates, or comparing collections.

// Instead of using nested loops (which often result in O(n²) time complexity), the frequency counter pattern leverages an object/map to keep track of occurrences, reducing time complexity to O(n) in most cases.

//How It Works:-
////1.Create a frequency counter (usually an object or hash map):
////// Count the frequency of each element in one or more data collections.
////2.Analyze or compare the frequencies:
/////// Check conditions like matching frequencies, identifying duplicates, etc.
////3.Return the result:
////// Use the frequency map to derive the answer to the problem.

//Why Use the Frequency Counter Pattern?:-
////Efficiency: Replaces nested loops with a single pass, reducing time complexity from O(n²) to O(n).
////Simplicity: Makes the solution cleaner and easier to understand.
////Versatility: Can be applied to a wide range of problems involving comparisons, counts, or subsets.

//Problems Solved Using Frequency Counter Pattern:-
////1.Anagram Check-
////// Problem:- Determine if two strings are anagrams (contain the same characters in the same frequencies).
////// Example:- "cinema" and "iceman" are anagrams.
////// Approach:- Create frequency counters for both strings and compare their keys and values.
////2.Finding Duplicates-
////// Problem: Check if an array contains duplicate elements.
////// Example: [1, 2, 3, 4, 2] has duplicates.
////// Approach: Use a frequency counter to track occurrences of each element.
////3.Same Frequency of Digits
////// Problem: Determine if two numbers have the same frequency of digits.
////// Example: 182 and 281 have the same digit frequencies.
////// Approach: Convert numbers to strings, create frequency counters, and compare.
//// 4.Subset Comparison
////// Problem: Check if one array is a subset of another.
////// Example: [1, 2, 3] is a subset of [1, 2, 3, 4, 5].
////// Approach: Count frequencies of elements in both arrays and compare.
////5.Character Matching
////// Problem: Count how many times characters in one string can completely "fit" into another string.
////// Example: "abc" can fit into "aabbcc" once.
////// Approach: Create frequency counters for both strings and compare counts.
////6.Check for Permutations
//////Problem: Determine if one string is a permutation of another.
//////Example: "abcd" is a permutation of "dcba".
//////Approach: Compare frequency counters of both strings.
////7.Element Pairing
//////Problem: Check if elements in one array can be paired with elements in another array following a rule.
//////Example: [1, 2, 3] squares to [1, 4, 9].
//////Approach: Count frequencies of elements in both arrays and verify relationships.

//to understand the pattern lets solve the problem:
//Problem - Write a function called "same" which accepts to arrays and the function should return true if every value in the array has its corresponding values squared in the second array. The frequency of values must be the same. (places can be different but frequency has to be same).

//Example of problem
//[1, 2, 3] [4, 1, 9] //true
//[1, 2, 3] [1. 9] //false
//[1, 2, 1] [4, 4, 1] //false

//solution 1 which is not using frequency counter and having nested loops in which first loop is for-loop and inside it second is indexOf() loop. so this solution has time  complexity O(N^2).

function sameOne(arrOne, arrTwo) {
  if (arrOne.length !== arrTwo.length) return false;

  for (var i = 0; i < arrOne.length; i++) {
    let indexOfArrTwo = arrTwo.indexOf(arrOne[i] ** 2);
    if (indexOfArrTwo === -1) {
      return false;
    } else {
      arrTwo.splice(indexOfArrTwo, 1);
    }
  }
  return true;
}

let arrOne = [1, 2, 1];
let arrTwo = [4, 1, 1];

let arrThree = [1, 2, 3];
let arrFour = [4, 50, 45];

let arrFive = [1, 2, 1];
let arrSix = [1, 4, 1];

let arrSeven = [2, 2, 3];
let arrEight = [4, 1, 9];

//inputs
// console.log(sameOne(arrOne, arrTwo)); //true
// console.log(sameOne(arrThree, arrFour)); //false
// console.log(sameOne(arrFive, arrSix)); //true
// console.log(sameOne(arrSeven, arrEight)); //false

//Refactored above function "sameOne" with FREQUENCY COUNTER PATTERN. and reducing complexity from O(N^2) to O(N).

// let arrOne = [2, 3, 5];
// let arrTwo = [4, 25, 9];

function sameTwo(arrOne, arrTwo) {
  if (arrOne.length !== arrTwo.length) return false;

  let freqCounterOne = {};
  let freqCounterTwo = {};

  for (let val of arrOne) {
    freqCounterOne[val] = (freqCounterOne[val] || 0) + 1;
  }
  for (let val of arrTwo) {
    freqCounterTwo[val] = (freqCounterTwo[val] || 0) + 1;
  }

  for (let key in freqCounterOne) {
    console.log("freqCounterTwo", freqCounterTwo[key ** 2]);
    //here we check the arrayOne's elements square value is present in arrayTwo as element. and we doing this using object
    if (!(key ** 2 in freqCounterTwo)) {
      return false;
    }
    //freqCounterTwo[key ** 2] => freqCounterTwo[1 ** 2] => freqCounterTwo[1] => 2
    //freqCounterOne[key] => freqCounterOne[1] => 2

    //freqCounterTwo[key ** 2] => freqCounterTwo[2 ** 2] => freqCounterTwo[4] => 1
    //freqCounterOne[key] => freqCounterOne[2] => 1

    //here we check the occurrence of elements in array one and two which should be similar. and we are doing this using object
    if (freqCounterTwo[key ** 2] !== freqCounterOne[key]) {
      return false;
    }
  }
  console.log(freqCounterOne);
  console.log(freqCounterTwo);
  return true;
}

console.log(sameTwo(arrOne, arrTwo)); //true
// console.log(sameTwo(arrThree, arrFour)); //false
// console.log(sameTwo(arrFive, arrSix)); //true
// console.log(sameTwo(arrSeven, arrEight)); //false
