let text=document.querySelector("#text")
let email=document.querySelector("#mail")
let password=document.querySelector("#password")
let Check=document.querySelector("#check")
let submitbtn=document.querySelector(".submit")

let users=JSON.parse(localStorage.getItem("usersData")) || []

submitbtn.disabled=true

Check.addEventListener("click" ,function(){
    if(text.value && email.value && password.value ){
        submitbtn.disabled=false
    }
})

submitbtn.addEventListener("click" , function(){
    let userData={
        id: Date.now(),
        username:text.value,
        email: email.value,
        password:password.value,
        check:Check.checked
    }
    users.push(userData)
    localStorage.setItem("usersData" , JSON.stringify(users))
})

