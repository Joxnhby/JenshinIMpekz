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

function deleteCookie(name) {
    setCookie(name, null, null)
}

const loginBtn = document.getElementById("user-profile-non")
const logoutBtn = document.getElementById("log-out-btn")
const account = document.getElementById("user-profile-logged")
const username = document.getElementById("logged-username")
const firstName = getCookie("jenshinFirstName")

if (firstName != null) {
    loginBtn.style.display = "none";
    account.style.display = "flex"
    username.innerText = firstName
}

logoutBtn.addEventListener("click", (e)=>{
    deleteCookie("jenshinFirstName")
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