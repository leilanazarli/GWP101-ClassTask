// don't use array methods (except: pop(), push(), shift(), unshift()), use function expression(arrow function) and parameter.
const arr = ['6', 8,NaN, '0', 5, 4, 'true', false, 7, 'a', undefined, 8, true]

//1.Show only falsy values in 'arr'

const falsyValue =(myArr)=>{
    let newArr=[]
    for (let i = 0; i < myArr.length; i++) {
        if(!myArr[i]){
            newArr.push(myArr[i])
        }
    }
    return newArr
}
console.log(falsyValue(arr)); //[NaN, false, undefined]


// 2.Show only string values
const  stringValues=(me)=>{
    let newArr=[]
    for (let i = 0; i <= me.length; i++) {
        if(typeof me[i]==="string"){
            newArr.push(me[i])
        }
    }
    return newArr
}
console.log(stringValues(arr)); //['6', '0', 'true', 'a']

// 3.Slice array from index 3 to 7(includes both indexs) 
const  sliceArr=(me)=>{
    let newArr=[]
    for (let i=3; i<8; i++) {
            newArr.push(me[i])
    }
    return newArr
}
console.log(sliceArr(arr));   //['0', 5, 4, 'true', false]

// 4.Sum only number values
const  sumArr=(me)=>{
    let sum=0
    for (let i = 0; i < me.length; i++) {
        if(typeof me[i]==="number" && me[i]  ){
           sum+=me[i] 
        }
    }
    return sum
}
console.log(sumArr(arr)); //32

//5.Find last 8's index in 'arr'
const  findLastIndex=(me)=>{
    for (let i = 10; i < me.length; i++) {
      if( me[i]===8){
          return i
       }
    }
}
console.log(findLastIndex(arr)); //11

// 6.Reverse 'arr'
const  reverseArr=(me)=>{
    let newArr=[]
    for (let i = me.length-1 ;i>=0; i--) {
        newArr.push(me[i])
    }
    return newArr
}
console.log(reverseArr(arr));  //[undefined, true, 8, undefined, 'a', 7, false, 'true', 4, 5, '0', NaN, 8, '6']

// 7. Sort 'arrNum' ascending
const arrNum = [8, 3, 22, 1, 12, 11, 9, 0, 10, 14, 41, 55, 51]
const  sortArr=(array)=>{
    let sorting =true
    while( sorting){
        sorting=false
        for (let i = 0; i < array.length; i++) {
            if(array[i]>array[i+1]){
                sorting =true
                let a=array[i]
                array[i]=array[i+1]
                array[i+1]=a
            }
        }
    }
    return array
}
console.log(sortArr(arrNum));  //[0, 1, 3, 8, 9, 10, 11, 12, 14, 22, 41, 51, 55]


// 8. Sort 'arrLetters' ascending
// const arrLetters = ['g', 'd', 'a', 'c', 'j', 'b', 'e']
// const  arrLetters=(array)=>{
//     let sorting =true
//     while( sorting){
//         sorting=false
//         for (let i = 0; i < array.length; i++) {
//             if(array[i]>array[i+1]){
//                 sorting =true
//                 let a=array[i]
//                 array[i]=array[i+1]
//                 array[i+1]=a
//             }
//         }
//     }
//     return array
// }
// console.log(sortLetters(arrLetters));  //['a', 'b', 'c', 'd', 'e', 'g', 'j']

// 9.Flat 'arr9'
const arr9 = [[1, 2], [3, 4, 5], [6, 7, 8, 9]]
const  flatArr=(me)=>{
    let newArr=[]
    for (let i = 0; i < me.length; i++){
        for (let j = 0; j < me[i].length; j++) {
            newArr.push(me[i]);
            
        }
    }
    return newArr
}
console.log(flatArr(arr9));  //[1, 2, 3, 4, 5, 6, 7, 8, 9]




