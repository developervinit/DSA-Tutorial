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

//Time Complexity: Worst Case (Already sorted array, unbalanced partitions): O(n²).
//Space Complexity: Space Complexity: O(log n) (Recursive calls).

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

//Step1:- j=1 |	2 < 5 |	✅ Swap 2 with 2 (no real change) | (New Array State) [5, 2, 1, 8, 4, 7, 6, 3] | (Next Swap Position) i = 1

//Step2:- j=2 |	1 < 5 |	✅ Swap 1 with 1 (no real change) | (New Array State) [5, 2, 1, 8, 4, 7, 6, 3] | (Next Swap Position) i = 2

//Step3:- j=3 |	8 > 5 |	❌ No Swap (Move Forward) | (New Array State) [5, 2, 1, 8, 4, 7, 6, 3] | (Next Swap Position) i = 2

//Step4:- j=4 |	4 > 5 |	✅ Swap 4 with 8 | (New Array State) [5, 2, 1, 4, 8, 7, 6, 3]| (Next Swap Position) i = 3

//Step5:- j=5 |	7 > 5 |	❌ No Swap (Move Forward) | (New Array State) [5, 2, 1, 4, 8, 7, 6, 3] | (Next Swap Position) i = 3

//Step6:- j=6 |	6 > 5 |	❌ No Swap (Move Forward) | (New Array State) [5, 2, 1, 4, 8, 7, 6, 3] | (Next Swap Position) i = 3

//Step7:- j=7 |	3 < 5 |	✅ Swap 3 with 8 | (New Array State) [5, 2, 1, 4, 3, 7, 6, 8] | (Next Swap Position) i = 4

//Final Swap (Pivot Swap with i Position)
// Swap 5 (pivot) with 3
// Final Array: [3, 2, 1, 4, 5, 7, 6, 8]

//----------------------------------------

//Quick Sort Implementation in JavaScript:-

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
