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