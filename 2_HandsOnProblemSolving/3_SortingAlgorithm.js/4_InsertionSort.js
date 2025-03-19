//Insertion Sort algorithm ⬆️⬇️

//What is Insertion Sort?
//Insertion Sort is a simple and efficient sorting algorithm that builds the sorted list one element at a time by picking an element and inserting it into its correct position in the already sorted part of the array.
//It works similarly to how we sort playing cards in our hands—by picking a card and placing it in the correct position relative to the already sorted cards.

//----------------------------------------

//Where is Insertion Sort Used?
// Insertion Sort is useful in the following cases:
// ✅ Small datasets – Works well when the number of elements is small.
// ✅ Nearly sorted data – Performs efficiently when the array is almost sorted.
// ✅ Stable sorting required – It maintains the relative order of equal elements.
// ✅ Online sorting – It can sort elements as they arrive in real-time.

//----------------------------------------

//Space and Time Complexity of Insertion Sort:-

//Time Complexity: Worst Case (Reverse Sorted) O(N^2).
//Space Complexity: O(1) (In-place sorting, no extra space required)

//----------------------------------------

//3. Pseudo Code in Plain English with Example:-

// Steps to Perform Insertion Sort:
// Start from the second element (index 1).
// Compare it with the elements before it (left side).
// Shift larger elements one position to the right.
// Insert the element at the correct position.
// Repeat for all elements until the array is sorted.

//Note:- We are Shifting (Traditional Approach) larger elements to the right (shifted) until a correct position is found, and then we place "key" in its correct position. we can do it with swapping approach also but it is not considered efficient compare to shift.
//A shift moves elements one step to the right to make space for the new element.
//Instead of swapping two elements repeatedly, it moves the larger elements without direct swaps.

//How Shifting Works in Insertion Sort
// ✅ We pick one element (starting from index 1) and compare it with the elements before it (left side).
// ✅ If an element is greater than the picked element, we shift it one position to the right instead of swapping immediately.
// ✅ This shifting continues until we find the correct position for the picked element.
// ✅ Finally, we insert the element in its correct position.

//More understanding with example:-
//Step1: [8, 4, 5, 2] Initial array.
//Step2: Compare 4 with 8, then Shift 8 to right [8, 8, 5, 2].
//Step3: Insert 4 at index 0 (Insert 4 in correct position)	[4, 8, 5, 2].
//Step4: Compare 5 with 8 then Shift 8 to right	[4, 8, 8, 2].
//step5: Insert 5 at index 1 [4, 5, 8, 2].
//step6: Compare 2 with 8, 5, 4 → Shift all [4, 5, 8, 8] → [4, 5, 5, 8] → [4, 4, 5, 8].
//step7: Insert 2 at index 0 [2, 4, 5, 8] ✅.

//----------------------------------------

//Insertion Sort Implementation in JavaScript:-

function insertionSort(arr) {
  let n = arr.length;

  for (let i = 1; i < n; i++) {
    let key = arr[i]; // The element to be inserted
    let j = i - 1;

    // Shift elements of the sorted part that are greater than key
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Insert the element in the correct position
    arr[j + 1] = key;
  }

  return arr;
}

// Example usage
let numbers = [8, 4, 5, 2];
console.log(insertionSort(numbers));
// Output: [2, 4, 5, 8]
