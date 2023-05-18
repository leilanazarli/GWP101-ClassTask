// Task 1

function func1(num){
    let result=1
    for (let i = 1; i <= num; i++){
        result= result*i
    }
    return   result
}

console.log(func1(4));
console.log(func1(5));
console.log(func1(0));
console.log(func1(-1));


// Task 2
function func2(num) {
    let result=1
    for (let i = 1; i <=num; i=i+2) {
        result=result*i
    }
    return result
}

console.log(func2(5));
console.log(func2(9));
console.log(func2(1));

// Task 3
let arr1=[]
function sumArray(arr) {
    // return (arr.flat(Infinity)).reduce((a,b)=>a+b)
 return arr.reduce((acc , prev )=> Array.isArray(prev) ?sumArray(prev)+acc  :acc+prev ,0 )
}

console.log(sumArray([4,[2,[1,[3,[3]]]],8]));