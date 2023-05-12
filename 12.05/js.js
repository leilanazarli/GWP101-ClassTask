let tbody=document.querySelector("tbody")
let search=document.querySelector("#search")

axios("http://universities.hipolabs.com/search?country=azerbaijan").then((res)=>{
    console.log(res.data);
    drawTable(res.data)
})
function drawTable(arr){
    tbody.innerHTML=""
    arr.forEach(element => {
        // let tr = document.createElement("tr")
        tbody.innerHTML+=`
        <tr>
        <td> ${element.name}</td>
        <td> ${element.country}</td>
        <td> ${element.domains}</td>
        <td> <a href="${element.web_pages[0]}" target="_blank">${element.web_pages[0]}</a></td>
        </tr>
        `
    });
    // tbody.append(tr)
}
search.addEventListener("input" , function (e){
    tbody.innerHTML=""
    hidden.style.display="flex"
    axios("http://universities.hipolabs.com/search?country=azerbaijan").then((res)=>{
    let arr= res.data.filter((item)=>item.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
    hidden.style.display="none"
    drawTable(arr)
})
})

let hidden= document.querySelector(".spinner-border")

window.onload = function(){
    tbody.innerHTML=""
    hidden.style.display="flex"
    axios("http://universities.hipolabs.com/search?country=azerbaijan").then((res)=>{
    hidden.style.display="none"
    drawTable(res.data)
})
};

  
