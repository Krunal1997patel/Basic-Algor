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
