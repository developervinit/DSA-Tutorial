//Quick Sort algorithm ⬆️⬇️

//What is Quick Sort?

//Quick Sort is a divide-and-conquer sorting algorithm that:
//1. Picks an element as a pivot.
//2. Partitions the array so that elements smaller than the pivot go to the left and larger ones go to the right.
//3. Recursively sorts the left and right partitions.

//----------------------------------------

//Why Use Quick Sort?

//Quick Sort is one of the fastest sorting algorithms in practice because:
// ✅ Efficient on Large Datasets – It has an average time complexity of O(n log n), which is faster than O(n²) algorithms like Bubble Sort or Insertion Sort.
// ✅ In-Place Sorting – Unlike Merge Sort, Quick Sort doesn't require extra memory for merging (except for recursion stack).
// ✅ Divide and Conquer – It splits the array into smaller parts, solving them independently, which makes it very efficient.
// ✅ Used in Real-World Applications – Many programming languages (like JavaScript's sort()) use Quick Sort or a variation of it.

//----------------------------------------

//Space and Time Complexity of Quick Sort:-

//Time Complexity:-
//Best & Average Case (O(n log n)): When the pivot divides the array into nearly equal halves, the depth of recursion is log n, and each level processes n elements.
//Worst Case (O(n²)): If the pivot is always the smallest or largest element, one partition is empty, and recursion happens n times, leading to O(n²) complexity.

//Space Complexity:-
//O(log n) (Best/Average Case): Due to recursive calls, the call stack depth is log n when partitions are balanced.
//O(n) (Worst Case): When partitions are unbalanced, recursion can go n levels deep, requiring O(n) space.

//Quick Sort is efficient for large datasets but can degrade to O(n²) if not optimized with a good pivot selection strategy (e.g., median-of-three).

//----------------------------------------

//Quick Sort Pseudo Code (Plain English)
// Here’s how Quick Sort works step by step:

//1️⃣ Choose a Pivot: Pick an element from the array (commonly first, last, or a random element).
//2️⃣ Partition the Array:
////Move all smaller elements to the left of the pivot.
////Move all larger elements to the right of the pivot.
//3️⃣ Recursively Sort Left & Right Parts:
// Repeat the process for the left and right partitions until the whole array is sorted.

//Explanation of Quick Sort with example:-

// Initial Array: [5, 2, 1, 8, 4, 7, 6, 3]
// Pivot = 5
// Start with i = 0 (pivot's index)

// Steps |	(j) |	Element (arr[j]) |	Condition (< 5 or > 5?) |	i (Next Available Position) Before Swap |	Swap? |	Old Array |	Updated Array (After Swap) |	i (After Swap)

// Step1 |	(j) 1 |	Element (arr[j]) 2 |	(Condition) 2 < 5 ✅ |	i = 1 |	Swap 2 with 2 (no real change) |	(Old Array) [5, 2, 1, 8, 4, 7, 6, 3] |	(Updated Array) [5, 2, 1, 8, 4, 7, 6, 3] | (Increase After Swap) i = 2

// Step2 | (j) 2 |	Element (arr[j]) 1 |	(Condition) 1 < 5 ✅ |	i = 2 |	Swap 1 with 1 (no real change) |	(Old Array) [5, 2, 1, 8, 4, 7, 6, 3] |	(Updated Array) [5, 2, 1, 8, 4, 7, 6, 3] |	(Increase After Swap) i = 3

// Step3 |	(j) 3 |	 Element (arr[j]) 8 | (Condition)	8 > 5 ❌ |	i = 3 (No Change) |	No Swap |	(Old Array) [5, 2, 1, 8, 4, 7, 6, 3] | (Updated Array) [5, 2, 1, 8, 4, 7, 6, 3] | (No Change After Swap)	i = 3

// Step4 | (j) 4 |	Element (arr[j]) 4 |	(Condition) 4 < 5 ✅ |	i = 3 |	Swap 4 with 8 |	(Old Array) [5, 2, 1, 8, 4, 7, 6, 3] |	(Updated Array) [5, 2, 1, 4, 8, 7, 6, 3] | (Increase After Swap)	i = 4

// Step5 | (j) 5 |	Element (arr[j]) 7 |	(Condition) 7 > 5 ❌ |	i = 4 (No Change) |	No Swap |	(Old Array) [5, 2, 1, 4, 8, 7, 6, 3] |	(Updated Array) [5, 2, 1, 4, 8, 7, 6, 3] |	i = 4 (No Change After Swap)

// Step6 |	(j) 6 |	Element (arr[j]) 6 |	(Condition) 6 > 5 ❌ |	i = 4 (No Change) |	No Swap |	(Old Array) [5, 2, 1, 4, 8, 7, 6, 3] |	(Updated Array) [5, 2, 1, 4, 8, 7, 6, 3] |	i = 4 (No Change After Swap)

// Step7 |	(j) 7 |	Element (arr[j]) 3 |	(Condition) 3 < 5 ✅ |	i = 4	 | Swap 3 with 8 |	(Old Array) [5, 2, 1, 4, 8, 7, 6, 3] |	(Updated Array) [5, 2, 1, 4, 3, 7, 6, 8] |	(Increase After Swap) i = 5

//Final Swap (Pivot Swap with i Position)
// Swap 5 (pivot) with 3
// Final Array: [3, 2, 1, 4, 5, 7, 6, 8]

//Then this process will run recursively.

//----------------------------------------

//Quick Sort Implementation in JavaScript:-

function partition(arr, low, high) {
  let pivot = arr[low]; // Choosing the first element as the pivot
  let i = low + 1; // Start i from the next position

  for (let j = low + 1; j <= high; j++) {
    if (arr[j] < pivot) {
      // Swap arr[i] and arr[j]
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++; // Move next available position for smaller elements
    }
  }

  // Swap pivot with the last swapped position (i - 1)
  [arr[low], arr[i - 1]] = [arr[i - 1], arr[low]];

  return i - 1; // Return the final position of the pivot
}

function quickSort(arr, low, high) {
  if (low < high) {
    let pivotIndex = partition(arr, low, high); // Get pivot index after partitioning
    quickSort(arr, low, pivotIndex - 1); // Sort left part
    quickSort(arr, pivotIndex + 1, high); // Sort right part
  }
  return arr;
}

// Example usage:
let arr = [5, 2, 1, 8, 4, 7, 6, 3];
let sortedArray = quickSort(arr, 0, arr.length - 1);
console.log(sortedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8]

//Explanation of Code:-
//1.partition() function
////Takes a subarray (arr[low] to arr[high]) and places the pivot (first element) in the correct position.
////Moves elements smaller than the pivot to the left by swapping.
////Finally, swaps the pivot into its correct sorted position.
//2.quickSort() function
////Calls partition() to get the pivot index.
////Recursively sorts the left and right parts of the array.

//----------------------------------------

//Another Quick Sort Implementation in JavaScript:- This implementation of QuickSort selects the first element as the pivot and partitions the array into two separate arrays: left (elements smaller than the pivot) and right (elements greater than or equal to the pivot). It then recursively sorts both partitions and combines them with the pivot to form the final sorted array.

function quickSort(arr) {
  if (arr.length <= 1) return arr;

  let pivot = arr[0]; // pivot element.
  let left = [];
  let right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([5, 2, 1, 8, 4, 7, 6, 3]));

//Note:- Choosing Different Pivots:

//1. Last element (common approach) gives good results on average.
//2. First element may lead to worst-case performance if the array is already sorted.
//3. Random pivot or Median-of-Three Pivot (choosing the median of the first, middle, and last elements) can improve performance.
