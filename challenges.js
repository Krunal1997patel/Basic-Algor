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

 // minSubArrayLen Solution
function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;
 
  while (start < nums.length) {
    // if current window doesn't add up to the given sum then 
		// move the window to right
    if(total < sum && end < nums.length){
      total += nums[end];
			end++;
    }
    // if current window adds up to at least the sum given then
		// we can shrink the window 
    else if(total >= sum){
      minLen = Math.min(minLen, end-start);
			total -= nums[start];
			start++;
    } 
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
    else {
      break;
    }
  }
 
  return minLen === Infinity ? 0 : minLen;
}

//findLongestSubstring Solution
function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;
 
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}