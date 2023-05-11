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
let notification =document.querySelector("#notification")

const alert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
    //   '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('')
  
    notification.append(wrapper)
  }
   

axios("http://localhost:6300/users").then((res)=>{
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
    await  fetch(`http://localhost:6300/users/${id}`, {
        method: "DELETE"
      } )
      
        alert("Danger!!! ,U deleted your data" ,"danger")
   
}

let status=false
let editedId = null

async function edit(id){
     status=true
     editedId=id
    await  fetch(`http://localhost:6300/users/${editedId}`)
    .then((res)=>res.json()
    .then((data)=>{
        firstname.value=data.name;
        lastname.value=data.username;
        email.value=data.email;
        submit.innerHTML="Edit"

    })
    )}
    form.addEventListener("submit" , function(event){
         event.preventDefault()
         let obj={
           name:firstname.value,
           username:lastname.value,
           email:email.value
         }
            if(status){ 
            //    console.log(status);
               axios.patch(`http://localhost:6300/users/${editedId}`,obj)
               alert("Good job! ,Your data has been edited" ,"warning")
            }  
            else{
                axios.post("http://localhost:6300/users",obj)
                alert("Good job! ,Your data has been added" ,"success")
            }
       })
 let  searchSort=null
 let arr=[]
       searchinput.addEventListener("input" ,function(event){
        searchSort=true   
        axios(`http://localhost:6300/users`)
           .then((res)=>{  
               console.log(res.data);
        arr= res.data.filter((item)=> item.name.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase()) || item.username.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())  )
    // console.log(arr);
      getData(arr)
    })
    })

   let bool =false
    thfirstname.addEventListener('click',()=>{
        bool=!bool
        if(searchSort){
                 if(bool){
                    arrowdown.style.display='inline-block'
                    arrowup.style.display='none'
               sortedArr= arr.sort((a,b)=>a.name.localeCompare(b.name))
               getData(sortedArr)
            }
                 else{
                        arrowup.style.display='inline-block'
                        arrowdown.style.display='none'
                        sortedArr= arr.sort((a,b)=>b.name.localeCompare(a.name))
                        getData(sortedArr)
                    }
        
            }
       else{
        if(bool){
            arrowdown.style.display='inline-block'
            arrowup.style.display='none'
            axios(`http://localhost:6300/users`)
    .then((res)=>{  
       let sortedData= res.data.sort((a,b)=>a.name.localeCompare(b.name))
       getData(sortedData)
    })
         }
         else {
                arrowup.style.display='inline-block'
                arrowdown.style.display='none'
                axios(`http://localhost:6300/users`)
                .then((res)=>{  
                   let sortedData= res.data.sort((a,b)=>b.name.localeCompare(a.name))
                   getData(sortedData)
                })
            }
       }

    })



    