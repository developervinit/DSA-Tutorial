//Here we are having example of multiple pointers by solving a problem countUniqueValues.


//Problem:- Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array and then return the length of the array. There can be negative numbers in the array but it always be sorted.


//-------------------------SOLUTION------------------------------


//Logic:- 

//suppose input is [1, 1, 1, 2, 3, 3, 4, 4, 5, 6]

//he took two pointers/variables "i" and "j" 
//i will start from 0 index and j will start from 1 index.
//then compare i's value with j's value when found similar then i will remain at the same place but j will go ahead to next element and then again we compare i with j if we found similar then i remain at same place but j will go ahead to next element then we compare i with j then we found that i's value is different from j's value then i goes to the next element and then we take j's value and replace with the i's value and then we do the same process with other elements.
//after 2nd step array will look like this [1, 2(i), 1, 2(j), 3, 3, 4, 4, 5, 6];
//then in the end we will have array like this [1, 2, 3, 4, 5, 6(i), 4, 4, 5, 6]
//then we will get the index of "i" pointer and then add 1 to it so that will be the length of unique array.

function countUniqueValues3(arr){

    if(arr.length === 0) return 0;

    let length = arr.length;
    let j = 1; //pointer-1
    let i = 0  //pointer-2

    while(j < length){
        if(arr[i] !== arr[j]){
            i++
            arr[i] = arr[j];
        }
        j++
    }
    return i+1;
}

//input values
let inputArr = [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13];

//expected output
//7

let outPut = countUniqueValues3(inputArr);
console.log(outPut); //7
