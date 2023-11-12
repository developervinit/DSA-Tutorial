//FREQUENCY COUNTERS PATTERN.

//This pattern uses objects or sets to collect values/frequency of values. This can often avoid the need for nested loops or O(N^2) operations with arrays/string.

//So this is useful  in algorithms and challenges when you have multiple pieces of data, multiple inputs, and you need to compare them to see if they consist of similar values, if they are anagrams of one another, if a value is contained inside of another value, any time you're comparing pieces of data to inputs or more than two and frequencies of certain things occurring, and I know that sounds really wishy washy and not that useful, but I'll show you a couple of examples. So it makes this a good approach in a nice pattern, is that it's usually off end time compared to the easier solution, which often involves nested loops, which is going to give us of PN squared quadratic time So let me show you an example problem.


//to understand the pattern lets solve the problem:
//Problem - Write a function called "same" which accepts to arrays and the function should return true if every value in the array has its corresponding values squared in the second array. The frequency of values must be the same. (places can be diffrent but frequncy has to be same).

//Example of problem
//[1, 2, 3] [4, 1, 9] //true
//[1, 2, 3] [1. 9] //false
//[1, 2, 1] [4, 4, 1] //false 

//solution 1 which is not using frequenchy counter and having nested loops in which first loop is for-loop and inside it second is indexOf() loop. so this solution has time  complexity O(N^2).

function sameOne(arrOne, arrTwo){
    if(arrOne.length !== arrTwo.length) return false;

    for(var i=0; i<arrOne.length; i++){
        let indexOfArrTwo = arrTwo.indexOf(arrOne[i] ** 2);
        if(indexOfArrTwo === -1){
            return false;
        }else {
            arrTwo.splice(indexOfArrTwo, 1);
        }
    }
    return true;
}

let arrOne = [1, 2, 1];
let arrTwo = [4, 1, 1];

let arrThree = [1, 2, 3];
let arrFour = [4, 50, 45]; 

let arrFive = [1, 2, 1];
let arrSix = [1, 4, 1];

let arrSeven = [2, 2, 3];
let arrEaight = [4, 1, 9];

//inputs
// console.log(sameOne(arrOne, arrTwo)); //true
// console.log(sameOne(arrThree, arrFour)); //false
// console.log(sameOne(arrFive, arrSix)); //true
// console.log(sameOne(arrSeven, arrEaight)); //false


//Refectored above function "sameOne" with FREQUNCY COUNTER PATTERN. and reducing comlexity from O(N^2) to O(N).

// let arrOne = [2, 3, 5];
// let arrTwo = [4, 25, 9];

function sameTwo(arrOne, arrTwo){
    if(arrOne.length !== arrTwo.length) return false;

    let freqCounterOne = {};
    let freqCounterTwo = {};

    for(let val of arrOne){
        freqCounterOne[val] = (freqCounterOne[val] || 0) + 1;
    }
    for(let val of arrTwo){
        freqCounterTwo[val] = (freqCounterTwo[val] || 0) + 1;
    }

    for(let key in freqCounterOne){
        console.log("freqCounterTwo", freqCounterTwo[key ** 2]); 
        //here we check the arrayOne's elements square value is present in arrayTwo as element. and we doing this using object 
        if(!(key ** 2 in freqCounterTwo)){   
            return false
        }
        //freqCounterTwo[key ** 2] => freqCounterTwo[1 ** 2] => freqCounterTwo[1] => 2
        //freqCounterOne[key] => freqCounterOne[1] => 2

        //freqCounterTwo[key ** 2] => freqCounterTwo[2 ** 2] => freqCounterTwo[4] => 1
        //freqCounterOne[key] => freqCounterOne[2] => 1

        //here we check the occurence of elements in array one and two which should be similar. and we are doing this using object
        if(freqCounterTwo[key ** 2] !== freqCounterOne[key]){ 
            return false;
        }
    }
    console.log(freqCounterOne);
    console.log(freqCounterTwo);
    return true;
}

console.log(sameTwo(arrOne, arrTwo)); //true
// console.log(sameTwo(arrThree, arrFour)); //false
// console.log(sameTwo(arrFive, arrSix)); //true
// console.log(sameTwo(arrSeven, arrEaight)); //false


