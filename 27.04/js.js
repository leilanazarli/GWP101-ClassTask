const namee = document.querySelector("#name")
const surname = document.querySelector("#surname")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const checkBox = document.querySelector("#checkBox")
const checkedLabel = document.querySelector(".checkedLabel")
const radioinput = document.querySelectorAll(".radio")
const submit =document.querySelector(".submit")
namee.required = true
surname.required = true
email.required = true
password.required = true

namee.addEventListener("focus", function () {
    this.style.background = "grey"
    this.style.color = "blue"
})
namee.addEventListener("mouseout", function () {
    this.style.background = "transparent"
})
surname.addEventListener("mouseover", function () {
    this.style.background = "green"
})
surname.addEventListener("mouseout", function () {
    this.style.background = "transparent"
})
email.addEventListener("contextmenu", function () {
    this.style.background = "blue"
})
email.addEventListener("mouseover", function () {
    this.style.background = "transparent"
})

password.addEventListener("focus", function () {
      this.value="****"
})
password.addEventListener("mouseover", function () {
    this.value=""
})
checkBox.addEventListener('click', () => {
    if (checkBox.checked) {
        checkedLabel.style.visibility = 'visible'
    }else{
        checkedLabel.style.visibility = 'hidden'
    }
})

radioinput.forEach(element => {
    element.addEventListener("click",function(){
        alert("Hello")
    });
})
submit.id = "submit";
document.getElementById("submit").disabled = true;
checkBox.addEventListener("click" , function(){
    if(namee.value==="`" || password.value==="" ||email.value==="" ||surname.value===""  ){
    document.getElementById("submit").disabled = true;}
    else{
    document.getElementById("submit").disabled = false;}
    })