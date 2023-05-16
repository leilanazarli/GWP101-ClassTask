let row=document.querySelector(".row")
let button=document.querySelector(".btn")
button.addEventListener("click" , function(){
    window.location="index.html"
})
let name = new URLSearchParams(window.location.search).get("name");

axios(`https://restcountries.com/v3.1/name/${name}`).then((res)=>{
    console.log(res.data)
    
    row.innerHTML= `
         <div class=" col col-12">
         <div class="card" style="width: 18rem;">
     <img src="${res.data[0].flags.svg}" class="card-img-top w-100" alt="...">

         <div class="card-body">
           <h5 class="card-title">${res.data[0].name.common}</h5>
           <p class="card-text">Population: ${res.data[0].population}</p>
           <p class="card-text">Languages: ${Object.values(res.data[0].languages)}</p>
           <p class="card-text">Subregion: ${res.data[0].subregion}</p>
           <p class="card-text">Region: ${res.data[0].region}</p>
    
         </div>
         </div>
         </div>
          `
    
        });

