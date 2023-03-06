const characters = [
    {
        name: "Venti",
        story: "A bard that seems to have arrived on some unknown wind — sometimes sings songs as old as the hills, and other times recites poems fresh and new.",
        background: "/assets/mondstadt/mondstadt-city.jpg",
        photo: "/assets/character/character-mondstadt/venti.png",
        avatar: "/assets/character/character-mondstadt/venti-logo.png",
        map: "mondstadt"
    },
    {
        name: "Jean",
        story: "As the Acting Grand Master of the Knights, Jean has always been devoted to her duties and maintaining peace in Mondstadt and she will guard Mondstadt with her life as always.",
        background: "/assets/mondstadt/mondstadt-city.jpg",
        photo: "/assets/character/character-mondstadt/jean.png",
        avatar: "/assets/character/character-mondstadt/jean-logo.png",
        map: "mondstadt"
    },
    {
        name: "Lisa",
        story: "She is an intellectual witch who can never get enough naps. As the Librarian of the Knights of Favonius, Lisa is smart in that she always knows exactly what to do with whatever troubles her.",
        background: "/assets/mondstadt/mondstadt-city.jpg",
        photo: "/assets/character/character-mondstadt/lisa.png",
        avatar: "/assets/character/character-mondstadt/lisa-logo.png",
        map: "mondstadt"
    },
    {
        name: "Kaeya",
        story: "In the Knights of Favonius, Kaeya is the confidant of Grand Master Jean. He can complete all the tasks assigned to him. Everyone in Mondstadt loves Kaeya, but no one knows the secret that this clever and charming knight tightly hides...",
        background: "/assets/mondstadt/mondstadt-city.jpg",
        photo: "/assets/character/character-mondstadt/kaeya.png",
        avatar: "/assets/character/character-mondstadt/kaeya-logo.png",
        map: "mondstadt"
    },
    {
        name: "Amber",
        story: "The only Outrider in the Knights of Favonius, a very cheerful and candid girl. Her ability to manipulate gliders in the air has won her the title of Gliding Champion in Mondstadt for three years in a row. As a shining star in the Knights of Favonius, Amber is always ready to face any challenges cheerfully.",
        background: "/assets/mondstadt/mondstadt-city.jpg",
        photo: "/assets/character/character-mondstadt/amber.png",
        avatar: "/assets/character/character-mondstadt/amber-logo.png",
        map: "mondstadt"
    },
    {
        name: "Zhongli",
        story: "Wangsheng Funeral Parlor mysterious consultant. Handsome, elegant, and surpassingly learned. Though no one knows where Zhongli is from, he is a master of courtesy and rules. From his seat at Wangsheng Funeral Parlor, he performs all manner of rituals.",
        background: "/assets/liyue/harbor.png",
        photo: "/assets/character/character-liyue/zhongli.png",
        avatar: "/assets/character/character-liyue/zhongli-logo.png",
        map: "liyue"
    },
    {
        name: "Ningguang",
        story: "The girl who was inseparable from every talk of the Liyue nobles, sat in the Jade Chamber, floating in the sky, with a mysterious smile painted on her face. As the Tianquan of Liyue Qixing, he was not only the symbol of law and authority, but also of prosperity and wisdom.",
        background: "/assets/liyue/harbor.png",
        photo: "/assets/character/character-liyue/ningguang.png",
        avatar: "/assets/character/character-liyue/ningguang-logo.png",
        map: "liyue"
    },
    {
        name: "Xiao",
        story: "One of the Bright and Mighty Adeptus who protected Liyue, was nicknamed the Vigilant Yaksha. Despite his youthful appearance, legends about him have been narrated in ancient books dating back thousands of years.",
        background: "/assets/liyue/harbor.png",
        photo: "/assets/character/character-liyue/xiao.png",
        avatar: "/assets/character/character-liyue/xiao-logo.png",
        map: "liyue"
    },
    {
        name: "Ganyu",
        story: "Secretary at Yuehai Pavillion. Within his body flowed the blood of the Qilin heritage beast. Ganyu's demeanor is elegant and calm, but the gentle nature of the Qilin in him does not prevent Ganyu from being strict and disciplined in his work.",
        background: "/assets/liyue/harbor.png",
        photo: "/assets/character/character-liyue/ganyu.png",
        avatar: "/assets/character/character-liyue/ganyu-logo.png",
        map: "liyue"
    },
    {
        name: "Hutao",
        story: "Hu Tao was the 77th Master of the Wangsheng Funeral Parlor, someone who played an important role in managing funeral affairs in Liyue. He performs the last rites of one's life splendidly, flawlessly, and maintains the balance of the world's Yin and Yang.",
        background: "/assets/liyue/harbor.png",
        photo: "/assets/character/character-liyue/hutao.png",
        avatar: "/assets/character/character-liyue/hutao-logo.png",
        map: "liyue"
    },
    {
        name: "Raiden Shogun",
        story: "Raiden Shogun — the most majestic and terrifying embodiment of lightning in the world, supreme ruler of the Inazuma Shogunate. Wielding the power of lightning, he continues to single-handedly pursue immortality.",
        background: "/assets/inazuma/inazuma-city.jpg",
        photo: "/assets/character/character-inazuma/raiden.png",
        avatar: "/assets/character/character-inazuma/raiden-logo.png",
        map: "inazuma"
    },
    {
        name: "Yae Miko",
        story: "The one who served as chief of the Narukami Grand Shrine, heir to the Kitsune bloodline, family and friends of the Immortality, and also ... the fearsome editor-in-chief of the light novel publisher, Yae Publishing House.",
        background: "/assets/inazuma/inazuma-city.jpg",
        photo: "/assets/character/character-inazuma/yae-miko.png",
        avatar: "/assets/character/character-inazuma/yae-miko-logo.png",
        map: "inazuma"
    },
    {
        name: "Ayato",
        story: "Head of the Kamisato Clan and current Commissioner Yashiro. He always has a way to achieve his goals with a very neat and planned. However, not many people know what his true goals are.",
        background: "/assets/inazuma/inazuma-city.jpg",
        photo: "/assets/character/character-inazuma/ayato.png",
        avatar: "/assets/character/character-inazuma/ayato-logo.png",
        map: "inazuma"
    },
    {
        name: "Ayaka",
        story: "The daughter of the Kamisato Clan of the Yashiro Commission. Dignified and elegant, wise and tough. Always treat others with sincerity and courtesy. Ayaka is loved by the people of Inazuma and nicknamed Shirasagi Himegimi.",
        background: "/assets/inazuma/inazuma-city.jpg",
        photo: "/assets/character/character-inazuma/ayaka.png",
        avatar: "/assets/character/character-inazuma/ayaka-logo.png",
        map: "inazuma"
    },
    {
        name: "Kazuha",
        story: "Wandering samurai from Inazuma, gentle and humble. Behind his young and carefree appearance, there is a lot of bitterness from the past. Although he always looks relaxed, he has his own principles in acting.",
        background: "/assets/inazuma/inazuma-city.jpg",
        photo: "/assets/character/character-inazuma/kazuha.png",
        avatar: "/assets/character/character-inazuma/kazuha-logo.png",
        map: "inazuma"
    },
    {
        name: "Nahida",
        story: "Lesser Lord Kusanali who lives in the Sanctuary of Surasthana, is always looked down upon and rarely talked about by people. She carried a heavy burden, even though she was always shrouded in darkness and lonely, she never stopped moving forward.",
        background: "/assets/sumeru/sumeru-city.jpg",
        photo: "/assets/character/character-sumeru/nahida.png",
        avatar: "/assets/character/character-sumeru/nahida-logo.png",
        map: "sumeru"
    },
    {
        name: "Tighnari",
        story: "Forest Protector in Avidya Forest, a botany student who graduated from Amurta. He lives his everyday life patrolling the rainforest, protecting its ecology, and teaching morons.",
        background: "/assets/sumeru/sumeru-city.jpg",
        photo: "/assets/character/character-sumeru/tighnari.png",
        avatar: "/assets/character/character-sumeru/tighnari-logo.png",
        map: "sumeru"
    },
    {
        name: "Nilou",
        story: "Theater star Zubayr, a dancer as graceful as a newly blooming lotus without a hint of blemish. However, he wasn't haughty and cold at all. Even a hurrying adventurer couldn't forget her sincere and radiant smile.",
        background: "/assets/sumeru/sumeru-city.jpg",
        photo: "/assets/character/character-sumeru/nilou.png",
        avatar: "/assets/character/character-sumeru/nilou-logo.png",
        map: "sumeru"
    },
    {
        name: "Cyno",
        story: "Mahamatra General Akademiya, leader of the Matras. His quirky sense of humor left a deep impression.",
        background: "/assets/sumeru/sumeru-city.jpg",
        photo: "/assets/character/character-sumeru/cyno.png",
        avatar: "/assets/character/character-sumeru/cyno-logo.png",
        map: "sumeru"
    },
    {
        name: "Wanderer",
        story: "If the standard for being human was having a heart, then he couldn't be considered that way. If a person without a heart could feel happiness and sadness, then he would become a doll similar to a human.",
        background: "/assets/sumeru/sumeru-city.jpg",
        photo: "/assets/character/character-sumeru/wanderer.png",
        avatar: "/assets/character/character-sumeru/wandererlogo.png",
        map: "sumeru"
    },
];

const background = document.getElementById("scenery-bg")
const character = document.getElementById("char-bg")
const charname = document.getElementById("char-name")
const details = document.getElementById("char-details")
const map = document.getElementsByClassName("map")
var charList = document.getElementById("characters-list")
var count = 0
const activeChar = []
const activeMap = []

function clearLastActiveChar() {
    activeChar[activeChar.length-1].classList.remove("active-character")
    activeChar[activeChar.length-1].classList.add("character")
    activeChar.pop()
}

function setActiveChar(makecharacters) {
    makecharacters.classList.remove("character")
    makecharacters.classList.add("active-character")
    activeChar.push(makecharacters)
}

function setRecentMap(recentMap) {
    activeMap[activeMap.length-1].classList.remove("active-side-nav")
    recentMap.classList.add("active-side-nav")
    activeMap.pop()
    activeMap.push(recentMap)
}

activeMap.push(map[0])
for(let j = 0; j < characters.length; j++){
    if(characters[j].map == "mondstadt"){
        const makecharacters = document.createElement("div")
        if(j == 0) {
            makecharacters.classList.add("active-character")
            activeChar.push(makecharacters)
        } else {
            makecharacters.classList.add("character")
        }
        const charactersimage = document.createElement("img")
        charactersimage.setAttribute("src", characters[j].avatar)
        const charactersname = document.createElement("h3")
        charactersname.innerText = characters[j].name
        makecharacters.appendChild(charactersimage)
        makecharacters.appendChild(charactersname)
        charList = document.getElementById("characters-list")
        charList.appendChild(makecharacters)
        
        makecharacters.addEventListener("click", (e)=>{
            clearLastActiveChar()
            character.src = characters[j].photo
            charname.innerText = characters[j].name
            details.innerText = characters[j].story
            setActiveChar(makecharacters)
        })
        
    }
}

for(let i = 0; i < map.length; i++){
    map[i].addEventListener("click", (e)=>{
        setRecentMap(map[i])
        count = 0
        while(charList.firstChild) {
            charList.removeChild(charList.lastChild)
        }
        for(let j = 0; j < characters.length; j++){
            if(characters[j].map == map[i].innerHTML.toLowerCase()){
                background.src = characters[j].background
                console.log(characters[j].background)
                const makecharacters = document.createElement("div")
                if(count == 0) {
                    makecharacters.classList.add("active-character")
                    activeChar.push(makecharacters)
                } else {
                    makecharacters.classList.add("character")
                }
                const charactersimage = document.createElement("img")
                charactersimage.setAttribute("src", characters[j].avatar)
                const charactersname = document.createElement("h3")
                charactersname.innerText = characters[j].name
                makecharacters.appendChild(charactersimage)
                makecharacters.appendChild(charactersname)
                charList.appendChild(makecharacters)

                if(count == 0){
                    character.src = characters[j].photo
                    charname.innerText = characters[j].name
                    details.innerText = characters[j].story
                    charList.childNodes[0].classList.add("active-character")
                }
                else{
                    charList.childNodes[count].classList.add("character")
                }
                for(let i = count; i < charList.childNodes.length; i++){
                    charList.childNodes[i].addEventListener("click", (e)=>{
                        clearLastActiveChar()
                        character.src = characters[j].photo
                        charname.innerText = characters[j].name
                        details.innerText = characters[j].story
                        setActiveChar(charList.childNodes[i])
                    })
                }   
                count++;
            }
        }
    })
}



