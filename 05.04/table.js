let tbody=document.querySelector(".tbody")

let url ='https://northwind.vercel.app/api/suppliers'

function createData(){
    fetch(url).then((result)=>result.json())
    .then((data)=>data.forEach(element => {
        tbody.innerHTML=""
        let tr=document.createElement("tr")
        tr.innerHTML+=`
      <td>${element.id}</td>
      <td>${element.companyName}</td>
      <td>${element.address.street}</td>
      <td>${element.address.country}</td>
      <td>${element.address.phone}</td>
      <td><button  id="${element.id}" style="background-color:red;" onclick=deletebtn("${element.id}") >Delete</button></td>
        `
        tbody.append(tr)
    })
    )
}
createData()
 
function  deletebtn(id){
    console.log('id',id);
    fetch(`https://northwind.vercel.app/api/suppliers/${id}` ,{
        method: "DELETE",
      });
    //   document.querySelector(`#${id}`).parent.remove();
      createData()
}
deletebtn()