let number3 = [34,234,213,23,1,243,4];

function reverArray(arr){
    let size = arr.length;
    let reverArrayNumber = [];
    
    for(let i = 0; i <size; i++){
        reverArrayNumber[i] = arr.pop();
    }
    
    return reverArrayNumber;
}

reverArray(number3);




function validAnagram(left, right){
    // add whatever parameters you deem necessary - good luck!
    if(left.length !== right.length){
        return false;
    }
    
    let hold = {};
    
    for (let i = 0; i < left.length; i++){
        let letter = left[i];
        if(hold[letter]){
            hold[letter]++;
        }else {
            hold[letter] = 1;
        }
    }
    
    for(let i = 0; i < right.length; i++){
        let letter = right[i];
        if(!hold[letter]){
            return false;
        }else{
            hold[letter]-= 1;
        }
    }
    return true;
  }
  
  //[rat][cat] //false
  //[rocket][keorct] //true

  function sumZero(arr){
    let low = 0;
    let high = arr.length -1;
    while(low < high){
        let sum = arr[low] + arr[high];
        if(sum === 0){
            return [arr[low], arr[high]];
        }else if(sum > 0){
            high--
        }else{
            low++
        }
    }
    return 'no pair to Zero';
}

sumZero([-4,-2,-1,0,1,2,3,5]);

//if a array has a pair of zero in order array

function countUniqueValues(arr){
    // add whatever parameters you deem necessary - good luck!
    if(!arr.length){
        return 0;
    }
    let i = 0;
    let j = 1;
    
    while(j < arr.length){
        if(arr[i]!==arr[j]){
            i++;
            arr[i] = arr[j];
        }else{
            j++;
        }
    }
    return i+1;
  }
  
  countUniqueValues([1,1,1,1,12,2,2,3,3,3,4,5,6,7,75,100]);
  
  //check how many diffrent number are in a array

  // Write a function which takes in a string and retuen counts of each charater in the string

function chatCount(str) {

    //make a object that will keep track of input and return it
    let characters = {};
    //loop over the input for each character
    for (let i = 0; i < str.length; i++) {
        let count = str[i].toLowerCase();
        //check if the character is a num/letter and is a key in the object, add one to count
        // check if is it something else, ignort it
        if (/[a-z0-9]/.test(count)) {
            if (characters[count] > 0) {
                characters[count]++;
                //check if the character is already in the object, then add one to count
            } else {
                characters[count] = 1;
            }
        }

    }
    //return the object as output
    return characters;

}


//sliding Window pattern

function maxSubarraySum(arr, num){
    if(arr.length < num){
        return null;
    }
    let maxNumber = 0;
    let holdNumber = 0;
    for(let i = 0; i < num; i++){
        maxNumber+= arr[i]; // 3
    }
    holdNumber = maxNumber;  //holdNumber = 3
    for(let i = num; i < arr.length; i++){
        holdNumber = holdNumber - arr[i - num] + arr[i]; // in first loop holdNumber = 3 - 1 + 3
        if(holdNumber > maxNumber){
            maxNumber = holdNumber;
        }
    }
    return maxNumber;
}

//console.log(maxSubarraySum([1,2,4,3,4,10,6,7,8], 2)) //16

//binart search

function search(arr, val){
    let low = 0;
    let high = arr.length -1;

    while(low <= high){
        let middle = Math.floor((low + high) / 2);
        let currentMiddle = arr[middle];

       if(currentMiddle < val){
           low = middle + 1;
       } else if(currentMiddle > val){
           high = middle -1;
       }else{
           return middle;
       }
    }
    return 'not found';
}

console.log(search([1,2,3,4,5,6,7,8,9,12,14,17,19,23,34,66,89,90], 3))