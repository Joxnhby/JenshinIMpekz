const users = [
    {
        name: "Hans Christian Arinardi",
        email: "hans@gmail.com",
        age: 19,
        password: "12345678"
    },
    {
        name: "Jacky",
        email: "jacky@gmail.com",
        age: 18,
        password: "12345678"
    }
]

const email = document.getElementById("email")
const password = document.getElementById("password")
const loggedusername = document.getElementById("logged-username")
const btn = document.getElementById("btn")
const show = document.getElementById("show-pwd")

let emailVal = email.value
let passwordVal = password.value
let showVal = show.checked
const errorHistoryElement = []
const errorHistoryParent = []

function setCookie(name, value, daysToLive) {
    const date = new Date()
    date.setTime(date.getTime() + (daysToLive * 24 * 60 * 60 * 1000))
    let expire = "expires=" + date.toUTCString()
    document.cookie = `${name}=${value}; ${expire}; path=/; SameSite=Lax`
}

function getCookie(name) {
    const cDecoded = decodeURIComponent(document.cookie)
    const cArray = cDecoded.split("; ")
    let result = null

    for (let i = 0; i < cArray.length; i++) {
        if (cArray[i].indexOf(name) == 0) {
            result = cArray[i].substring(name.length + 1)
            break
        }
    }
    return result
}

function getCookieLength() {
    const cDecoded = decodeURIComponent(document.cookie)
    const cArray = cDecoded.split("; ")
    let length = cArray.length
    if (cArray[0] == "") {
        length = 0
    }
    return length
}


function deleteCookie(name) {
    setCookie(name, null, null)
}

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

    let found = false

    users.forEach(user => {
        if (user.email == emailVal && user.password == passwordVal) {
            loggedusername.innerHTML = user.name
            const firstName = user.name.split(" ")
            setCookie("jenshinFirstName", firstName[0], 1)
            window.location.href = "./index.html"
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
show.addEventListener("click", (e)=>{
    showVal = show.checked
    if (showVal == true) {
        password.type = "text"
    } else {
        password.type = "password"
    }
})

for (let i = 0; i < getCookieLength(); i++) {
    const user = new Object()
    const temp = getCookie("jenshinUser" + i)
    if (temp != null) {
        const str = temp.split("~")
        user.name = str[0]
        user.email = str[1]
        user.age = str[2]
        user.password = str[3]
        users.push(user)
    }
}