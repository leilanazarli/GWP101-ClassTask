// let arr=[4,5,6,7,8,9]

// console.log(arr.find((element) => element%3==2));
//1
let arr=[2,4,-3,-43,41,-3]
console.log(arr.filter((elem)=> elem<0));
//2
function isRecyangular(a,b,c) {
    if(a**2+b**2==c**2 || c**2+a**2==b**2 ){
        console.log("yes" );
    }
    else{
        console.log("no");
    }
}
isRecyangular(4,5,3)
//3
function factorial(n){
    let result=1
    for(let i=1 ; i<= n ; i++){
        result+=i
    }
    return result;
}
console.log(factorial(4));
//4
const countries=[
    "Finland",
    "Denmark",
    "Azerbaijan",
    "Norway",
    "Iceland"
]
console.log(countries.find((el)=>Math.max(el.length)));

let arr2 = [
    {
      name: "test",
      key: 9,
    },
    {
      name: "task",
      key: 4,
    },
    {
      name: "tanqo",
      key: 3,
    },
    {
      name: "like",
      key: 2,
    },
    {
      name: "task",
      key: 5,
    },
    {
      name: "trust",
      key: 8,
    },
    {
      name: "test",
      key: 12,
    },
    {
      name: "last",
      key: 6,
    },
    {
      name: "tanqo",
      key: 1,
    },
    {
      name: "elephant",
      key: 13,
    },
    {
      name: "love",
      key: 11,
    },
    {
      name: "small",
      key: 7,
    },
    {
      name: "little",
      key: 10,
    },
  ];

console.log(arr2.filter((element) => element.name[0].toLocaleLowerCase()==="t" && element.name[element.name.length-1]==="t" ));


//3
// function findMaxLength(array) {
//     let arrayLength =array.map((element)=> element.name.length);
//     return array.find((el)=>el.name.length == Math.max(...arrayLength) ) ;
// }
// console.log(findMaxLength(arr2));
//4

console.log(arr2.filter((element)=>element.key>10 && element.name[0]==="l"  ));
//5
let arr2Key=arr2.map((element)=>element.key ) 
// console.log(arr2Key);
let key=arr2.find((element)=>element.key == Math.max(...arr2Key))
console.log(key.key);

