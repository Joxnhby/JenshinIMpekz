const maps = document.getElementsByClassName("map-container")
for (let i = 0; i < maps.length; i++) {
    maps[i].addEventListener("click", (e)=>{
        const mapName = maps[i].lastElementChild
        const mapText = mapName.firstElementChild
        localStorage.setItem("selectedMap", mapText.innerText.toLowerCase(), 1)
    })
}