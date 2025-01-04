//Here we are learning MULTIPLE POINTERS pattern by solving a problem.

// What is the Multiple Pointer Approach?
// The Multiple Pointer Approach is a technique in data structures and algorithms (DSA) that involves using two or more pointers (or indices) to traverse a data structure, typically an array or a linked list. The pointers move at different speeds or directions, depending on the problem. This approach is often used to solve problems efficiently by reducing the need for nested loops.

//---------------------------------------------------------------------

//How the Multiple Pointer Approach Works (Step-by-Step):-
//1. Identify the Problem:-

// This technique is suitable for problems that involve:
// --Finding pairs or groups of elements that satisfy a condition.
// --Comparing elements at different positions.
// --Optimizing operations on sorted arrays or linked lists.

//2. Set Up Pointers:-
// --Use two or more pointers or indices.
// --Typically, pointers start at:
//// --Opposite ends of the array (e.g., left and right pointers).
//// --The same position but move at different speeds (e.g., slow and fast pointers).

//3. Traverse the Data:
// --Move the pointers based on the logic required to solve the problem.
// --Adjust the pointers until the desired condition is met.

//4. Terminate:
// --Stop when pointers overlap, cross, or reach the end of the data structure.

//---------------------------------------------------------------------

// Use Cases:-
//1. Reversing an Array:
// Use two pointers, one at the start and one at the end, swapping elements as you go inward.

//2. Detecting a Cycle in a Linked List:
// Use a slow pointer and a fast pointer. If they meet, there’s a cycle.

//3. Checking a Palindrome:
// Use two pointers, one at the start and one at the end, comparing characters as you move inward.

//---------------------------------------------------------------------

// Advantages of the Multiple Pointer Approach:-
//1. Reduces time complexity compared to nested loops.
//2. Efficient for sorted data or data that can be traversed sequentially.

//---------------------------------------------------------------------

//Solving a Problem:-

//Practical example to learn multiple pointers:- Write a function called sumZero which accepts a sorted array of integers as input. the function should find the first pair where the sum is zero. Return an array that includes both values that sum to zero or undefined if a pair does not exist. input array must be sorted.

//example
//input value is ([-3, -2, -1, 0, 1, 2, 3]) which return [-3, 3]

//conventional solution using nested loop step by step:- It has complexity O(n^2)
//1. We will grab one element of array and then will plus it with other elements of array one-by-one by using for-loop and we will continue this process with all other elements of array.
//2. if we get 0 when we do addition then we return array of those elements otherwise return "undefined".

let inputArr1 = [-3, -2, -1, 0, 1, 2, 3];
let inputArr2 = [-2, -1, 0, 5, 6];

function sumZeroConventional(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

// let output = sumZero(inputArr);
// console.log(output);

let output2 = sumZeroConventional(inputArr2);
// console.log(output2);

//Solution 2:- Using multiple pointer approach-----------------------------

//Second solution of sum zero problem. This solution has O(n) complexity. We are using multiple pointer approach to solve this problem.

let inputArr3 = [-9, -8, -1, 0, 1, 2, 3, 7, 10, 12, 13];

function sumZeroMultiplePointers(arr) {
  let left = 0; //pointer-1
  let right = arr.length - 1; //pointer-2

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

let output3 = sumZeroMultiplePointers(inputArr3);
console.log(output3);

//Logic:-
//We have got sorted array as input then for solution we take two variables/pointers "right, and left". so "left" variable keeps element of 0 index and move towards right. and "right" variable keeps element of last index and move towards left.
//then we do sum of right and left variables then we check if sum === 0 then return those elements of array then elseIf sum > 0 then right-- otherwise left++.
//So we understand this approach with the example of array [-9, -8, -1, 0, 1, 2, 3, 7, 10, 11] then left variable keeps -9 and right variable keeps 11 then we do "-9 + 11" and get 2 so by condition we do right-- (and "right" variable moves to 10) then in next cycle we do "-9 + 10" and get 1 then by condition we do right-- (and "right" variable moves to 7) and then we do "-9 + 7" then we get -2 then by condition we this time we do left++ instead of right-- because in the last sum (-9 + 7) we got negative value which was -2 and this shows that there no positive 9 on the right side so there is no mean to use -9 in the sum (it means there is no possibility to get 0 when do sum with -9) with the rest positive values, that is why we do left++.

//---------------------------Second Problem--------------------------------

//Another problem to solve using Multiple Pointer Approach:-

//Problem:- Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array and then return the length of the array. There can be negative numbers in the array but it always be sorted.

//Logic:-

//suppose input is [1, 1, 1, 2, 3, 3, 4, 4, 5, 6];

//he took two pointers/variables "i" and "j".
//i will start from 0 index and j will start from 1 index.
//then compare i's value with j's value when found similar then i will remain at the same place but j will go ahead to next element and then again we compare i with j if we found similar then i remain at same place but j will go ahead to next element then we compare i with j then we found that i's value is different from j's value then i goes to the next element and then we take j's value and replace with the i's value and then we do the same process with other elements.
//after 2nd step array will look like this [1, 2(i), 1, 1(j), 3, 3, 4, 4, 5, 6].
//then in the end we will have array like this [1, 2, 3, 4, 5, 6(i), 4, 4, 5, 6].
//then we will get the index of "i" pointer and then add 1 to it so that will be the length of unique array.

function countUniqueValues3(arr) {
  if (arr.length === 0) return 0;

  let length = arr.length;
  let j = 1; //pointer-1
  let i = 0; //pointer-2

  while (j < length) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
    j++;
  }
  return i + 1;
}

//input values
let inputArr = [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13];

//expected output
//7

let outPut = countUniqueValues3(inputArr);
console.log(outPut); //7

//---------------------------Third Problem--------------------------------

// Example Problem: Finding a Pair with a Target Sum

// Problem:-
// Given a sorted array, find two numbers that add up to a given target sum.

// Example Input:
// Array: [1, 2, 3, 4, 6], Target: 6

// Approach Using Multiple Pointers:-

//1. Set Up Pointers:-
// --Place one pointer (left) at the start of the array (index 0).
// --Place another pointer (right) at the end of the array (index 4).

//2. Move Pointers Based on the Sum:-
// --Calculate the sum of the values at left and right.
// --If the sum equals the target, return the pair.
// --If the sum is smaller than the target, move the left pointer one step to the right (increase the sum).
// --If the sum is larger than the target, move the right pointer one step to the left (decrease the sum).

//3. Terminate:
// Stop when left meets or crosses right.

// Execution:-
//1. Start: left = 0 (1), right = 4 (6) → Sum = 7 (too large, move right).
//2. Next: left = 0 (1), right = 3 (4) → Sum = 5 (too small, move left).
//3. Next: left = 1 (2), right = 3 (4) → Sum = 6 → Target found: (2, 4).

function pairToTarget(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === target) {
      return [arr[left], arr[right]];
    } else if (sum < target) {
      7 < 6;
      left++;
    } else {
      right--;
    }
  }
  return "No Sum found equal to given target";
}

let sortedArr1 = [1, 2, 3, 4, 6];
let target1 = 6;

let sortedArr2 = [-2, -1, 0, 1, 2, 3, 4, 6, 8, 11, 12, 14, 20];
let target2 = 12;
console.log(pairToTarget(sortedArr2, target2));
