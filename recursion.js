/** product: calculate the product of an array of numbers. */

const { stringify } = require("nodemon/lib/utils");

function product(nums) {
  // base case
  if(nums.length === 0){
    return 1;
  } else {
    nums[0] * product(nums.splice(1));
  }
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  // base case
  if(words.length === 1){
    return words[0].length;
  // recursive case
  } else {
    return Math.max(words[0].length, longest(words.slice(1)));
  }
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  let newString = "";
  let index = 0;
  if(index >= str.length) return newString;
  newString += str[index];
  return everyOther(str, index+2, newString);

}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
// base case
// if string is equal to 1 equal 1 - if there is 1 letter left return true
if(str.length === 1) return true;
// if there are two letters left that match, return true
if(str.length === 2) return str[0] === str[1];
// check to see if first letter and last letter match
if(str[0] === str.slice(-1)) {
  // if they match, recurse and call the function of 
  // again but remove the first and last letter 
  // to check the next first and last letter
  return isPalindrome(str.slice(1, -1));
  }
  // if it doesnt match return false
  return false;
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

// function findIndex(arr, val) {
//   // base case
//   if(arr.length === val[0]) return -1;
//   if(arr[0] === val) {
//     return val[0]
//   }
//   return findIndex(arr, val[0] + 1);
// }

function findIndex(arr, val) {
  // base case
  if(arr.length === val[0]) return -1;
  // check to see if value is at first index, if it is return 0
  if(arr[0] === val) return 0;
  // if not, function calls itself with a new array with first elevel removed
    let idx = findIndex(arr.slice(1), val);
  return idx === -1 ? -1 : idx + 1;
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  // base case
  if(str.length === 0) return "";
  // recursive case
  return revString(str.slice(1) + str[0]);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  // create an empty array
  let str = [];
  // base case
  // iterate through the obj and 
  for(let key in obj){
    // check if their values are strings
    if(typeof obj[key] === 'string'){
      // if it is it is added to the strings array
      str.push(obj[key]);
      // check to see if it is an object
    } else if(typeof obj[key] === 'object'){
      // if it is, function will call itself recursively and add the string to the end of the previous string
      str = str.concat(gatherStrings(obj[key]));
    }
  }
  // return the string
  return str;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {
  // base case
  // if the array is empty, return -1 as the element cannot be found
  if(arr.length === 0) {
    return -1;
  }
  // define middle index
  let midIdx = Math.floor(arr.length / 2);
  // define value of middle index
  let midValue = arr[midIdx];

  // if
  if(midValue === val) return midIdx;
  // if value is less than middle element call function from the left of half the array
  if(val < midValue) return binarySearch(arr.slice(0, midIdx), val);
   // if value is greater than middle element call function from the right of half the array
  if(val > midValue) return binarySearch(arr.slice(midIdx, arr.length-1), val) + midIdx + 1;
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
