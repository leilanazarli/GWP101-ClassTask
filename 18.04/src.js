// 1.Create a function called 'secretName()' that takes in an array of names and returns the first letter of name.//////////////
let names1 = ["Adam", "Sarah", "Malcolm"] //"ASM"
let names2 = ["Harry", "Newt", "Luna", "Cho"] //"CHLN"
let names3 = ["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"] //"CJMPRR"
function secretName(anyArray){
    newArr=anyArray.map((element)=> element[0]).join('')
    return newArr;
}
console.log(secretName(names1));
console.log(secretName(names2));
console.log(secretName(names3));


// 2.Manipulate array///////////////////////////////////////////////////////

const users = [
    { name: 'Anar', surname: 'Hesenli', age: '22', uni: 'ADA' ,gender: "male"},
    { name: 'Nezrin', surname: 'Reshidova', age: '23', uni: 'UNEC',gender: "female" },
    { name: 'Hikmet', surname: 'Hesenova', age: '22', uni: 'UNEC' ,gender: "male"},
    { name: 'Nicat', surname: 'Sadiqov', age: '25', uni: 'UNEC' ,gender: "male"},
    { name: 'Murad', surname: 'Salmanli', age: '23', uni: 'ADNSU' ,gender: "male"},
    { name: 'Aynure', surname: 'Hesenzade', age: '23', uni: 'BMU' ,gender: "female"},
]
// 2.1.Show users who is studying at 'UNEC' and surname starts 'r'.

 console.log( users.filter((element)=>element.uni==="UNEC" && element.surname[0].toLowerCase()==="r" ));
// 2.2.Show users whose age is eqaul to 22 and name start 'a'.

console.log(users.filter((element)=>element.name[0].toLowerCase()=="a" && element.age==="22"));
// 2.3.Return new array, if user is male add in front of name 'Mr', or Ms. (e.g. name:'Mr Anar', 'Ms Aynure').

// let newArray=JSON.parse(JSON.stringify(users))
// newArray.map((element)=>element.gender ==="male" ?element.name=== `Mr ${element.name}` :null || element.gender==="female" ?element.name=== `Ms ${element.name}` :null  )
// console.log(newArray);
// 2.4.Sort users by age (ascending).
console.log(users.sort((a,b)=>a.age-b.age));
// 3.Shuffle array////////////////////////////////////////////////////////////////////
// const letters = ['a', 'b', 'c', 'd']
// const numbers = [1, 2, 3, 4, 5, 6, 7]

// 4.Divide 2 the price of arr4.
// const arr4 = [
//     {
//         product: 'Lenova',
//         price: 1900,
//     },
//     {
//         product: 'HP',
//         price: 1300,
//     },
//     {
//         product: 'Acer',
//         price: 1600,
//     },
// ]


// 5.Create a function called 'reverseNum()' which is to bind number with its reverse.

// let num1 = 246 //246642
// let num2 = 102 //102201
// let num3 = 152 //152251



/////////////////////////////////////////////////////////////////////////////////

