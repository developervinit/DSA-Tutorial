//Merge Sort algorithm ⬆️⬇️


//What is Merge Sort?
// Merge Sort is a divide and conquer sorting algorithm that:
// Divides the array into smaller subarrays until each subarray has only one element.
// Merges the subarrays back together in sorted order.
// It is efficient for sorting large datasets due to its predictable time complexity.

//----------------------------------------

//Why Use Merge Sort?
// ✅ Stable Sort: Maintains the order of equal elements.
// ✅ Efficient for large data: Works well on linked lists and external sorting (large files on disk).
// ✅ Predictable time complexity: Unlike quicksort, which can degrade to O(N^2), Merge Sort always runs in O(N log N) time.


//----------------------------------------

// Where is Merge Sort Used?
// Used in:

// Sorting linked lists (since it doesn't require random access like QuickSort).
// External sorting, where data is too large to fit into memory.
// Parallel computing, since it can be easily implemented with multiple processors.


//----------------------------------------

//Space and Time Complexity of Merge Sort:-

//Time Complexity: Worst Case (Reverse Sorted) O(N log N).
//Space Complexity: O(N) auxiliary space (because we use temporary arrays for merging). Not in-place (requires extra space).

//----------------------------------------

//Merge Sort Algorithm (Plain English):-


//MergeSort Function
////If the array has only one element, return it (already sorted).
////Find the middle of the array.
////Recursively apply Merge Sort to the left and right halves.
////Merge the two sorted halves into a single sorted array.

//Merge Function
////Create two temporary arrays for the left and right halves.
////Compare elements from both halves one by one and place the smaller one into the final array.
////If one half is exhausted, add the remaining elements from the other half.


//Example Walkthrough:-

// Sorting [8, 3, 5, 2, 7, 6, 4, 1]

//Step1:- Divide
//[8, 3, 5, 2]    [7, 6, 4, 1]
//[8, 3] [5, 2]    [7, 6] [4, 1]
//[8] [3] [5] [2]    [7] [6] [4] [1]  ✅ Base case reached

//Step2:- Merge Back
//[3, 8] [2, 5]    [6, 7] [1, 4]
//[2, 3, 5, 8]    [1, 4, 6, 7]
//[1, 2, 3, 4, 5, 6, 7, 8] ✅ Sorted!

//----------------------------------------

//Merge Sort Implementation in JavaScript:-

// Merge function to merge two sorted halves
function merge(leftArr, rightArr) {
    let sortedArray = [];
    let i = 0, j = 0;
  
    // Compare and merge
    while (i < leftArr.length && j < rightArr.length) {
      if (leftArr[i] < rightArr[j]) {
        sortedArray.push(leftArr[i]);
        i++;
      } else {
        sortedArray.push(rightArr[j]);
        j++;
      }
    }
  
    // Add remaining elements (if any)
    return sortedArray.concat(leftArr.slice(i), rightArr.slice(j));
  }
  
  // Merge Sort function
  function mergeSort(arr) {
    if (arr.length <= 1) return arr; // Base case
  
    let mid = Math.floor(arr.length / 2);
    let leftArr = mergeSort(arr.slice(0, mid));  // Recursively sort left half
    let rightArr = mergeSort(arr.slice(mid));   // Recursively sort right half
  
    return merge(leftArr, rightArr); // Merge the sorted halves
  }
  
  // Example Usage
  const array = [8, 3, 5, 2, 7, 6, 4, 1];
  console.log(mergeSort(array)); // [1, 2, 3, 4, 5, 6, 7, 8]
