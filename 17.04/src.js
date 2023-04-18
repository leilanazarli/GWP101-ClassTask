// 1.Write a function called: 'getUpper(anyArr)' that returns the newArr with the uppercased first and last character.
const arr1 = ['guba', 'mingecevir', 'baku', 'gazag', 'gence', 'shirvan']

// let newArr = arr1.map((el)=>el[0].toLocaleUpperCase() + el.slice(1,-1) + el.at(-1).toLocaleUpperCase()) 
// console.log(newArr);
// console.log: ['GubA', 'MingeceviR', 'BakU', 'GazaG', 'GencE', 'ShirvaN']


// 2.String and Array


// 1.Replace 'MERN Stack' with 'Front-end'.  // We are Front-end developers!
let text= 'We are MERN-Stack developers'
let neww = text.replace("MERN-Stack" ,"Front-end")
console.log(neww);
// 2.Replace all 'e' with 'a'. // wa ara marn-stack davalopars!
let newText= text.replaceAll('e','a')
console.log(newText);
// 3."in Microsoft!" concat to 'text'. //We are MERN-Stack developers in Microsoft!
const concatText = text.concat(" in Microsoft!")
console.log(concatText);
// 4.Find index of each 'r' and collect them in a new Array called 'newArr'  //[4, 9, 26]
const newArrr=[]
text.split('').map((item ,index)=>item.toLocaleLowerCase()==='r' ?newArrr.push(index):newArrr)
console.log(newArrr);
// 5.Find index of first 'r' (excepting 'are').  // 9
console.log(text.toLocaleLowerCase().indexOf("r",5))

// 6.Find out vowels in 'text' and add them to 'newArr' which contains unique values. //['e','a','o']
// let vowels = ['a', 'i', 'o', 'u', 'e']


// 3.Write a function(arrow function) called 'calcArea()' which to calculate sum region's area,
//  if region's length is equal to 6 in 'arr2'. 
// const arr3 = [
//     {
//         region: 'Yasamal',
//         area: 170,
//     },

//     {
//         region: 'Nizami',
//         area: 20,
//     },

//     {
//         region: 'Nesimi',
//         area: 10,
//     },

//     {
//         region: 'Sebail',
//         area: 30,
//     },
//     {
//         region: 'Xetai',
//         area: 30,
//     },

// ]

// console.log: (60)


// 4.Sort 'arr3' ascending order.
// const arr4 = [8, 44, 14, 2, 23, 1, 22, 34, 9, 0, 6]

// console.log: [0, 1, 2, 6, 8, 9, 14, 22, 23, 34, 44]


// 5.Gather all nested array in one array.
// const arr5 = [5, [8], [9, ['hi', ["don't touch me"], [0]], '9']]

// console.log: [5, 8, 9, 'hi', "don't touch me", 0, '9']


// 6.Sort array "colors" with color's length, if color's length is equal to each other sort them alphabetically.
// const colors = ['green', 'blue', 'yellow', 'black', 'red', 'brown', 'white', 'gray', 'violet', 'pink']

// console.log: ['red', 'blue', 'gray', 'pink', 'black', 'brown', 'green', 'white', 'violet', 'yellow']