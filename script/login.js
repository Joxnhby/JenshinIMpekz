const users = [
    {
        name: "Hans",
        email: "jox@gmail.com",
        age: 18,
        password: "12345678"
    },
    {
        name: "Joakim Saroin",
        email: "saroo@gmail.com",
        age: 18,
        password: "12345678"
    },
    {
        name: "Acong",
        email: "acg@gmail.com",
        age: 18,
        password: "12345678"
    }
]

const email = document.getElementById("email")
const password = document.getElementById("password")
const loggedusername = document.getElementById("logged-username")
const btn = document.getElementById("btn")

let emailVal = email.value
let passwordVal = password.value
const errorHistoryElement = []
const errorHistoryParent = []

function setError(errorMsg, parent) {
    let error = document.createElement("p")
    error.classList.add("error-text")
    error.innerText = errorMsg
    parent.appendChild(error)
    parent.classList.add("error")
    errorHistoryElement.push(error)
    errorHistoryParent.push(parent)
}

function validate(e) {
    e.preventDefault()

    errorHistoryElement.forEach(err => {
        err.remove()
    });
    errorHistoryParent.forEach(err => {
        err.classList.remove("error")
    });

    while (errorHistoryElement.length != 0) {
        errorHistoryElement.pop()
    }
    while (errorHistoryParent.length != 0) {
        errorHistoryParent.pop()
    }

    emailVal = email.value
    passwordVal = password.value

    if (!emailVal.endsWith("@gmail.com") || emailVal.length < 11) {
        setError("Email must be @gmail.com", email.parentElement)
    }

    if (passwordVal.length < 8) {
        setError("Password at least 8 characters!", password.parentElement)
    }

    if (errorHistoryElement.length != 0) {
        return
    }

    const found = false

    users.forEach(user => {
        if (user.email == emailVal && user.password == passwordVal) {
            loggedusername.innerHTML = user.name
            const firstName = user.name.split(" ")
            setCookie("firstName", firstName[0])
            console.log(document.cookie)
            window.location.href = "/"
            found = true
        }
    })

    if (!found) {
        setError("Email or password is invalid", password.parentElement)
        setError("Email or password is invalid", email.parentElement)
    }   
}

btn.addEventListener("click", (e)=>{
    validate(e)
})
password.addEventListener("keypress", (e)=>{
    if (e.key === "Enter") {
        validate(e)
    }
})
email.addEventListener("keypress", (e)=>{
    if (e.key === "Enter") {
        validate(e)
    }
})

function setCookie(name, value, daysToLive) {
    const date = new Date()
    date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000)
    let expired = "expires=" + date.toUTCString()
    document.cookie = `${name}=${value};${expired};path=/`
}