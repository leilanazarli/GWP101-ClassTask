const letsStart=document.createElement('button')
const settime=document.createElement('p')

const section =document.createElement("form")
const nameLabel = document.createElement('label')
const nameInput =document.createElement('input')
const SurnameLabel = document.createElement('label')
const surnameInput =document.createElement('input')
const checkbox=document.createElement('input')
const radio1=document.createElement('input')
const radio2=document.createElement('input')
const btn=document.createElement('button')

const nextPage=document.createElement('button')

document.body.append(letsStart)
document.body.append(settime)
document.body.append(section)
section.append(nameLabel)
section.append(nameInput)
section.append(SurnameLabel)
section.append(surnameInput)
section.append(checkbox)
section.append(radio1)
section.append(radio2)
section.append(btn)
document.body.append(nextPage)

letsStart.innerText="Let's start..."
nameLabel.innerHTML="<strong>Name</strong>"
SurnameLabel.innerHTML="<strong>Surname</strong>"
btn.innerText="Submit"
nextPage.innerText="Next Page >"

nameInput.required = true
surnameInput.required = true
checkbox.required=true
radio1.required=true
radio2.required=true


nameInput.setAttribute("type","text","required")
surnameInput.setAttribute("type","text","required")
checkbox.setAttribute("type","checkbox","required")
radio1.setAttribute("type","radio","required")
radio2.setAttribute("type","radio","required")

settime.style.border="1px  solid #000"
settime.style.width="40px"
settime.style.padding="4px"
section.style.height = "100vh";
section.style.display = "flex";
section.style.alignItems = "center";
section.style.justifyContent = "center";
section.style.flexDirection = "column";
section.style.gap = "10px";
section.style.fontSize = "20px";
section.style.fontWeight = "bolder";
section.style.border = "1px dashed #000";
checkbox.style.accentColor="red"
radio1.style.accentColor="blue"
radio2.style.accentColor="blue"

btn.id = "submit";
document.getElementById("submit").disabled = true;
nextPage.id="nextpage";
letsStart.id="letsStart"

let value= 15
settime.innerHTML=`00:${value}`

let interval 
letsStart.addEventListener('click',function(){
   interval =setInterval(()=>{
        value -=1
        settime.innerHTML=`00:${value}`
        document.getElementById("submit").disabled = false;
        document.getElementById("letsStart").disabled = true;
       
        if(value<10){
           settime.style.border="1px solid red";
           settime.style.color="red"
       } if(value==0){
           settime.style.border="1px solid red";
           settime.style.width="60px";
           settime.innerHTML="u missed.)"
           clearInterval(interval)
           
        document.getElementById("submit").disabled = true;
    document.getElementById("nextpage").disabled = false;
        document.getElementById("letsStart").disabled = false;
           
       } 
       },1000)
})

document.getElementById("nextpage").disabled = true;
btn.onclick= function(){
    document.getElementById("nextpage").disabled = false;
}
letsStart.onclick=function(){
    value=15+1
}

nextPage.onclick= function() {
    alert("Hello!");
  }