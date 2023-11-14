//Here we learning MULTIPLE POINTERS pattern by solving a problem.


//What is Multiple pointer approach 
//Creating pointers/values/variable that correspond to an index and position of element in data structure and move towards the beginning, end, or middle based on a certain condition. Very efficient for solving problems with minimal space complexity.

//we will have sort of structure like linear structure such as array, strings, linked list, etc.

//example of linear structures.
//[-4, -3, -2, -1, 0, 1, 2, 3, 4]  //array
//"jcnncsncodncdndncodncodn"   //string

//so we will have pointers/references/variables which will be keeping index of element in  array and can move towards any direction(beginning, middle, end) based on condition. like we do in for-loop we take "i" or "j" variable as pointer.

//--------------------

//Practical example to learn multiple pointers:- Write a function called sumZero which accepts a sorted array of integers. the function should find the first pair where the sum is zero. Return an array that includes both values that sum to zero or undefined if a pair does not exist. input array must be sorted.

//example
//input value is ([-3, -2, -1, 0, 1, 2, 3]) which return [-3, 3]

//conventional solution using nested loop step by step:- It has complexity O(n^2)
//1. We will grab one element of array and then will plus it with other elements of array one-by-one by using for-loop and we will continue this process with all other elements of array.
//2. if we get 0 when we do addition then we return array of those elements otherwise return "undefined".

let inputArr = [-3, -2, -1, 0, 1, 2, 3];
let inputArr2 = [-2, -1, 0, 5, 6];

function sumZero(arr){
    for(var i=0; i<arr.length-1; i++){
        for(var j=i+1; j<arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]];
            }
        }
    }
}

// let output = sumZero(inputArr);
// console.log(output);

let output2 = sumZero(inputArr2);
// console.log(output2);

//Solution 2:- Using multiple pointer approach-----------------------------

//Second solution of sum zero problem. This solution has O(n) complexity. We are using multiple pointer approach to solve this problem.

let inputArr3 = [-9, -8, -1, 0, 1, 2, 3, 7, 10, 12, 13];

function sumZero2(arr) {
    let left = 0;  //pointer-1
    let right = arr.length - 1; //pointer-2

    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left], arr[right]];
        }else if(sum > 0){ 
            right--;
        }else{
            left++;
        }
    }
}

let output3 = sumZero2(inputArr3);
console.log(output3);


//Logic:- 
//We have got sorted array as input then for solution we take two variables/pointers "right, and left". so "left" variable keeps element of 0 index and move towards right. and "right" variable keeps element of last index and move towards left.
//then we do sum of right and left variables then we check if sum === 0 then return those elements of array then elseIf sum > 0 then right-- otherwise left++.
//So we understand in example of array [-9, -8, -1, 0, 1, 2, 3, 7, 10, 11] then left variable keeps -9 and right variable keeps 11 then we do "-9 + 11" and get 2 so by condition we do right-- (and "right" variable moves to 10) then in next cycle we do "-9 + 10" and get 1 then by condition we do right-- (and "right" variable moves to 7) and then we do "-9 + 7" then we get -2 then by condition we this time we do left++ instead of right-- because in the last sum (-9 + 7) we got negative value which was -2 and this shows that there no positive 9 on the right side so there is no mean to use -9 in the sum (it means there is no possibility to get 0 when do sum with -9) with the rest positive values, that is why we do left++.      
