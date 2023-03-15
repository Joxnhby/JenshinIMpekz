const maps = document.getElementsByClassName("map-container")

function setCookie(name, value, daysToLive) {
    const date = new Date()
    date.setTime(date.getTime() + (daysToLive * 24 * 60 * 60 * 1000))
    let expire = "expires=" + date.toUTCString()
    document.cookie = `${name}=${value}; ${expire}; path=/; SameSite=Lax;`
}

function deleteCookie(name) {
    setCookie(name, null, null)
}

for (let i = 0; i < maps.length; i++) {
    maps[i].addEventListener("click", (e)=>{
        const mapName = maps[i].lastElementChild
        const mapText = mapName.firstElementChild
        setCookie("jenshinSelectedMap", mapText.innerText.toLowerCase(), 1)
    })
}