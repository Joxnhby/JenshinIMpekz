const users = [
    {
        name: "Hans Christian",
        username: "Jox",
        age: 12,
        password: "12345678"
    }
]

const username = document.getElementById("username")
const password = document.getElementById("password")
const loggedusername = document.getElementById("logged-username")
console.log(loggedusername);
const btn = document.getElementById("btn")

let usernameVal = username.value
let passwordVal = password.value

btn.addEventListener("click", (e)=>{
    e.preventDefault()
    
    usernameVal = username.value
    passwordVal = password.value

    for(let i = 0; i < users.length; i++){
        if (users[i].username == usernameVal && users[i].password == passwordVal) {
            console.log("success")
            // loggedusername.innerHTML = users[i].username
            location.href = "index.html"
            return
        }
    }

    username.parentElement.classList.add("error")
    password.parentElement.classList.add("error")
}) 