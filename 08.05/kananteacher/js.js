// async function getdata() {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users")
//     const data = await res.json()
//     console.log(data);
// }

// getdata()


async function getdate() {
    try {
        axios.get("https://northwind.vercel.app/api/suppliers").then((res)=>console.log(res.data))

    } catch (error) {
        console.log(error);
    }
}
getdate()


 function deletedate(id) {
    try {
        axios.delete(`https://northwind.vercel.app/api/suppliers/${id}`)

    } catch (error) {
        console.log(error);
    }
}
deletedate(7)

function addCustomer(obj) {
  try {
    axios.post(`https://northwind.vercel.app/api/suppliers/`, obj);
  } catch (error) {
    console.log(error.message);
  }
}

addCustomer({
  name: "leyla ",
  age: 22,
});
