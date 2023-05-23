let carousel_item = document.querySelector(".din");
let arrowup = document.querySelector(".arrowup");
let arrowdown = document.querySelector(".arrowdown");
let search = document.querySelector("#search");

const BASE_URL = "http://localhost:8080/users";
axios(BASE_URL).then((res) => {
  console.log(res.data);
  getData(res.data);
});

function getData(arr) {
  carousel_item.innerHTML = "";
  arr.forEach((element) => {
    carousel_item.innerHTML += `
        <div class="card w-50" >
        <img src="./assets/img/${element.photo}" class="card-img-top" alt="...">
        <div class="card-body">
          <div class="d-block">
            <h5 class="card-title">${element.name}</h5>
            <p class="card-text">${element.years} yrs. old</p>
          </div>
          <a href="./userform.html?id=${element.id}" class="btn btn-primary mt-2" >Edit</a>
          <a href="#" class="btn btn-danger mt-2"  onclick=deleteUser('${element.id}',this)>Delete</a>
          <a href="#" class="btn btn-success mt-2"  onclick=AddFav('${element.id}')>Add to Fav</a>
        </div>
      </div>
        `;
  });
}

async function deleteUser(id, btn) {
  await axios.delete(`${BASE_URL}/${id}`);
  btn.closest('.card').remove()

}

async function AddFav(userid) {
  const res = await axios(`${BASE_URL}/${userid}`);
  const obj = await res.data;
  console.log(obj);
  await axios.post("http://localhost:8080/fav", obj);
}



arrowup.addEventListener("click", function () {
  axios(BASE_URL).then((res) => {
    let sortedArr = res.data.sort((a, b) => a.years - b.years);
    getData(sortedArr);
  });
});
arrowdown.addEventListener("click", function () {
  axios(BASE_URL).then((res) => {
    let sortedArr = res.data.sort((a, b) => b.years - a.years);
    getData(sortedArr);
  });
});

let arr = [];
search.addEventListener("input", async function (event) {
  arr.innerHTML = "";
  await axios(BASE_URL).then((res) => {
    arr = res.data.filter((item) =>
      item.name
        .toLocaleLowerCase()
        .includes(event.target.value.toLocaleLowerCase())
    );
    console.log(arr);
    getData(arr);
  });
});
// let favorite=JSON.parse(localStorage.getItem("fav")) || []

// async function AddFav(userid){
//     axios(`${BASE_URL}/${userid}`).then(res=>{
//     let ava=favorite.find(element=>element.id===res.data.id)
//     if(!ava){
//         favorite.push(res.data)
//         localStorage.setItem("fav" , JSON.stringify(favorite))

//     }else{
//         alert("already Add!")
//     }
//     })
// }
