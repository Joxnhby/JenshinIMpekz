const burger = document.getElementById("burger-icon")
const cls = document.getElementById("close-icon")
const headerMenu = document.getElementById("header-menu")

headerMenu.classList.add("hide-menu")

burger.addEventListener("click", (e)=>{
    headerMenu.classList.add("show")
    headerMenu.classList.remove("hide-menu")
})

cls.addEventListener("click", (e)=>{
    headerMenu.classList.add("hide-menu")
    headerMenu.classList.remove("show")
})

function setCookie(name, value, daysToLive) {
    const date = new Date()
    date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000)
    let expired = "expires=" + date.toUTCString()
    document.cookie = `${name}=${value};${expired};path=/`
}

function deleteCookie(name) {
    setCookie(name, null, null)
}

function getCookie(name) {
    const cookies = decodeURIComponent(document.cookie)
    const cArray = cookies.split("; ")
    let result = null

    cArray.forEach(element => {
        if (element.indexOf(name) == 0) {
            result = element.substring(name.length + 1)
        }
    });
    return result
}

const loginBtn = document.getElementById("user-profile-non")
const logoutBtn = document.getElementById("log-out-btn")
const account = document.getElementById("user-profile-logged")
const username = document.getElementById("logged-username")
const firstName = getCookie("firstName")

if (firstName != null) {
    loginBtn.style.display = "none";
    account.style.display = "flex"
    username.innerText = firstName
}

logoutBtn.addEventListener("click", (e)=>{
    deleteCookie("firstName")
    loginBtn.style.display = "block";
    username.parentElement.parentElement.style.display = "none"
})

logoutBtn.style.top = "-200px"
account.addEventListener("click", (e)=>{
    if (logoutBtn.style.top == "-200px") {
        logoutBtn.style.top = "110%"
        logoutBtn.style.opacity = 1;
        account.style.backgroundColor = "var(--inazuma-purple)"
        username.style.color = "var(--white)"
    } else {
        logoutBtn.style.top = "-200px"
        logoutBtn.style.opacity = 0;
        account.style.backgroundColor = "transparent"
        username.style.color = "var(--deep-blue)"
    }
})