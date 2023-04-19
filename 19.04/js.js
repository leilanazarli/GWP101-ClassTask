//reverse string
function reverseString(str) {
    
     return  str.split("").reverse().join("")  
    }
    console.log(reverseString("hello"));

//polidrom
function isPolidrom(word) {
   let name =''
   name= word.split('').reverse().join("")
    if(name==word){
         console.log(`yes ${word} is polidrom`);
    }else{
        console.log (`no ${word} is polidrom`);
    }
   
}
isPolidrom('refer')
isPolidrom('mahamm')
//remove dublicated
let arr=[1,2,3,4,5,6,7,5,4,4,5,5,8,8]
function removeDublicated(ar) {
   return ar.filter((element,index)=>ar.indexOf(element) == index)
}
console.log(removeDublicated(arr));

function removeDublicated1(ar) {
    return [... new Set(ar)]
}console.log(removeDublicated1(arr));

//generate otp
function generateOtp() {
    var digits = '0123456789';
    let num = '';
    for (let i = 0; i < 4; i++ ) {
        num += digits[Math.floor(Math.random() * 10)];
    }
    return nu   
        
    
    
    m;
}
 
console.log(generateOtp());
//find all truth values