//Here we are learning SLIDING WINDOW TECHNIQUE.

//Sliding Window:- The sliding window technique is a popular algorithmic approach used for solving problems involving arrays, strings, or other sequential data structures. It involves creating a window (a range or subset) over the elements of the data structure and moving or sliding this window across the entire sequence to perform specific operations efficiently.
//This technique is particularly useful when dealing with problems that require finding a subarray, substring, or a contiguous segment of elements that meets certain criteria—such as a maximum sum, minimum length, distinct elements, etc.

//The basic idea behind the sliding window technique involves:-

//1. Setting up initial window: Define an initial window with a start and end index that satisfies certain constraints or criteria related to the problem.
//2. Expanding and contracting the window: Incrementally move or "slide" the window, either by expanding it (increasing the end index) or by contracting it (increasing the start index), while maintaining the constraints and updating the solution accordingly.
//3. Updating solution: Continuously compute or update the solution by considering the elements within the current window.

//The sliding window technique can help achieve solutions with better time complexity compared to naive or brute-force approaches. By efficiently maintaining and updating the window, it optimizes the computation and reduces unnecessary recalculations.

//--------------------------EXAMPLE-------------------------

//Problem - Write a function called maxSubarraySum which accepts an array of integers and a number called n. the function should calculate the maximum sum of n consecutive elements in the array.

//solution1:- Using Brute-force with nested for-loop which has O(n^2) time complexity (not using sliding window technique).

function maxSubarraySum(arr, n) {
  if (arr.length < n) return null;

  let max = -Infinity;

  for (let i = 0; i < arr.length - n + 1; i++) {
    let temp = 0;
    for (let j = 0; j < n; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

let input = [1, 2, 5, 3, 8, 1, 5];
let num = 3;

// let outPut = maxSubarraySum(input, num);
// console.log(outPut);

//------------------------SOLUTION-2-----------------------------

//Solution with sliding window technique. this solution has O(n) time complexity and O(1) space complexity.

//This approach has:-
// Time Complexity: O(n)
// Space Complexity: O(1)

//Logic Explanation:-

//Step 1: Initialize Variables

////--Create two variables
////tempSum - A temporary sum for the current window of size n. Initially set to 0.
////maxSum - Stores the maximum sum found so far. Initially set to 0.

//Step 2: Calculate the Initial Window Sum

////Add the first n elements of the array and store their sum in tempSum. For example, given the array [1, 2, 5, 3, 8, 1, 5] and n = 3, calculate: tempSum=1+2+5=8.

//Step 3: Slide the Window Across the Array

////Now, slide the window one element to the right at a time:
////Subtract the element that is leaving the window (arr[i-n]).
////Add the element that is entering the window (arr[i]).
////Update tempSum to reflect the new window sum.
////Compare tempSum with maxSum and update maxSum if tempSum is greater.

//Step 4: Repeat Until the End of the Array
// Start the sliding window from index i = n (the 4th element in the array for this example) and continue until the end of the array.

function maxSubarraySum2(arr, n) {
  if (arr.length < n) return null;

  //window created using two variable-pointers
  let tempSum = 0;
  let maxSum = 0;

  for (var i = 0; i < n; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (var i = n; i < arr.length; i++) {
    tempSum = tempSum - arr[i - n] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

let outPut2 = maxSubarraySum2(input, num);
console.log(outPut2);
