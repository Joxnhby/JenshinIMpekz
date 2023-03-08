const fullname = document.getElementById("fullname")
const email = document.getElementById("email")
const age = document.getElementById("age")
const password = document.getElementById("password")
const agree = document.getElementById("agree")
const btn = document.getElementById("btn")

const fullnameVal = fullname.value
const emailVal = email.value
const ageVal = age.value
const passwordVal = password.value
const agreeVal = agree.value

alert("tes")

btn.addEventListener("click", (e)=>{
    e.preventDefault()
    fullnameVal = fullname.value
    emailVal = email.value
    ageVal = age.value
    passwordVal = password.value
    agreeVal = agree.value

    const error = document.createElement("p")
    error.className.add("error-text")

    if (fullnameVal.length == 0) {
        error.innerText = "Fullname can't be empty"
        fullname.parentElement.appendChild(error)
    }
    fullnameVal.forEach(char => {
        if (!(char >= 'a' && char <='z') && !(char >= 'A' && char <='Z') && char != ' ') {
            error.innerText = "Fullname must be alphabetic"
            fullname.parentElement.appendChild(error)
        }
    });

    if (emailVal.endsWith != "@gmail.com") {
        error.innerText = "Email must be @gmail.com"
        email.parentElement.appendChild(error)
    }

    if (ageVal < 18) {
        error.innerText = "Minimum age is 18"
        age.parentElement.appendChild(error)
    }

    if (password.length < 8) {
        error.innerText = "Password length at least 8 characters"
        password.parentElement.appendChild(error)
    }
})