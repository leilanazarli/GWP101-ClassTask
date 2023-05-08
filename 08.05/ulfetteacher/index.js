let addbtn = document.querySelector(".addbtn")
let cards = document.querySelector(".card")


addbtn.addEventListener("click" , function(){
    console.log(addbtn);
   window.location("http://127.0.0.1:5500/ulfetteacher/adduser.html")
})


async function getdata() {
    cards.innerHTML=""
    const res = await fetch("https://northwind.vercel.app/api/suppliers")
    const data = await res.json()
    console.log(data);
   data.forEach(element => {
    let  card= document.createElement("div")
     card.innerHTML= `
     <div class="card-body " > 
     <h5 class="card-title">${element.companyName}</h5>
     <p class="card-text">${element.contactName}</p>
     <a href="./edituser.html" class="edit" style="color: rgb(20, 100, 40);"><i class="fa-solid fa-pen "></i></a>
     <i class="fa-solid fa-trash-can delete" style="color: red;" onclick=remove("${element.id}")></i>
 </div>   
     `
     cards.append(card)
});
}

getdata()
 

async function remove(id) {
    try {
        await fetch(`https://northwind.vercel.app/api/suppliers/${id}`,{
            method: "DELETE"
        } )
        getdata()
         
    } catch (error) {
        console.log(error);
    }
}
 remove() 
