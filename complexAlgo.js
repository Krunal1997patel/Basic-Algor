function merge(arr1, arr2){
    let mainArray = [];
    let i = 0;
    let j = 0;

    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            mainArray.push(arr1[i]);
            i++;
        }else {
            mainArray.push(arr2[j]);
            j++;
        }
    }

    while(i < arr1.length){
        mainArray.push(arr1[i]);
        i++;
    }

    while(j < arr2.length){
        mainArray.push(arr2[j]);
        j++;
    }

    return mainArray;
}

// console.log(mergeSort([1,10,34], [3,78,100,123]));
function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let rigth = mergeSort(arr.slice(mid));
    return merge(left, rigth);
}

// console.log(mergeSort([123,4,2,42,31,3,234,1,23,23,443,523,55,463,45,345,4356,5,52,4,234,345,43,3]));

function realMergeSort(arr){
    if(arr.length === 1) return arr;
    let middle = Math.floor(arr.length / 2);
    let left = realMergeSort(arr.slice(0,middle));
    let right = realMergeSort(arr.slice(middle));
    let sort = [];
    let i = 0;
    let j = 0;
    // console.log(left.length, right.length);
    while ( i < left.length || j < right.length){
        if(left[i] < right[j] || !right[j]){
            sort.push(left[i]);
            i++;
        } else{
            sort.push(right[j]);
            j++;
        }
    }
    return sort;
}

// console.log(realMergeSort([23,45,23,34,5,34,3,234,34,2,5,5,6,56,35,4,5,67,78,7,56,7,9,754,6,56,45,63,4,5,45,65,6,465,54,654,6,35,654,74,43,23]));

function quickSort(arr, left = 0, right = arr.length -1){
    if(left < right){
        let pivotIntex = pivot(arr, left, right);

        quickSort(arr, left, pivotIntex - 1);

        quickSort(arr, pivotIntex + 1, right);
    }
    return arr;
}

function swap(arr, idx1, idx2){
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function pivot(arr, left = 0, right = arr.length + 1){
    let pivot = arr[left];
    let swapIdx = left;

    for(let i = left + 1; i <= right; i++){
        if(pivot > arr[i]){
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }

    swap(arr, left, swapIdx);

    return swapIdx;
}

// console.log(quickSort([23,363,454,553,2,3]));

//Radix sort!!

//this check number from right to left 
function getDigit(num, place){
   return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10 ;
}

// console.log(getDigit(12345, 1));

//this check what position a number is at from 10, 100, and ect.. 
function digitCount(num){
    if(num === 0) return 1;
    return  Math.floor(Math.log10(Math.abs(num))) + 1;
}

// console.log(digitCount(4));

//this check with number in the array has big digit and return how many digit that number has
function mostDigit(nums){
    let maxNumber = 0;
    for(let i = 0; i < nums.length; i++){
        maxNumber = Math.max(maxNumber, digitCount(nums[i]))
    }
    return maxNumber;
}

// console.log(mostDigit([321,345,3,34,23423432,1322])) //8

function radixSort(arr){
    let maxloops = mostDigit(arr);

    //i will check how may time the loop go for from the maxloops
    for(let i = 0; i < maxloops; i++){
        //digitbucket is 10 empty array 
        let digitbucket = Array.from({length: 10}, () => []);
        //j will loop over the arr by using cd(callback) from getDigit
        for(let j = 0; j < arr.length; j++){
           let digit =  getDigit(arr[j], i);
           digitbucket[digit].push(arr[j]);
        }
        arr = [].concat(...digitbucket);
        console.log(digitbucket);
    }
    return arr;
}

console.log(radixSort([23,345,7374,1,45,345]))