//Radix Sort algorithm ⬆️⬇️

//What is Radix Sort?
//Radix Sort is a non-comparative sorting algorithm that sorts numbers by processing individual digits from least significant to most significant. It distributes numbers into "buckets" based on their digit values and then collects them back in order. order mean that after placing numbers into buckets based on a specific digit, we retrieve them in increasing order of bucket indices (0 to 9).

//----------------------------------------

//❓ Why Do We Use Radix Sort?
//✅ Faster than comparison-based sorting algorithms (like QuickSort) when sorting integers or fixed-length strings.
//✅ Avoids element-to-element comparisons, making it efficient for large datasets.
//✅ Stable sorting algorithm, meaning equal elements retain their original order.
//✅ Best suited for sorting numbers with a fixed digit length, such as phone numbers, IDs, or zip codes.

//When Not to Use?
//❌ If numbers are too large, Radix Sort becomes inefficient due to extra space usage.
//❌ If elements have varying lengths, it can be tricky to implement.

//----------------------------------------

//⏳ Time & Space Complexity:-

//Time Complexity:-
//Worst Average Case: O(nk) Where n = Number of elements, k = Maximum number of digits in the largest number

//Space Complexity:- O(n + k) due to extra space used for buckets.

//----------------------------------------

//📜 Pseudo Code (Plain English):-

//1️⃣ Find the largest number in the list to determine the number of digits.
//2️⃣ Loop through each digit place (from rightmost to leftmost):
////Create 10 empty buckets (for digits 0-9).
////Place each number into the bucket corresponding to its current digit.
////Collect numbers back in order.
//3️⃣ Repeat until all digit places are sorted.
//4️⃣ Return the sorted list.

//Explanation of Radix Sort with example:-

//Step 1: Find the Maximum Digits
////Identify the number with the most digits (e.g., in [170, 45, 75, 90, 802, 24, 2, 66], 802 has 3 digits).
////This means we need 3 passes (sorting by 1's, 10's, and 100's place). and we will run outer loop 3 times.

//Step 2: Sorting by Each Digit (Bucket Creation & Collection)
////Pass 1: Sorting by 1’s place
////Buckets (0-9 based on last digit):
////0 → [170, 90]
////2 → [802, 2]
////4 → [24]
////5 → [45, 75]
////6 → [66]
////Collect in order: [170, 90, 802, 2, 24, 45, 75, 66]

////Pass 2: Sorting by 10’s place
////Numbers & second-last digits:
////0 → [802, 2]
////2 → [24]
////4 → [45]
////6 → [66]
////7 → [170, 75]
////9 → [90]
////Collect in order: [802, 2, 24, 45, 66, 170, 75, 90]

////Pass 3: Sorting by 100’s place
////Numbers & third-last digits:
////0 → [2, 24, 45, 66, 75, 90]
////1 → [170]
////8 → [802]
////Collect in order: [2, 24, 45, 66, 75, 90, 170, 802] ✅ Sorted!

//----------------------------------------

//Radix Sort Implementation in JavaScript:-

let radixArray = [1556, 4, 3556, 593, 408, 4386, 902, 7, 8157, 86, 9637, 29];

function RadixSort(list) {
  let maxNumber = Math.max(...list); //getting max number
  let maxDigits = maxNumber.toString().length;

  for (let j = 0; j < maxDigits; j++) {
    //Creating bucket using array. index will represent bucket number.
    let buckets = Array.from({ length: 10 }, () => []);

    for (let num of list) {
      // Extracting digit from the right side of current number.
      let digit = Math.floor(num / Math.pow(10, j)) % 10;

      //Then putting the current number inside the bucket whose index is similar to the number.
      buckets[digit].push(num);
    }

    //Then concatenating bucket array with new array and putting it inside the list variable
    list = [].concat(...buckets); // Flatten buckets
  }

  return list;
}

console.log(RadixSort(radixArray));
