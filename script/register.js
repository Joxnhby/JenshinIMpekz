const fullname = document.getElementById("fullname")
const email = document.getElementById("email")
const age = document.getElementById("age")
const password = document.getElementById("password")
const agree = document.getElementById("agree")
const btn = document.getElementById("btn")
const show = document.getElementById("show-pwd")

let fullnameVal = fullname.value
let emailVal = email.value
let ageVal = age.value
let passwordVal = password.value
let agreeVal = agree.checked
let showVal = show.checked
const errorHistoryElement = []
const errorHistoryParent = []

function setCookie(name, value, daysToLive) {
    const date = new Date()
    date.setTime(date.getTime() + (daysToLive * 24 * 60 * 60 * 1000))
    let expire = "expires=" + date.toUTCString()
    document.cookie = `${name}=${value}; ${expire}; path=/; SameSite=Lax`
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

    fullnameVal = fullname.value
    emailVal = email.value
    ageVal = age.value
    passwordVal = password.value
    agreeVal = agree.checked

    if (fullnameVal.length == 0) {
        setError("Fullname can't be empty!", fullname.parentElement)
    }
    for (let i = 0; i < fullnameVal.length; i++) {
        if (!(fullnameVal[i] >= 'a' && fullnameVal[i] <='z') && !(fullnameVal[i] >= 'A' && fullnameVal[i] <='Z') && fullnameVal[i] != ' ') {
            setError("Fullname must be alphabetic!", fullname.parentElement)
            break
        }
    }

    if (!emailVal.endsWith("@gmail.com") || emailVal.length < 11) {
        setError("Email must be @gmail.com", email.parentElement)
    } else if (emailVal.includes(" ")) {
        setError("Email can't contain space!", email.parentElement)
    } else if (emailVal.includes("~") || emailVal.includes("\"") || emailVal.includes("=")) {
        setError("Email can't contain ~ or \" or =", email.parentElement)
    } else {
        for (let i = 0; i < getCookieLength(); i++) {
            const temp = getCookie("jenshinUser" + i)
            if (temp != null) {
                const arr = temp.split("~")
                if (arr[1] == emailVal) {
                    setError("Email already exist", email.parentElement)
                    break
                }
            }
        }
    }

    if (ageVal < 18) {
        setError("Minimum age is 18!", age.parentElement)
    }

    if (passwordVal.includes(" ")) {
        setError("Password can't contain space!", password.parentElement)
    } else if (passwordVal.length < 8) {
        setError("Password at least 8 characters!", password.parentElement)
    } else if (passwordVal.includes("~") || passwordVal.includes("\"") || passwordVal.includes("=")) {
        setError("Password can't contain ~ or \" or =", password.parentElement)
    }

    if (!agreeVal) {
        setError("You have to agree to continue!", agree.parentElement.parentElement)
    }

    if (errorHistoryParent.length == 0) {
        const temp = []
        temp.push(fullnameVal)
        temp.push(emailVal)
        temp.push(ageVal)
        temp.push(passwordVal)
        const user = temp.join("~")
        const id = getCookieLength()
        setCookie("jenshinUser"+id, user, 1000)
        window.location.href = "./login.html"
    }
}

btn.addEventListener("click", (e)=>{
    validate(e)
})
fullname.addEventListener("keypress", (e)=>{
    if (e.key === "Enter") {
        validate(e)
    }
})
email.addEventListener("keypress", (e)=>{
    if (e.key === "Enter") {
        validate(e)
    }
})
age.addEventListener("keypress", (e)=>{
    if (e.key === "Enter") {
        validate(e)
    }
})
password.addEventListener("keypress", (e)=>{
    if (e.key === "Enter") {
        validate(e)
    }
})
agree.addEventListener("keypress", (e)=>{
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