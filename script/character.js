const characters = [
    {
        name: "Venti",
        story: "A bard that seems to have arrived on some unknown wind — sometimes sings songs as old as the hills, and other times recites poems fresh and new.",
        background: "/assets/character/character-monstad/venti.png",
        avatar: "/assets/character/character-monstad/venti-logo.png",
        map: "mondstadt"
    },
    {
        name: "Jean",
        story: "As the Acting Grand Master of the Knights, Jean has always been devoted to her duties and maintaining peace in Mondstadt and she will guard Mondstadt with her life as always.",
        background: "/assets/character/character-monstad/jean.png",
        avatar: "/assets/character/character-monstad/jean-logo.png",
        map: "mondstadt"
    },
    {
        name: "Lisa",
        story: "She is an intellectual witch who can never get enough naps. As the Librarian of the Knights of Favonius, Lisa is smart in that she always knows exactly what to do with whatever troubles her.",
        background: "/assets/character/character-monstad/lisa.png",
        avatar: "/assets/character/character-monstad/lisa-logo.png",
        map: "mondstadt"
    },
    {
        name: "Kaeya",
        story: "In the Knights of Favonius, Kaeya is the confidant of Grand Master Jean. He can complete all the tasks assigned to him. Everyone in Mondstadt loves Kaeya, but no one knows the secret that this clever and charming knight tightly hides...",
        background: "/assets/character/character-monstad/kaeya.png",
        avatar: "/assets/character/character-monstad/kaeya-logo.png",
        map: "mondstadt"
    },
    {
        name: "Amber",
        story: "The only Outrider in the Knights of Favonius, a very cheerful and candid girl. Her ability to manipulate gliders in the air has won her the title of Gliding Champion in Mondstadt for three years in a row. As a shining star in the Knights of Favonius, Amber is always ready to face any challenges cheerfully.",
        background: "/assets/character/character-monstad/amber.png",
        avatar: "/assets/character/character-monstad/amber-logo.png",
        map: "mondstadt"
    },

];

const background = document.getElementById("scene-bg")
const character = document.getElementById("char-bg")
const charname = document.getElementById("char-name")
const details = document.getElementById("char-details")

// di sini initialisasi character mondstadt
// 

// dari sini ke bawah kalo web kita dah ada characternya
const charID = []
for (let i = 0; i < characters.length; i++) {
    charID[i] = "char-" + (i+1)
}

const chars = [];
for (let i = 0; i < characters.length; i++) {
    chars[i] = document.getElementById(charID[i])
}

for (let i=0; i < characters.length; i++) {
    chars[i].addEventListener("click", (e)=>{
        character.src = characters[i].background
        charname.innerText = characters[i].name
        details.innerText = characters[i].story
    })
}