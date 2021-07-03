import Home from "./views/Home.js"
import Search from "./views/Search.js"
import Library from "./views/Library.js"

const navigateTo  = url => {

    history.pushState(null, null, url)
    router()

}

const router = async () => {

    const routes = [

        { path : "/spotify", view : Home },
        { path : "/spotify/search", view : Search },
        { path : "/spotify/library", view : Library }

    ]

    //match potential route
    let potentialMatches = routes.map(route => {
        return {
            route : route,
            isMatch  : location.pathname === route.path
        }
    })

    

    let match = potentialMatches.find( potentialMatch => potentialMatch.isMatch )

    
    //if no match is found we return the home wrote

    if(!match) {
        match = {
            route : routes[0],
            isMatch : true
        }
    }

   
    //huu mstari sijaulewa
    const view  = new match.route.view()

    document.querySelector(".content").innerHTML = await view.getHtml()

}


window.addEventListener("popstate", router)

document.addEventListener("DOMContentLoaded", function () {

    let navigationLinks = document.querySelectorAll(".navLinks")

    navigationLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault()
            navigateTo(e.target.href)
        })
    })
    router()
})

//routes engine end here//

let audio = document.querySelector("audio")
let btnPlay = document.querySelector("#btnPlay")


function MusicPlayer () {

}

MusicPlayer.prototype.playSong = function (song) {
    audio.setAttribute("src", song)
    audio.play()
}

MusicPlayer.prototype.pauseSong = function () {
    audio.pause()
}


MusicPlayer.prototype.updatePlayerButton = function(element, currentAction, newAction,currentIcon, newIcon) {

    element.classList.remove(currentAction)
    element.classList.add(newAction)
    element.children[0].classList.remove(currentIcon)
    element.children[0].classList.add(newIcon)

}

btnPlay.addEventListener("click", function () {

    let song = new MusicPlayer()
    if (this.classList.contains("play")) {   
       song.playSong("/audio/rihanna.mp3")
       song.updatePlayerButton(this,"play","pause","fa-play","fa-pause")
    }

    else {
       song.pauseSong()
       song.updatePlayerButton(this,"pause","play","fa-pause","fa-play")
    }
    
})




