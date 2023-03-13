const characters = [
    {
        name: "Venti",
        story: "A bard that seems to have arrived on some unknown wind — sometimes sings songs as old as the hills, and other times recites poems fresh and new.",
        background: "../assets/mondstadt/mondstadt-city.jpg",
        photo: "../assets/character/character-mondstadt/venti.png",
        avatar: "../assets/character/character-mondstadt/venti-logo.png",
        map: "mondstadt"
    },
    {
        name: "Jean",
        story: "As the Acting Grand Master of the Knights, Jean has always been devoted to her duties and maintaining peace in Mondstadt and she will guard Mondstadt with her life as always.",
        background: "../assets/mondstadt/mondstadt-city.jpg",
        photo: "../assets/character/character-mondstadt/jean.png",
        avatar: "../assets/character/character-mondstadt/jean-logo.png",
        map: "mondstadt"
    },
    {
        name: "Lisa",
        story: "She is an intellectual witch who can never get enough naps. As the Librarian of the Knights of Favonius, Lisa is smart in that she always knows exactly what to do with whatever troubles her.",
        background: "../assets/mondstadt/mondstadt-city.jpg",
        photo: "../assets/character/character-mondstadt/lisa.png",
        avatar: "../assets/character/character-mondstadt/lisa-logo.png",
        map: "mondstadt"
    },
    {
        name: "Kaeya",
        story: "In the Knights of Favonius, Kaeya is the confidant of Grand Master Jean. He can complete all the tasks assigned to him. Everyone in Mondstadt loves Kaeya, but no one knows the secret that this clever and charming knight tightly hides...",
        background: "../assets/mondstadt/mondstadt-city.jpg",
        photo: "../assets/character/character-mondstadt/kaeya.png",
        avatar: "../assets/character/character-mondstadt/kaeya-logo.png",
        map: "mondstadt"
    },
    {
        name: "Amber",
        story: "The only Outrider in the Knights of Favonius, a very cheerful and candid girl. Her ability to manipulate gliders in the air has won her the title of Gliding Champion in Mondstadt for three years in a row. As a shining star in the Knights of Favonius, Amber is always ready to face any challenges cheerfully.",
        background: "../assets/mondstadt/mondstadt-city.jpg",
        photo: "../assets/character/character-mondstadt/amber.png",
        avatar: "../assets/character/character-mondstadt/amber-logo.png",
        map: "mondstadt"
    },
    {
        name: "Zhongli",
        story: "Wangsheng Funeral Parlor mysterious consultant. Handsome, elegant, and surpassingly learned. Though no one knows where Zhongli is from, he is a master of courtesy and rules. From his seat at Wangsheng Funeral Parlor, he performs all manner of rituals.",
        background: "../assets/liyue/harbor.png",
        photo: "../assets/character/character-liyue/zhongli.png",
        avatar: "../assets/character/character-liyue/zhongli-logo.png",
        map: "liyue"
    },
    {
        name: "Ningguang",
        story: "The girl who was inseparable from every talk of the Liyue nobles, sat in the Jade Chamber, floating in the sky, with a mysterious smile painted on her face. As the Tianquan of Liyue Qixing, he was not only the symbol of law and authority, but also of prosperity and wisdom.",
        background: "../assets/liyue/harbor.png",
        photo: "../assets/character/character-liyue/ningguang.png",
        avatar: "../assets/character/character-liyue/ningguang-logo.png",
        map: "liyue"
    },
    {
        name: "Xiao",
        story: "One of the Bright and Mighty Adeptus who protected Liyue, was nicknamed the Vigilant Yaksha. Despite his youthful appearance, legends about him have been narrated in ancient books dating back thousands of years.",
        background: "../assets/liyue/harbor.png",
        photo: "../assets/character/character-liyue/xiao.png",
        avatar: "../assets/character/character-liyue/xiao-logo.png",
        map: "liyue"
    },
    {
        name: "Ganyu",
        story: "Secretary at Yuehai Pavillion. Within his body flowed the blood of the Qilin heritage beast. Ganyu's demeanor is elegant and calm, but the gentle nature of the Qilin in him does not prevent Ganyu from being strict and disciplined in his work.",
        background: "../assets/liyue/harbor.png",
        photo: "../assets/character/character-liyue/ganyu.png",
        avatar: "../assets/character/character-liyue/ganyu-logo.png",
        map: "liyue"
    },
    {
        name: "Hutao",
        story: "Hu Tao was the 77th Master of the Wangsheng Funeral Parlor, someone who played an important role in managing funeral affairs in Liyue. He performs the last rites of one's life splendidly, flawlessly, and maintains the balance of the world's Yin and Yang.",
        background: "../assets/liyue/harbor.png",
        photo: "../assets/character/character-liyue/hutao.png",
        avatar: "../assets/character/character-liyue/hutao-logo.png",
        map: "liyue"
    },
    {
        name: "Raiden Shogun",
        story: "Raiden Shogun — the most majestic and terrifying embodiment of lightning in the world, supreme ruler of the Inazuma Shogunate. Wielding the power of lightning, he continues to single-handedly pursue immortality.",
        background: "../assets/inazuma/inazuma-city.jpg",
        photo: "../assets/character/character-inazuma/raiden.png",
        avatar: "../assets/character/character-inazuma/raiden-logo.png",
        map: "inazuma"
    },
    {
        name: "Yae Miko",
        story: "The one who served as chief of the Narukami Grand Shrine, heir to the Kitsune bloodline, family and friends of the Immortality, and also ... the fearsome editor-in-chief of the light novel publisher, Yae Publishing House.",
        background: "../assets/inazuma/inazuma-city.jpg",
        photo: "../assets/character/character-inazuma/yae-miko.png",
        avatar: "../assets/character/character-inazuma/yae-miko-logo.png",
        map: "inazuma"
    },
    {
        name: "Kamisato Ayato",
        story: "Head of the Kamisato Clan and current Commissioner Yashiro. He always has a way to achieve his goals with a very neat and planned. However, not many people know what his true goals are.",
        background: "../assets/inazuma/inazuma-city.jpg",
        photo: "../assets/character/character-inazuma/ayato.png",
        avatar: "../assets/character/character-inazuma/ayato-logo.png",
        map: "inazuma"
    },
    {
        name: "Kamisato Ayaka",
        story: "The daughter of the Kamisato Clan of the Yashiro Commission. Dignified and elegant, wise and tough. Always treat others with sincerity and courtesy. Ayaka is loved by the people of Inazuma and nicknamed Shirasagi Himegimi.",
        background: "../assets/inazuma/inazuma-city.jpg",
        photo: "../assets/character/character-inazuma/ayaka.png",
        avatar: "../assets/character/character-inazuma/ayaka-logo.png",
        map: "inazuma"
    },
    {
        name: "Kaedehara Kazuha",
        story: "Wandering samurai from Inazuma, gentle and humble. Behind his young and carefree appearance, there is a lot of bitterness from the past. Although he always looks relaxed, he has his own principles in acting.",
        background: "../assets/inazuma/inazuma-city.jpg",
        photo: "../assets/character/character-inazuma/kazuha.png",
        avatar: "../assets/character/character-inazuma/kazuha-logo.png",
        map: "inazuma"
    },
    {
        name: "Nahida",
        story: "Lesser Lord Kusanali who lives in the Sanctuary of Surasthana, is always looked down upon and rarely talked about by people. She carried a heavy burden, even though she was always shrouded in darkness and lonely, she never stopped moving forward.",
        background: "../assets/sumeru/sumeru-city.jpg",
        photo: "../assets/character/character-sumeru/nahida.png",
        avatar: "../assets/character/character-sumeru/nahida-logo.png",
        map: "sumeru"
    },
    {
        name: "Tighnari",
        story: "Forest Protector in Avidya Forest, a botany student who graduated from Amurta. He lives his everyday life patrolling the rainforest, protecting its ecology, and teaching morons.",
        background: "../assets/sumeru/sumeru-city.jpg",
        photo: "../assets/character/character-sumeru/tighnari.png",
        avatar: "../assets/character/character-sumeru/tighnari-logo.png",
        map: "sumeru"
    },
    {
        name: "Nilou",
        story: "Theater star Zubayr, a dancer as graceful as a newly blooming lotus without a hint of blemish. However, he wasn't haughty and cold at all. Even a hurrying adventurer couldn't forget her sincere and radiant smile.",
        background: "../assets/sumeru/sumeru-city.jpg",
        photo: "../assets/character/character-sumeru/nilou.png",
        avatar: "../assets/character/character-sumeru/nilou-logo.png",
        map: "sumeru"
    },
    {
        name: "Cyno",
        story: "Mahamatra General Akademiya, leader of the Matras. His quirky sense of humor left a deep impression.",
        background: "../assets/sumeru/sumeru-city.jpg",
        photo: "../assets/character/character-sumeru/cyno.png",
        avatar: "../assets/character/character-sumeru/cyno-logo.png",
        map: "sumeru"
    },
    {
        name: "Wanderer",
        story: "If the standard for being human was having a heart, then he couldn't be considered that way. If a person without a heart could feel happiness and sadness, then he would become a doll similar to a human.",
        background: "../assets/sumeru/sumeru-city.jpg",
        photo: "../assets/character/character-sumeru/wanderer.png",
        avatar: "../assets/character/character-sumeru/wandererlogo.png",
        map: "sumeru"
    },
];

const background = document.getElementById("scenery-bg")
const characterBg = document.getElementById("char-bg")
const charName = document.getElementById("char-name")
const details = document.getElementById("char-details")
const maps = document.getElementsByClassName("map")
let charList = document.getElementById("characters-list")
let count = 0
const activeChar = []
const displayedCharSource = []
const displayedChar = []
const activeMap = []
const choosedMap = getCookie("choosedMap")

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

function clearLastActiveChar() {
    if (activeChar.length != 0) {
        activeChar[activeChar.length-1].classList.remove("active-character")
        activeChar[activeChar.length-1].classList.add("character")
        activeChar.pop()
    }
}

function setActiveChar(character) {
    clearLastActiveChar()
    character.classList.remove("character")
    character.classList.add("active-character")
    activeChar.push(character)
}

function setRecentMap(recentMap) {
    if (activeMap.length != 0) {
        activeMap[activeMap.length-1].classList.remove("active-side-nav")
        activeMap.pop()
    }
    recentMap.classList.add("active-side-nav")
    activeMap.push(recentMap)
}

function setChar(source, character) {
    setActiveChar(character)
    background.src = source.background
    characterBg.src = source.photo
    charName.innerText = source.name
    details.innerText =  source.story
}

function charEvent() {
    displayedChar.forEach(char => {
        char.addEventListener("click", (e)=>{
            setChar(displayedCharSource[displayedChar.indexOf(char)], char)
        })
    });
}

function filterDisplayChar(mapName) {
    while (displayedCharSource.length != 0) {
        displayedCharSource.pop()
        displayedChar.pop()
    }
    characters.forEach(char => {
        if (char.map == mapName) {
            displayedCharSource.push(char)
        }
    });
}

function makeCharacters() {
    while(charList.firstChild) {
        charList.removeChild(charList.lastChild)
    }
    for (let i = 0; i < displayedCharSource.length; i++) {
        const character = document.createElement("div")
        character.classList.add("character")
        const image = document.createElement("img")
        image.src = displayedCharSource[i].avatar
        const name = document.createElement("h3")
        name.innerText = displayedCharSource[i].name
    
        if (i == 0) {
            setChar(displayedCharSource[i], character)
        }
    
        character.appendChild(image)
        character.appendChild(name)
        charList.appendChild(character)
        displayedChar.push(character)
    }
    charEvent()
}

// initialize page
for (let i = 0; i < maps.length; i++) {
    if (maps[i].innerText.toLowerCase() == choosedMap) {
        filterDisplayChar(maps[i].innerText.toLowerCase())
        makeCharacters()
        setRecentMap(maps[i])
    }
    maps[i].addEventListener("click", (e)=>{
        filterDisplayChar(maps[i].innerText.toLowerCase())
        makeCharacters()
        setRecentMap(maps[i])
    })
}

if (activeMap.length == 0) {
    filterDisplayChar(maps[0].innerText.toLowerCase())
    makeCharacters()
    setRecentMap(maps[0])
}

deleteCookie("choosedMap")