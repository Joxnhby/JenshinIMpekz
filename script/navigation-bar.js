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

const loginBtn = document.getElementById("user-profile-non")
const logoutBtn = document.getElementById("log-out-btn")
const account = document.getElementById("user-profile-logged")
const username = document.getElementById("logged-username")
const firstName = localStorage.getItem("jenshinFirstName")

if (firstName != null) {
    loginBtn.style.display = "none";
    account.style.display = "flex"
    username.innerText = firstName
}

logoutBtn.addEventListener("click", (e)=>{
    localStorage.removeItem("firstName")
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