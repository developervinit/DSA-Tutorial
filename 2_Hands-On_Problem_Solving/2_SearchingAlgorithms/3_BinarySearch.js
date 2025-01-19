//Here we are learning binary search.

//What is binary search?
//Binary search is an efficient algorithm used to find the position of a target element in a sorted array or collection by repeatedly dividing the search interval in half. At each step, the algorithm compares the target value to the middle element of the current search range and determines whether to continue the search in the left or right half, effectively reducing the search space by half at each iteration. Binary search is widely used in computer science for its efficiency in searching sorted datasets.

//Note:- Binary search is called "binary" because it repeatedly divides the search space into two halves during each step of the algorithm, based on the principle of "divide and conquer".

//Pseudo code:-
//1. Initialize two pointers:
////1. low pointing to the first index.
////2. high pointing to the last index.
//2. Calculate the middle index: mid=⌊(low+high)/2⌋.
//3. Compare the middle element with the target:
////1. If the middle element is equal to the target, the search is complete.
////2. If the middle element is greater, narrow the search to the left half (high = mid - 1).
////3. If the middle element is smaller, narrow the search to the right half (low = mid + 1).
//4. Repeat until the target is found or the search space is empty.

//Input Requirement:- The array or collection must be sorted.

//Time Complexity:- O(log n), n is the number of elements in the array.

//Space Complexity:- The space complexity of binary search depends on how it is implemented.
////1. In an iterative implementation: O(1).
////2. In a recursive implementation: O(log n).

//Code Example:-
function binarySearchColt(arr, val) {
  let low = 0;
  let high = arr.length;
  let middle = Math.floor((low + high) / 2);
  while (arr[middle] !== val && low <= high) {
    if (val < arr[middle]) {
      high = middle - 1;
    } else {
      low = middle + 1;
    }
    middle = Math.floor((low + high) / 2);
  }
  return arr[middle] === val ? middle : -1;
}

input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 16, 18]; //sorted array.

let outPut4 = binarySearchColt(input, 4);
console.log(outPut4); //3
