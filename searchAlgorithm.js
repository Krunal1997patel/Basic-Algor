
//linear Search

function linearSearch(arr, num){
    // add whatever parameters you deem necessary - good luck!
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === num) return i;
    }
    return -1;
  }

// console.log(linearSearch([10,15,20,25,30], 15));


function binarySearch(arr, num){
    // add whatever parameters you deem necessary - good luck!
    let low = 0;
    let high = arr.length -1;
    
    while(low <= high){
        let middle = Math.floor((low + high) /2);

        if(arr[middle] < num){
            low = middle + 1;
        }else if(arr[middle] > num){
            high = middle - 1;
        }else{
            return middle
        }
    }
    return -1;
  }

  function binarySearchShort(arr, num){
      let start = 0;
      let end = arr.length -1;
      let middle = Math.floor((start + end) /2);
      while(arr[middle] !== num && start <= end){
        num < arr[middle] ? start = middle + 1 : end = middle - 1;
        middle = Math.floor((start + end) /2);
      }
      return arr[middle] === num? middle: -1; 
  }

  
//   console.log(binarySearch([1,2,3,4,5,6,7,8,9], 40));

let num = [12,3,45,4,23,4,345,54,43,45,3434,5455];

num.sort((a,b) => a-b);

// console.log(num);

function naiveStringSearch(longStr, shortStr){
    let count = 0;

    for(let i = 0; i < longStr.length; i++){
        for(let j = 0; j < shortStr.length; j++){
            if(longStr[i + j] !== shortStr[j]) break;
            if(shortStr.length -1 === j) count++;
        }
    }
    return count;
}

// console.log(naiveStringSearch('omg i soo omg it omlis becsi omglsk is omg', 'omg'));


