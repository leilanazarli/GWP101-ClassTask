const colors=['red','green','blue','yellow','orange','brown']
//1
$("#change").click(function(){
$("#title").css("color", colors[Math.floor(Math.random() *colors.length)]);
})
//2
$("#hide").click(()=>{
    $("#title").hide()
})
$("#show").click(()=>{
    $("#title").show()
})
//3
$.each( colors, function(color ,value) { 
    console.log(value)
})
//4
const numbers=[4 , 2 , false , null ,'false', NaN ,undefined ,8,true,'9']
let sum = 0
$.each( numbers, function( num, value ){
   if(value){
    sum += num
}
});
 
console.log( sum);
///////////////////////////ALQORIThms
//1
function capatalizeFirst(str){
  return str.split(' ').map(element => element[0].toUpperCase()+element.substring(1)).join(' ')
//   return str.split(' ').map(element => element[0].toUpperCase()+element.slice(1)).join(' ')
}
console.log(capatalizeFirst("This is a title"));
console.log(capatalizeFirst("capitalize every word"));
//2

function encoded(str){
 return str.split(' ').map(element =>element.length>4 ? element.split``.map((item)=>item="*").join`` : element).join(' ')
}
console.log(encoded("The code is fourty"));
console.log(encoded("Two plus three is five"));
console.log(encoded("aaaa aaaa 1234 12345"));