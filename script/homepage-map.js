function setCookie(name, value, daysToLive) {
    const date = new Date()
    date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000)
    let expired = "expires=" + date.toUTCString()
    document.cookie = `${name}=${value};${expired};path=/`
}

const maps = document.getElementsByClassName("map-container")
for (let i = 0; i < maps.length; i++) {
    maps[i].addEventListener("click", (e)=>{
        const mapName = maps[i].lastElementChild
        const mapText = mapName.firstElementChild
        setCookie("choosedMap", mapText.innerText.toLowerCase(), 1)
    })
}