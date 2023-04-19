
// 1.Filter out Strings from an Array///////////////////////////////////////////////////
// Create a function called 'filterArray(arr)' that takes an array of non-negative integers and strings and return
//  a new array without the strings.
//1
arr=[1, 'c', 2, "a", "b"]
arr2=[1, 'c', 2, "a", "b"]
arr3=['4', 1, "a", "b", 0, 15]
function filterArray(arr) {
     return arr.filter((element)=>typeof element==='number')
}

console.log(filterArray(arr));
console.log(filterArray(arr2));
console.log(filterArray(arr3));

filterArray([1, 'c', 2, "a", "b"])
filterArray([1, 'c', 2, "a", "b"]) // [1, 2]
filterArray(['4', 1, "a", "b", 0, 15])  //[1, 0, 15]


// 2.Summing a Slice////////////////////////////////////////////////////////////////////
// Create a function called 'sliceSum(arr, n)' that has an array and an integer n, return the sum of the first n numbers in the array.
function sliceSum(arr,n) {
  return  arr.slice(0 , n).reduce((a,b)=>a+b,0)
}
console.log(sliceSum([9, 8, 7, 6], 3));
console.log(sliceSum([1, 3, 2], 2));
console.log(sliceSum([3, 6, 2], 0));
// sliceSum([9, 8, 7, 6], 3)  //24
// sliceSum([1, 3, 2], 2) //4
// sliceSum([3, 6, 2], 0) //0


// 3.Spelling it Out////////////////////////////////////////////////////////////////////
// Create a function called 'spelling(str)' which takes in a word and spells it out, by consecutively adding letters until the full word is completed.
function spelling(str) {
  return  str.split('').map((element,index)=>str.slice(0,index +1))
    }
    console.log(spelling("bee"));
    console.log(spelling("happy"));
// spelling("bee") // ["b", "be", "bee"]
// spelling("happy") //["h", "ha", "hap", "happ", "happy"]


// 4.Hashes and Pluses//////////////////////////////////////////////////////////////////
// Create a function caled "hashPlusCount(str)" that returns the number of hashes and pluses in a string.
// Return [0, 0] for an empty string.
// Return in the order of [hashes, pluses].
function hashPlusCount(str) {
    let counthash=0
    let countplus=0
     str.split('').forEach((element)=>element==="#" ?counthash+=1 :countplus+=1)
     return [counthash , countplus]
}
console.log(hashPlusCount("###+"));
console.log(hashPlusCount("#+++#+#++#"));
console.log(hashPlusCount(""));
// hashPlusCount("###+") // [3, 1]
// hashPlusCount("#+++#+#++#") // [4, 6]
// hashPlusCount("") // [0, 0]


// 5.Reverse the Case////////////////////////////////////////////////////////////////////
// Given a string, create a function called "reverseCase(str)" that to reverse the case.
//  All lower-cased letters should be upper-cased, and vice versa.
function reverseCase(str) {
  return  str.split('').map(item => item === item.toUpperCase() ? item.toLowerCase() : item.toUpperCase()).join('')
}
console.log(reverseCase("Happy Birthday"));
console.log(reverseCase("MANY THANKS"));
// reverseCase("Happy Birthday") //"hAPPY bIRTHDAY"
// reverseCase("MANY THANKS") //"many thanks"

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////