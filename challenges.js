function sameFrequency(numb1, numb2){
    // good luck. Add any arguments you deem necessary.
    let num1 = numb1.toString();
    let num2 = numb2.toString();
    let check = {};
    
    if(num1.length !== num2.length) return false;
    
    for(let i=0; i < num1.length; i++){
        let number = num1[i];
        check[number] ? check[number]++ : check[number] = 1;
    }
    
    for(let i=0; i< num2.length; i++){
        let number = num2[i];
        if(!check[number]){
            return false;
        }else{
            check[number] -=1;
        }
    }
    return true;
  }
  
  console.log(sameFrequency(3321,3231))

//(Multiple Pointers
  function areThereDuplicates(...args) {
    // Two pointers
    args.sort((a,b) => a > b);
    let start = 0;
    let next = 1;
    while(next < args.length){
      if(args[start] === args[next]){
          return true
      }
      start++
      next++
    }
    return false
  }


  // One Liner Solution
  function areThereDuplicates() {
    return new Set(arguments).size !== arguments.length;
  }


  //(Frequency Counter)
  function areThereDuplicates() {
    let collection = {}
    for(let val in arguments){
      collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
    }
    for(let key in collection){
      if(collection[key] > 1) return true
    }
    return false;
  }

  function isSubsequence(str1, str2){
      let i = 0;
      let j = 0;
      if(!str1) return true;
      while(j < str2.length){
          if(str1[i] === str2[j]) i++;
          if(str1[i] === i ) return true;
          j++;
      }
      return false;
  }

  function averagePair(arr, num){
    // add whatever parameters you deem necessary - good luck!
    let low = 0;
    let high = arr.length -1;
    while(low < arr.length){
        let avg = (arr[low]+ arr[high]) / 2;
        if(num > avg){
            low++ 
        }else if(num < avg){
            high--
        }else{
            return true;
        }
    }
    return false;
  }