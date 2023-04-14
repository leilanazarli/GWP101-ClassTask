////////////////////1. Splice metod
//1 
const arr1 = ['a','b','c','d','e']
// arr1.splice(1,1)
// console.log(arr1);
//2
// arr1.splice(2,2)
// console.log(arr1);
//3
// arr1.splice(arr1.length-1)
// console.log(arr1);
//4
// arr1.splice(arr1.length-3)
// console.log(arr1);
//5
// arr1.splice(2,0,"3","4")
// console.log(arr1);
//6
// arr1.splice(0,2,"A","B")
// console.log(arr1);
////////////////////////////2.Slice metod
const arr2=['user1', 'user2','user3', 11,3,5]
// //1
// const newArr = arr2.slice()
// console.log(newArr);
// //2
// const newArr1 =arr2.slice(1,5)
// console.log(newArr1);
// //3
// const newArr2=arr2.slice(2)
// console.log(newArr2);
////////////////////////////////////////3.concat metod
const arr3 = [1,2,3]
const arr33 = [4,5,6]
// //1
// const newConcat = arr3.concat(arr33)
// console.log(newConcat);
// //2
// const newConcat1 = arr3.concat(['a','b'])
// console.log(newConcat1);
////////////////////////////////////4.forEach method
const arr4=['name','surname',10,'age','city','uni',80 ,20]
//1
arr4.forEach((item) =>{console.log(item);})
//2
//  arr4.forEach((item)=>(typeof item==='number') ?(item*=2) :item )
// console.log(item);
////////////////////////////////////5.Map method
const arr5= [4,5,6,'2',6,true,undefined,'55']
//1
let result = arr5.map((item) => {console.log(item);})
//2
let result1 = arr5.map((item) =>(typeof item==='number') ?(item*=5) :item )
console.log(result1);
//3
let result2 = arr5.map((item) =>(typeof item==='string'))
console.log(result2);
//4
let result3 = arr5.map((item) =>(typeof item==="boolean"))
console.log(result3);
//5
let result4 = arr5.map((item) =>(typeof item==="number"))
console.log(result4);
///////////////////////////6.Filter metod
const mixArray = ['1',2,4,'a',false, '9',12,undefined,3,true,null]
//1
let result5= mixArray.filter(item => typeof item==='number')
console.log(result5);
//2
let result6= mixArray.filter(item => typeof item==='string')
console.log(result6);
//3
let result7= mixArray.filter(item => typeof item==='boolean')
console.log(result7);
//4
let result8 = mixArray.filter(item=>!item )
console.log(result8);






