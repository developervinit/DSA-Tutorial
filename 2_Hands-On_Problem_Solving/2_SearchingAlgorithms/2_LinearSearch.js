//Linear Search Algorithm 🔍

//The Linear Search algorithm is one of the simplest and most straightforward searching techniques. It involves checking each element of a collection one by one to find the target value.

//Simple and easy to implement.
//Works on both sorted and unsorted data.
//Inefficient for large datasets, as it may require checking every element.

//-----------------------------------------

//How Does It Work?
// Imagine you have a list of items, like a row of books on a shelf, and you’re looking for a specific book. You start from the first book and check each one until you find what you’re looking for—or reach the end of the shelf.
// In the same way, Linear Search starts at the beginning of an array or list and compares each element with the target value:

//-----------------------------------------

//Space and Time Complexity of Linear Search:-

//1. Time complexity: O(n) (where n is the number of elements).
//2. Space Complexity (O(1)): Linear Search does not use any extra data structures; it works directly on the input array.

//-----------------------------------------

//Pseudo Code:-
//LinearSearch(array, target):
// 1. Start from the first element of the array.
// 2. For each element in the array:
//     a. If the current element equals the target:
//         - Return the index of the current element.
//     b. Otherwise, move to the next element.
// 3. If the target is not found in the array:
//     - Return -1 (or a suitable message indicating "not found").

//Linear search code.
function linearSearch(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

let inputArray = [5, 8, 1, 100, 12, 3, 11, 12, 4, 7, 2, 12];
let value = 12;

let outPut = linearSearch(inputArray, value);
console.log(outPut); //4
