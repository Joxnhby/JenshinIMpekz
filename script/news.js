const news = [
    {
        name: "news 1",
        image: "/assets/homepage/news/news-recent-1.jpg",
        url: "https://youtu.be/URDSFmZOX4Q"
    },
    {
        name: "news 2",
        image: "/assets/homepage/news/news-recent-2.jpg",
        url: "https://youtu.be/AKDz1h2871E"
    },
    {
        name: "news 3",
        image: "/assets/homepage/news/news-recent-3.jpg",
        url: "https://youtu.be/HVXAKOsr2to"
    },
]

const nextBtn = document.getElementById("news-next-btn")
const leftBtn = document.getElementById("news-left-btn")
const slider = document.getElementById("slider-image")
const recentNews = []
let recent = 0
let auto

function setNews() {
    hideButton()

    recentNews.forEach(element => {
        element.remove()
    })

    const wrapper = document.createElement("a")
    wrapper.href = news[recent].url
    wrapper.target = "_blank"
    const newsImg = document.createElement("img")
    newsImg.src = news[recent].image
    wrapper.appendChild(newsImg)
    slider.prepend(wrapper)
    recentNews.push(wrapper)

    console.log("skrg: " + recent)
    if (recent == 0) {
        nextBtn.classList.remove("hide")
    } else if (recent == news.length-1) {
        leftBtn.classList.remove("hide")
    } else {
        nextBtn.classList.remove("hide")
        leftBtn.classList.remove("hide")
    }
}

setNews()

function hideButton() {
    nextBtn.classList.add("hide")
    leftBtn.classList.add("hide")
}

nextBtn.addEventListener("click", (e)=>{
    recent++
    setNews()
    window.clearInterval(auto)
    autoSlider()
})

leftBtn.addEventListener("click", (e)=>{
    recent--
    setNews()
    window.clearInterval(auto)
    autoSlider()
})

function autoSlider() {
    auto = setInterval(()=>{
        if (recent < news.length-1) {
            recent++
            setNews()
        } else {
            recent = 0
            setNews()
        }
    }, 5000)
}

autoSlider()