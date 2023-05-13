let tbody=document.querySelector(".tbody")
let form=document.querySelector(".form")
let firstname =document.querySelector("#firstname")
let lastname =document.querySelector("#lastname")
let email =document.querySelector("#email")
let cardnumber =document.querySelector("#cardnumber")
let submit =document.querySelector(".submit")


let searchinput =document.querySelector("#searchinput")


const thfirstname=document.querySelector('#thfirstname')
let arrowup =document.querySelector(".arrowup")
let arrowdown =document.querySelector(".arrowdown")
let notification =document.querySelector("#notification")


const date = new Date()

function showMyAlert(classCase , username , date){
  notification.className=`alert alert-${classCase}`
  notification.innerHTML=`User : ${username} has been created on ${date}`
  notification.removeAttribute('hidden')
  setTimeout(() => {
    notification.setAttribute('hidden' ,'')
  }, 3000);
}
  
  function getData(){
    tbody.innerHTML=""
    axios("http://localhost:6300/users").then((res)=>
      res.data.forEach(element => {
        let tr=document.createElement("tr")
        tr.innerHTML +=`
        <td>${element.name}</td>
        <td>${element.username}</td>
        <td>${element.email}</td>
        <td>${element.cardnumber.split('').fill("*",0,cardnumber.value.length-4).join('')}</td>
        <td>
        <div>        
        <a class="edit btn btn-warning" onclick=edit("${element.id}")>Edit</a>
        <a class="delete btn btn-danger" onclick=deleteData("${element.id}")>Delete</a>
        <a class="detail btn btn-primary" onclick=detailData("${element.id}")>Detail</a>
        </div>
        </td>
        `
        tbody.append(tr)
      })
    )}
    getData()

async function deleteData(id){
  tbody.innerHTML=""
    axios.delete(`http://localhost:6300/users/${id}`).then((res)=>{
      showMyAlert('danger' ,`Danger!!! ,${res.data.username} deleted your data`, date )

    })
    getData()
   
}

function detailData(id){
     axios(`http://localhost:6300/users/${id}`).then((res)=>{
       showMyAlert('primary' ,`Hello!1 , ${res.data.username} This is about your data`, date )

     })
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
        cardnumber.value=data.cardnumber
        submit.innerHTML="Edit"

    })
    )}
    form.addEventListener("submit" , function(event){
         event.preventDefault()
         let obj={
           name:firstname.value,
           username:lastname.value,
           email:email.value,
           cardnumber: cardnumber.value  ,
           date:date.toLocaleDateString()
         }
            if(status){ 
            //    console.log(status);
               axios.patch(`http://localhost:6300/users/${editedId}`,obj).then((res)=>{
                 showMyAlert('warning' ,`Hello! ,Good job! ,${res.data.username} data has been edited`,date )
               })
               getData()

            }  
            else{
                axios.post("http://localhost:6300/users",obj).then((res)=>{
                  showMyAlert('success' ,`Hello! ,${res.data.username} data has been added`,date )
                })
               getData()

            }
       })
       function getArr(array){
        tbody.innerHTML=""
        array.forEach(element => {
          let tr=document.createElement("tr")
          tr.innerHTML +=`
          <td>${element.name}</td>
          <td>${element.username}</td>
          <td>${element.email}</td>
          <td>${element.cardnumber.split('').fill("*",0,cardnumber.value.length-4).join('')}</td>
          <td>
          <div>        
          <button class="edit btn btn-warning" onclick=edit("${element.id}")>Edit</button>
          <button class="delete btn btn-danger" onclick=deleteData("${element.id}")>Delete</button>
          <button class="detail btn btn-primary" onclick=detailData("${element.id}")>Detail</button></div>
          </td>
          `
          tbody.append(tr)
        })
       }
 let  searchSort=null
 let arr=[]                                                
       searchinput.addEventListener("input" ,function(event){
        searchSort=true   
        tbody.innerHTML=""
    //     axios(`http://localhost:6300/users`)
    //        .then((res)=>{  
    //           //  console.log(res.data);
    // // console.log(arr);
   
    axios.get("http://localhost:6300/users").then(res=>{

    arr= res.data.filter((item)=> item.name.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase()) || item.username.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())  )

      getArr(arr)
    })
  })
// })

   let bool =false
    thfirstname.addEventListener('click',()=>{
        bool=!bool
        if(searchSort){
                 if(bool){
                    arrowdown.style.display='inline-block'
                    arrowup.style.display='none'
               sortedArr= arr.sort((a,b)=>a.name.localeCompare(b.name))
               getArr(sortedArr)
            }
                 else{
                        arrowup.style.display='inline-block'
                        arrowdown.style.display='none'
                        sortedArr= arr.sort((a,b)=>b.name.localeCompare(a.name))
                        getArr(sortedArr)
                    }
        
            }
       else{
        if(bool){
            arrowdown.style.display='inline-block'
            arrowup.style.display='none'
            axios(`http://localhost:6300/users`)
    .then((res)=>{  
       let sortedData= res.data.sort((a,b)=>a.name.localeCompare(b.name))
       getArr(sortedData)
    })
         }
         else {
                arrowup.style.display='inline-block'
                arrowdown.style.display='none'
                axios(`http://localhost:6300/users`)
                .then((res)=>{  
                   let sortedData= res.data.sort((a,b)=>b.name.localeCompare(a.name))
                   getArr(sortedData)
                })
            }
       }

    })



    