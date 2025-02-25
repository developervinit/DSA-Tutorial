//Selection sort algorithm ⬆️⬇️

//What is Selection Sort?
//Selection Sort is a comparison-based sorting algorithm that repeatedly finds the smallest (or largest) element from the unsorted portion of an array and swaps it with the first unsorted element. This process continues until the entire array is sorted.

// For Ascending Order: The smallest element is moved to the left side.
// For Descending Order: The largest element is moved to the left side.

//----------------------------------------

//Where is Selection Sort Used?
//-When memory writes are expensive, since it does at most N swaps, unlike Bubble Sort or Insertion Sort.
//-In small datasets, where simplicity is preferred over efficiency.
//-When a stable sort is not required (Selection Sort is not stable because it may swap non-adjacent elements).

//-----------------------------------------

//Space and Time Complexity of Selection Sort:-

//Time Complexity: Worst Case (Reverse Sorted) O(N^2).
//Space Complexity: O(1) (Since it sorts in-place without extra memory)

//-----------------------------------------

//Pseudo Code with plain english:-

// 1.Loop through the array from index 0 to N-1
// 2.Assume the current index is the smallest
// 3.Loop through the remaining elements to find the smallest value
// 4.If a smaller value is found, update the index of the smallest value
// 5.Swap the smallest value found with the value at the current index
// 6.Repeat until the whole array is sorted

//Example: Consider this unsorted array has to sorted ascending order.
// [64, 25, 12, 22, 11]

//Step-1 (Find the smallest in [64, 25, 12, 22, 11])
// Smallest element is 11, swap with 64
// Array after swap: [11, 25, 12, 22, 64]
//Step-2 (Find the smallest in [25, 12, 22, 64])
// Smallest element is 12, swap with 25
// Array after swap: [11, 12, 25, 22, 64]
//Step-3 (Find the smallest in [25, 22, 64])
// Smallest element is 22, swap with 25
// Array after swap: [11, 12, 22, 25, 64]
//Step-4 (Find the smallest in [25, 64])
// Smallest element is 25, no swap needed
// Array remains the same: [11, 12, 22, 25, 64]

//Now, the list is sorted in ascending order. So, in Selection Sort, we move the smallest element to the left side.

//-----------------------------------------

//Selection Sort Implementation in JavaScript:-

function selectionSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i; // Assume current index has the smallest element

    // Find the smallest element in the remaining array
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j; // Update index of smallest element
      }
    }

    // Swap the found minimum element with the first element of unsorted part
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}

// Example usage
let numbers = [64, 25, 12, 22, 11];
console.log(selectionSort(numbers));
// Output: [11, 12, 22, 25, 64]
