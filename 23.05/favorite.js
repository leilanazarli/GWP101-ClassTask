let cards=document.querySelector(".cards")


axios("http://localhost:8080/fav").then(res=>{
    console.log(res.data);
    addfav(res.data)
})
 
function addfav(arr){
    cards.innerHTML=""
    arr.forEach(element => {
        cards.innerHTML+=`
        <div class="card" style="width: 18rem;">
          <img src="./assets/img/${element.photo}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${element.name}</h5>
            <p class="card-text">${element.username}</p>
            <a href="#" class="btn btn-danger" onclick=deleteFav('${element.id}',this) >Delete</a>
          </div>
        </div>
        `
    });
}

async function deleteFav(id,btn){
   await axios.delete(`http://localhost:8080/fav/${id}`)
   btn.closest('.card').remove()
}
