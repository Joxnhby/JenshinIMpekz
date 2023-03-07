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
const btn = document.getElementById("btn")

let usernameVal = username.value
let passwordVal = password.value

btn.addEventListener("click", (e)=>{
    e.preventDefault()
    usernameVal = username.value
    passwordVal = password.value

    users.forEach(user => {
        if (user.username == usernameVal && user.password == passwordVal) {
            console.log("success")
            return
        }
    });

    username.parentElement.classList.add("error")
    password.parentElement.classList.add("error")
}) 