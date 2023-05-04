let boxes = document.querySelector(".boxes")
let add = document.querySelector(".add")

let users = JSON.parse(localStorage.getItem('usersData')) || []

function createUser() {
    boxes.innerHTML = ""
    users.forEach(element => {
        const box = document.createElement("div")
        box.innerHTML = ` 
    <div class="card flex-column" style="width: 18rem;">
      <h1 class="card-title">User</h1>
      <p class="card-text">Name:${element.username}</p>
      <p class="card-text">Email:${element.email}</p>
      <button type="button" class="btn btn-danger" onclick=remove(${element.id})>Delete</button>
    </div>
    
    `
        boxes.append(box)
        localStorage.setItem("usersData", JSON.stringify(users))
    });
}
createUser()

function remove(id) {
     users = users.filter((el) => el.id !== id)
     localStorage.setItem("usersData", JSON.stringify(users))
    //  this.closest("div").remove();
     
    createUser()
}