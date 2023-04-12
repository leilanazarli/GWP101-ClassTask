///1
let myText = "an array is a collection  of items of same data type stored at contiguous memory locations. "
let countA = 0 ;
for (let i=0 ; i<myText.length ; i++ ){
    if (myText[i]=="a" ){
        console.log('there are x number of "a"' , i );
         countA++;
    }
}
console.log(countA);
// console.log(myText.length);
//2
const arr1 = [1,2,4,5,7,9,13,22] ;
let sum = 0 ;
for (let i = 0; i < arr1.length; i++)
            sum += arr1[i];
            console.log(sum);
 //3
 const arr2 = [ false ,0, 2, true ,23 ,undefined, 'are u stack?' , 'come on']
for ( let m = 0 ; m< arr2.length;m++ ){
  if (m % 2 === 1) {
    arr2.push(m);
  }
};
console.log(arr2);
//4
// let text1= ['how is it going?']
//  let newText2=text1
//   if(){
//    } console.log(newText2);
//5 
 const numbersArr = [2 , 'false' , '5' ,'true' , 9 ,0 ,'1']
//  let sum = 0;
 for (let i = 0; i < numbersArr.length; ++i) {
     if (typeof(numbersArr)==="number") {
         sum += numbersArr[i];
         console.log(numbersArr);
     }
 }