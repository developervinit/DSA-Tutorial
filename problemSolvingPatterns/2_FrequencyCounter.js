//Here solving the Anagram problem using the frequency counter pattern.

//Anagram problem:- Given two strings, write a function to determine if the second string is anagram of the first. An anagram is a word, phrase or name formed by rearranging the letters of another, such as "cinema", formed from "iceman"


//1. device a plan.
//2. use frequency counter pattern.

//solution
//1. character and its occurrence should be similar in the both words.
//2. I will create two objects for both strings respectively. in the object i will have character as a key and its occurrence  will be the value.
//3. then i will compare both objects' keys and their occurrence, if any one of them is not similar then function will produce false.


//anagram strings
let s1 = "cinema"; 
let s2 = "iceman";

let s3 = "anagram";
let s4 = "nagaram";

function validAnagramSolu1(stringOne, stringTwo){
    if(stringOne.length !== stringTwo.length) return false;

    let firstObj = {};
    let secondObj = {};

    //here we are putting properties in "firstObj" in which input strings' element becomes object key and elements occurrence becomes value of the key.
    for(var val of stringOne){
        firstObj[val] = (firstObj[val] || 0) + 1;
    }

    //here we are putting properties in "secondObj" in which input strings' element becomes object key and elements occurrence becomes value of the key.
    for(var val of stringTwo){
        secondObj[val] = (secondObj[val] || 0) + 1;
    }
    // console.log(firstObj)
    // console.log(secondObj)

    for(let key in firstObj){
        //here we are comparing the keys of both objects (firstObj, secondObj)
        if(!(key in secondObj)){
            return false;
        }

        //checking frequency
        if(firstObj[key] !== secondObj[key]){
            return false;
        }

    }
    return true;
}

// var output = validAnagramSolu1(s1, s2);
// console.log(output);

// var output2 = validAnagramSolu1(s3, s4);
// console.log(output2);



//second solution for anagram problem (This solution is from Colt Steel)

//solution steps
//1. In first for loop we will create an object having given character of first string as key and that character's occurrence will be the value in object property.
//2. then in second for-loop we check the value-property of object by using the second string, if value is 0 then return false otherwise go into else part and reduce value by one. 

function validAnagramSolu2(stringOne, stringTwo) {
    if(stringOne.length !== stringTwo.length) return false;

    let lookUp = {};

    //creating object in which keys will be character of stringOne, and value will be those character's occurrence.
    for(var i=0; i<stringOne.length; i++){
        let letter = stringOne[i];
        lookUp[letter] ? lookUp[letter] += 1 : lookUp[letter] = 1;
    }

    //here checking object's value if it is 0 then stop execution and return false otherwise goto else part and reduce value by 1 and after completing for loop return true.
    for(var i=0; i<stringTwo.length; i++){
        let letter = stringTwo[i];
        if(!(lookUp[letter])){
            return false
        }else{
            lookUp[letter] -= 1;
        }
    }

    return true;
}

let output3 = validAnagramSolu2(s1, s2);
console.log(output3);

let output4 = validAnagramSolu2(s3, s4);
console.log(output4);