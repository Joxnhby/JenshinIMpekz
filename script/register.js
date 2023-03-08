const fullname = document.getElementById("fullname")
const email = document.getElementById("email")
const age = document.getElementById("age")
const password = document.getElementById("password")
const agree = document.getElementById("agree")
const btn = document.getElementById("btn")

let fullnameVal = fullname.value
let emailVal = email.value
let ageVal = age.value
let passwordVal = password.value
let agreeVal = agree.value
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

btn.addEventListener("click", (e)=>{
    e.preventDefault()

    errorHistoryElement.forEach(err => {
        err.remove()
    });
    errorHistoryParent.forEach(err => {
        err.classList.remove("error")
    });

    fullnameVal = fullname.value
    emailVal = email.value
    ageVal = age.value
    passwordVal = password.value
    agreeVal = agree.value

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
    }

    if (ageVal < 18) {
        setError("Minimum age is 18!", age.parentElement)
    }

    if (passwordVal.length < 8) {
        setError("Password at least 8 characters!", password.parentElement)
    }

    if ()
})