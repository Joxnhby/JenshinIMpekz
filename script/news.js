const news = [
    {
        name: "news 1",
        image: "./assets/homepage/news/Genshin-impact-mika.webp",
        url: "https://youtu.be/U8EWojkDwPc"
    },
    {
        name: "news 2",
        image: "./assets/homepage/news/news-recent-5.webp",
        url: "https://youtu.be/BtEh1Aa0yn4"
    },
    {
        name: "news 3",
        image: "./assets/homepage/news/news-recent-1.jpg",
        url: "https://youtu.be/AKDz1h2871E"
    },
    {
        name: "news 4",
        image: "./assets/homepage/news/pestateh.webp",
        url: "https://youtu.be/RigK4OwCCM8"
    },
    {
        name: "news 5",
        image: "./assets/homepage/news/news-recent-3.jpg",
        url: "https://youtu.be/HVXAKOsr2to"
    }
]

const nextBtn = document.getElementById("news-next-btn")
const leftBtn = document.getElementById("news-left-btn")
const slider = document.getElementById("slider-image")
const recentNews = []
let recent = 0
let auto

function setNews() {
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
}

setNews()

nextBtn.addEventListener("click", (e)=>{
    recent++
    if (recent >= news.length) {
        recent = 0
    }
    setNews()
    window.clearInterval(auto)
    autoSlider()
})

leftBtn.addEventListener("click", (e)=>{
    recent--
    if (recent < 0) {
        recent = news.length-1
    }
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