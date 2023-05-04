let listItem = document.querySelector(".list-group")
let addbtn = document.querySelector(".addbtn")
let todoinput = document.querySelector("#todoinput")


let itemslocal=JSON.parse(localStorage.getItem("items")) || []

 addbtn.addEventListener("click", function (){
if(todoinput.value){
    let obj={
        id: Date.now(),
        todoText: todoinput.value
    };
    itemslocal.push(obj)
    localStorage.setItem("items", JSON.stringify(itemslocal));
}
 })

addbtn.addEventListener("click", createTodo);


function createTodo() {
    listItem.innerHTML=""
itemslocal.forEach(elem=>{
    listItem.innerHTML += `
    
    <li
    class="list-group-item list-group-item-success my-2 d-flex justify-content-between align-items-center rounded"
  >
  <input type="checkbox"  id="checkbox" >
    <span>${elem.todoText}</span>
    <div>
      <button type="button" class="btn btn-success" onclick=edit(${elem.id})>Edit</button>
      <button type="button" class="btn btn-danger" onclick=remove(${elem.id})>Delete</button>
    </div>
  </li>
    `;
})
}
createTodo()

    function edit(id){ ocal.filter((el)=>el.id!= id)
        createTodo()      

        }
   
      
    function remove(id){
        itemslocal=itemslocal.filter((el)=>el.id!= id)
        localStorage.setItem("items", JSON.stringify(itemslocal));
        createTodo()
        todoinput.value=""
    }
//   let allDeleteBtns = document.querySelectorAll(".btn-danger");

//   allDeleteBtns.forEach((item) => {
//     item.addEventListener("click", function () {
//       this.closest("li").remove();
//       localStorage.clear()
//     });
//   });
//   let allEditBtns =document.querySelectorAll(".btn-success")
//   allEditBtns.forEach((item) => {
//     item.addEventListener("click", function () {
//         todoinput.value = this.closest("li").firstElementChild.innerText;
//         todoinput.focus();
//         this.closest("li").remove();
//     });
//   });

