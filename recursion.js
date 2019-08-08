function countDown(num){
    if(num <= 0){
        console.log('Lift off!!')
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}

// countDown(10); //10,9,8,7,6,5,4,3,2,1, Lift off!

function sumRange(num){
    if(num === 1) return 1;
    return num + sumRange(num - 1);
}

// console.log(sumRange(4));  //10

function factorial(num){
    if(num === 1) return 1;
    return num * factorial(num - 1);
}

// console.log(factorial(7)); //5040


//Math.pow
function power(num , mult){
    if(mult === 0) return 1;
    return num * power(num, mult -1);
}

function oddNumber(arr){
    let odd = [];

    function helper(helperInput){
        if(helperInput.length === 0){
            return
        }
        if(helperInput[0] % 2 !== 0){
            odd.push(helperInput[0])
        }
        helper(helperInput.slice(1));
    }

    helper(arr)
    return odd;
}

// console.log(oddNumber([1,2,3,4,5,6,7,8,9,12,34,45,667,83])) //[ 1, 3, 5, 7, 9, 45, 667, 83 ]


function evenNumber(arr){
    let even =[];

    if(arr.length === 0) return even;
    if(arr[0] % 2 === 0) even.push(arr[0]);

    even = even.concat(evenNumber(arr.slice(1)));
    return even;
}

// console.log(evenNumber([1,2,2,3,3,4,4,5,5,6,6,7,87,88,32])); //[ 2, 2, 4, 4, 6, 6, 88, 32 ]

function productOfArray(arr){
    let total = arr[0];
    
    function helper(helperInput){
        if(helperInput.length === 0){
            return;
        }
        total*= helperInput[0];
        helper(helperInput.slice(1));
    }
    
    helper(arr);
    return total;
}

function productOfArray1(arr){
    if(arr.length === 0) return 1;
    return arr[0] * productOfArray1(arr.slice(1));
}

// console.log(productOfArray1([1,2,3,10])); //60

function recursiveRange(num){
    if(num <= 0) return 0;
    return num + recursiveRange(num-1);
 }

//  console.log(recursiveRange(6)); //21

function fib(num){
    // add whatever parameters you deem necessary - good luck!  
    if(num <= 1) return num;
    return fib(num - 1) + fib(num - 2);
  }

//   console.log(fib(7)); //13