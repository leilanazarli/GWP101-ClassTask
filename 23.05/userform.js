const BASE_URL = 'http://localhost:8080/users'
const userId = new URLSearchParams(window.location.search).get('id')
console.log(userId);
const firstName = document.querySelector('#firstName')
const lastName = document.querySelector('#lastName')
const userPhoto = document.querySelector('#photo')
const submitBtn = document.querySelector('#submitBtn')
const h3 = document.querySelector('h3')


async function createUser() {
    console.log(userPhoto.value);
    const user = {
        photo: `${userPhoto.value.split("\\")[2]}`,
        name: firstName.value,
        username: lastName.value,
    }
    await axios.post(BASE_URL, user)
    window.location.href = 'index.html'

}


if (userId) {
    async function getUserById() {
        const res = await axios(`${BASE_URL}/${userId}`)
        const data = await res.data
        firstName.value = data.name
        lastName.value = data.username
    }
    getUserById()
    
    submitBtn.value = 'Edit'
    // h3.innerHTML="Edit User"
}

async function editUser() {
    const user = {
        photo: `${userPhoto.value.split("\\")[2]}`,
        name: firstName.value,
        username: lastName.value,
    }
    await axios.patch(`${BASE_URL}/${userId}`, user)
    window.location.href = 'index.html'

}

userForm.addEventListener('submit', (e) => {
    e.preventDefault()
    if (userId) {
        editUser()
        console.log('edited');
    } else {
        createUser()
    }
    // console.log(userPhoto.value.split("\\")[2]);
})


