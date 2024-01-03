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

function maxSubarraySum(arr, n){
    if(arr.length < n ) return null;

    let max = -Infinity;

    for(let i=0; i<arr.length - n + 1; i++){
        let temp = 0;
        for(let j=0; j<n; j++){
            temp += arr[i + j];
        }
        if(temp > max){
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

//Logic step-by-step using sliding window technique.
//1. first we take two variable temp and max initialized with 0.
//2. then suppose we have input n is 3 so we add three consecutive numbers and keeps their sum in the temp variable. we will write loop for this.
//3. then we create second loop which will start from the n value which is 3 (means i=n) then in temp variable we subtract arr[i-n] and add arr[i], it means if we have input like this [1, 2, 5, 3, 8, 1, 5] and temp variable having 1+2+5=8 then we do like 8-1=7 and then 7+3=10 and if you count 2+5+3 in input array so you get also 10 so that is how we slide the window. and we keep that sum into the "max" variable.
//3. then we compare maxSum and tempSum variables to get the max value.
//NOTE - input is array is [1, 2, 5, 3, 8, 1, 5] and n = 3, then how he slides window. first add 1+2+5 then we get 8 then for next sum of three elements which are 2+5+3 we subtract 1 from 8 (which is from 1+2+5) and then add 3 which is at 3rd index in array then we get 10 (like this 8 - 1 + 3) and you can see 2+5+3 is also 10 so that is how we slide the window. 
//how this logic work:- so if input is array is [1, 2, 5, 3, 8, 1, 5] and n=3 then what we do add 1+2+5 then we get 8 again we need to add 2+5+3 so we get 10. so what you can notice that in both previous addition 2 and 5 is common, so to get second addition"s (2+5+3) value from first addition (1+2+5) we need to subtract 1 (1 is at 0'th index) from 8 (is sum of 1+2+5) and add 3 (3 is at 3rd index) into 8 then we get sum of (2+5+3) which is 10.

function maxSubarraySum2(arr, n){
    if(arr.length < n) return null;

    //window created using two variable-pointers
    let tempSum = 0;
    let maxSum = 0;

    for(var i=0; i<n; i++){ 
        maxSum += arr[i];
    }
    tempSum = maxSum;  
    for(var i=n; i<arr.length; i++){
        tempSum = tempSum - arr[i - n] + arr[i]; 
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

let outPut2 = maxSubarraySum2(input, num);
console.log(outPut2);