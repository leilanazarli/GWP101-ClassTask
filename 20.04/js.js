let obj = {
    name : "leyla",
    surname : "nazarli",
    email: "leylanazarli.@gmail.com",
    tel: +994556779521 ,
    university: "GDU",
    adress:{
    city : "New Orleans",
    street: "rstt.sd"},
    skills: ["play piano","HTML","CSS","JS"],
    getAdress:  function () {
        return this.adress.street+","+this.adress.city;
    }
}
// console.log(obj.getAdress());
let{name , skills}=obj
// console.log(name ,skills);
console.log(Object.values(obj));
let randomArray=[100,200,300, , ,600];
// randomArray[5]=600
console.log(randomArray.length); 
console.log(10<20<30);
console.log(30>20>10);
let a=0
console.log(a++);
console.log(++a);
console.log(a);