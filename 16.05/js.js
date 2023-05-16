let cards = document.querySelector(".row")
let search = document.querySelector("#search")
let select = document.querySelector(".form-select")
let btn = document.querySelector("#btn")
// let header = document.querySelector("header")
// let container = document.querySelector(".container")


// axios("https://restcountries.com/v2/all")
let darkMode = JSON.parse(localStorage.getItem("darkmode")) || "true"
 
btn.addEventListener("click" ,function () {
    JSON.parse(localStorage.getItem("darkmode"))
    &&
    document.body.classList.add("dark")
    
    localStorage.removeItem("darkmode")
})



axios("https://restcountries.com/v2/all").then((res)=>{
    console.log(res.data)
    getData(res.data)
})
function getData(array){
    cards.innerHTML=""
    array.forEach(element => {
      cards.innerHTML+= `
     <div class=" col col-3 col-sm-6">
     <a  target="_blank" href="detail.html?name=${element.name}" class="btn btn-light">
     <div class="card" style="width: 18rem;">
     <img src="${element.flags.svg}" class="card-img-top w-100" alt="...">
     <div class="card-body">
       <h5 class="card-title">${element.name}</h5>
       <p class="card-text">Population: ${element.population}</p>
       <p class="card-text">Region: ${element.region}</p>
       <p class="card-text">Capital: ${element.capital}</p>
     </div>
     </div>
     </a>
     </div>
      `

    });
}
search.addEventListener("click" , function(e){
    axios("https://restcountries.com/v2/all").then((res)=>{
        let arr= res.data.filter((item)=>item.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
        getData(arr)
    })

})
select.addEventListener("change" ,function(event){
    axios("https://restcountries.com/v2/all").then((res)=>{
        let filter= res.data.filter((item)=>item.region.toLocaleLowerCase()==event.target.value.toLocaleLowerCase())
        getData(filter)
        console.log(filter);
    })
})

let hidden= document.querySelector(".spinner-border")

window.onload = function(){
    cards.innerHTML=""
    hidden.style.display="flex"
    axios("https://restcountries.com/v2/all").then((res)=>{
    hidden.style.display="none"
    getData(res.data)
})
};
select.onload = function(){
    cards.innerHTML=""
    hidden.style.display="flex"
    axios("https://restcountries.com/v2/all").then((res)=>{
    hidden.style.display="none"
    getData(res.data)
})
};
