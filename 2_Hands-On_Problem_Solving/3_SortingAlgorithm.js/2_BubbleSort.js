//Bubble sort algorithm ⬆️⬇️

//What is Bubble Sort?
//Bubble Sort is a simple comparison-based sorting algorithm. It repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order 1  (e.g., if sorting in ascending order, it swaps them if the left element is greater than the right element). This process is repeated until the list is sorted. Larger elements "bubble" to the end of the list with each pass, hence the name.

//-----------------------------------------

//Where is Bubble Sort Used?
// Due to its poor performance on large datasets, Bubble Sort is rarely used in real-world applications. It's primarily used for educational purposes to introduce the concept of sorting algorithms. It can be suitable for:
//1. Small datasets where efficiency is not a major concern.
//2. Teaching sorting concepts to beginners.
//3. Situations where simplicity is prioritized over performance.

//-----------------------------------------

//Space and Time Complexity of Bubble Sort:-

//Time Complexity: Worst Case O(n^2) - When the list is sorted in reverse order.
//Space Complexity: O(1) - Bubble Sort is an in-place sorting algorithm, meaning it requires only a constant amount of extra memory, regardless of the input size.

//-----------------------------------------

//Pseudo Code with plain english:-

//1. Get the length of the list of items you want to sort. Let's call this length "n".
//2. Start the outer loop. This loop will run a maximum of n-1 times (or passes). This is because in the worst-case scenario, you need n-1 passes to ensure all elements are in their correct positions.
//3. Inside the outer loop, at the beginning of each pass, set a flag called "swapped" to "false". This flag will help us check if any swaps happen during this pass.
//4. Start the inner loop. This loop is responsible for comparing adjacent elements within the unsorted portion of the list.
//5. The inner loop will start at the beginning of the list and go up to the (n - 1 - current pass number) index. For example:
////a. In the first pass (pass number 0), the inner loop goes up to index n - 2.
////b. In the second pass (pass number 1), the inner loop goes up to index n - 3. it means the largest value will be at end and no need to check it again for the swap.
////c. And so on... This is because after each pass of the outer loop, the largest unsorted element is guaranteed to be in its correct position at the end of the unsorted portion, so we don't need to compare it again.
//6. Compare the current item (at the current inner loop index) with the item immediately next to it (the one on its right).
//7. If the current item is greater than the next item (assuming you want to sort in ascending order), then swap their positions.
//8. If you swapped items in the previous step, set the "swapped" flag to "true".
//9. Move to the next pair of adjacent items (increment the inner loop index).
//10. Repeat steps 6-9 until the inner loop reaches its end (as calculated in step 5).
//11. After completing all comparisons in this pass (the inner loop finishes), check the "swapped" flag.
//12. If the "swapped" flag is "false", it means no swaps occurred during this pass. This indicates that the list is already sorted, so you can immediately stop the entire sorting process (exit both loops).
//13. If the "swapped" flag is "true", it means at least one swap happened. In this case, prepare for the next pass of the outer loop.
//14. If the outer loop has completed n-1 passes, or if you exited early because no swaps occurred, the list is fully sorted, and you can stop the sorting process.
//15. The sorted list is now ready.

//Bubble sort code:- Sorting in ascending order.
function bubbleSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    //L-1
    let noSwap = true; // Initialize noSwap for each pass

    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap arr[j] and arr[j+1] using destructuring assignment (ES6+)
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwap = false;
      }
    }

    if (noSwap) {
      break; // If no swaps occurred, the array is sorted
    }
  }

  return arr;
}

// Example usage:
const unsortedArray = [5, 1, 4, 2, 8];
const sortedArray = bubbleSort(unsortedArray);
console.log("Sorted array:", sortedArray); // Output: Sorted array: [1, 2, 4, 5, 8]

const alreadySortedArray = [1, 2, 3, 4, 5];
const stillSortedArray = bubbleSort(alreadySortedArray);
console.log("Already sorted array:", stillSortedArray); // Output: Already sorted array: [1, 2, 3, 4, 5]

const reverseSortedArray = [5, 4, 3, 2, 1];
const sortedReverseArray = bubbleSort(reverseSortedArray);
console.log("Reverse sorted array:", sortedReverseArray); // Output: Reverse sorted array: [1, 2, 3, 4, 5]

const arrayWithDuplicates = [5, 1, 4, 2, 8, 2, 1];
const sortedArrayWithDuplicates = bubbleSort(arrayWithDuplicates);
console.log("Array with duplicates:", sortedArrayWithDuplicates); // Output: Array with duplicates: [1, 1, 2, 2, 4, 5, 8]
