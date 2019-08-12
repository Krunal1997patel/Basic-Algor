
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


///sorting a arry from small to large number
let num = [12,3,45,4,23,4,345,54,43,45,3434,5455];

num.sort((a,b) => a-b);  // a-b = small to big   b-a = big to small

// console.log(num);


//sorting a string array from small name to big
let name = ['krunal', 'tim', 'jake', 'colt', 'jake the second'];

name.sort((str1, str2) => str1.length - str2.length);

// console.log(name);


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

//bubble sort

function bubbleSort(num){
    for(let i = num.length; i >= 0; i--){
        for(let j = 0; j < i - 1; j++){
            console.log(num , num[j], num[j +1]);
            if(num[j] > num[j + 1]){
                let temp = num[j];
                num[j] = num[j + 1];
                num[j + 1] = temp;
            }
        }
    }
    return num
}

// bubbleSort([12,2,23,56,23])

function newBubbleSort(arr){
    let swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }

    for(let i = arr.length; i >= 0; i--){
        for(let j = 0; j < i -1; j++){
            if(arr[j]> arr[j + 1]){
                swap(arr, j, j + 1);
            }
        }
    }
    return arr
}

// console.log(newBubbleSort([12,5,23,45,65,34]));

function bubbleSortNoSwap(num){
    let noSwap;
    for(let i = num.length; i >= 0; i--){
        noSwap = true;
        for(let j = 0; j < i - 1; j++){
            console.log(num , num[j], num[j +1])
            if(num[j] > num[j + 1]){
                let temp = num[j];
                num[j] = num[j + 1];
                num[j + 1] = temp;
                noSwap = false;
            }
        }
        if(noSwap) break;
    }
    return num
}

// bubbleSortNoSwap([12,5,23,56,23])

function newBubbleSortNoSwap(arr){
    let swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }
    let noSwap;

    for(let i = arr.length; i >= 0; i--){
        noSwap = true
        // console.log('one loop');
        for(let j = 0; j < i -1; j++){
            // console.log(arr,);
            if(arr[j]> arr[j + 1]){
                swap(arr, j, j + 1);
                noSwap=false;
            }
        }
        if(noSwap) break;
    }
    return arr
}

// newBubbleSortNoSwap([8,1,2,3,4,5,6,7]);


//SELECTION Sort!!!
function selectionSort(arr){

    let swap = (arr, idx1, idx2) =>{
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }

    for(let i = 0; i < arr.length; i++){
        let low = i;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[low] > arr[j]){
                low = j;
            }
        }
       if(i !== low ) swap(arr, i, low); 
    }
    
    return arr;
}

// console.log(selectionSort([12,43,53,2,344,12,3,3,2]))  //[ 2, 2, 3, 3, 12, 12, 43, 53, 344 ]

//INSERTION sort!!!!

function insertionSort(arr){

    for(let i = 1; i < arr.length; i++){
        let currentValue = arr[i];
        let hold = i;
        for(let j = i - 1; j >= 0 && arr[j] > currentValue; j-- ){
            arr[j + 1] = arr[j];
            hold = j
        }

        arr[hold] = currentValue;
    }
    return arr;
}

// console.log(insertionSort([5,2,3,67,35,1]));

/*
Algorithm     time(Best)     Time(Average)     Time(Worst)    Space

Bubble Sort       O(n)          O(n^2)            O(n^2)        O(1)

Insertion Sort    O(n)           O(n^2)           O(n^2)         O(1)

Selection Sort    O(n^2)          O(n^2)           O(n^2)       O(1)           //not good
*/