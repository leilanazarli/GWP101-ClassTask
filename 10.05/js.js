let tbody=document.querySelector(".tbody")
let form=document.querySelector(".form")
let firstname =document.querySelector("#firstname")
let lastname =document.querySelector("#lastname")
let email =document.querySelector("#email")
let submit =document.querySelector(".submit")


let searchinput =document.querySelector("#searchinput")


const thfirstname=document.querySelector('#thfirstname')
let arrowup =document.querySelector(".arrowup")
let arrowdown =document.querySelector(".arrowdown")


axios("http://localhost:3000/users").then((res)=>{
    // console.log(res.data);
    getData(res.data)

})

 function getData(arr){
    tbody.innerHTML=""
    arr.forEach(element => {
        let tr=document.createElement("tr")
        tr.innerHTML +=`
        <td>${element.name}</td>
        <td>${element.username}</td>
        <td>${element.email}</td>
        <td>
       <div>        
       <button class="edit btn btn-warning" onclick=edit("${element.id}")>Edit</button>
       <button class="delete btn btn-danger" onclick=deleteData("${element.id}")>Delete</button></div>
        </td>
        `
        tbody.append(tr)
    });
}
async function deleteData(id){
    await  fetch(`http://localhost:3000/users/${id}`, {
        method: "DELETE"
      } )
}

async function edit(id){
    await  fetch(`http://localhost:3000/users/${id}`)
    .then((res)=>res.json()
    .then((data)=>{
        firstname.value=data.name;
        lastname.value=data.username;
        email.value=data.email;

     form.addEventListener("submit" , function(event){
          event.preventDefault()
          let obj={
            name:firstname.value,
            username:lastname.value,
            email:email.value
          }
         axios.patch(`http://localhost:3000/users/${id}`,obj)

        })
    })
   )}

searchinput.addEventListener("input" ,function(event){
    axios(`http://localhost:3000/users`)
    .then((res)=>{  
        console.log(res.data);
       let filteredData= res.data.filter((item)=>{
           return item.name.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase()) || item.username.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase()) 
      }  )
      getData(filteredData)
    })
    })

   let bool =false
    thfirstname.addEventListener('click',()=>{
        bool=!bool
         if(bool){
            arrowdown.style.display='inline-block'
            arrowup.style.display='none'
            axios(`http://localhost:3000/users`)
    .then((res)=>{  
       let sortedData= res.data.sort((a,b)=>a.name.localeCompare(b.name))
       getData(sortedData)
    })
         }
         else{
                arrowup.style.display='inline-block'
                arrowdown.style.display='none'
                axios(`http://localhost:3000/users`)
                .then((res)=>{  
                   let sortedData= res.data.sort((a,b)=>b.name.localeCompare(a.name))
                   getData(sortedData)
                })
            }

    })

form.addEventListener("submit",function(){
    try{
        axios.post("http://localhost:8000/users",obj)
    }
    catch(err){
        console.log(err);
    }
    // addUsers({
    //     name:firstname.value,
    //     username:lastname.value,
    //     email:email.value
    //    })
})
    