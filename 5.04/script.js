console.log(12 * 8);
console.log();

let a = 10;
let b = 2;
let x = a / b;
console.log(x);

let num1 = 20;
let num2 = 17;
console.log(num1 + num2);

let name = "leyla",
  surname = "nezerli",
  year = "21";
let info = name + surname + year;
console.log(info);

let c = 17;
let y = 12;
console.log(c % y);

let cityName = "Baku";
let cityName2 = "Ganja";
console.log(cityName2);

let obj1 = {
  name: "leyla",
};
let obj2 = { ...obj1 };
console.log(obj2);

let cityName3 = { yourcity: "baku", uni: "gence" };
let newObj = { ...cityName3, yourcity: "Gence" };
console.log(cityName3);
console.log(newObj);
