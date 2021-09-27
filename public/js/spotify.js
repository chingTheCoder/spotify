import Home from "./views/Home.js"
import Search from "./views/Search.js"
import Library from "./views/Library.js"
import Notfound from "./views/Notfound.js"

const navigateTo  = url => {

    history.pushState(null, null, url)
    router()

}

const router = async () => {

    const routes = [

        { path : "/spotify", view : Home },
        { path : "/spotify/search", view : Search },
        { path : "/spotify/library", view : Library },
        { path : "/notfound" , view : Notfound}

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
            route : routes[3],
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
// let app = document.querySelector(".content")
let audio = document.querySelector("audio")
let btnPlay = document.querySelector("#btnPlay")
let btnFoward = document.querySelector("#btnFoward")
let btnBackWard = document.querySelector("#btnBackWard")
let song = new MusicPlayer()

function MusicPlayer () {

}

MusicPlayer.prototype.getPlayList = function () {

    return JSON.parse(localStorage.getItem("playlist"))

}

MusicPlayer.prototype.getCurrentSong = function () {
    let getSong = JSON.parse(localStorage.getItem("playlist"))

    for (let i = 0; i < getSong.length ; i++){
        if (getSong[i].status === true ) {
            return getSong[i].song
        }
    }

}

MusicPlayer.prototype.playSong = function (song) {
    if (!audio.getAttribute("src")){
        audio.setAttribute("src", song)
    }
    audio.play()
}

MusicPlayer.prototype.pauseSong = function () {
    audio.pause()
}

MusicPlayer.prototype.nextSong = function () {

    let playlist = song.getPlayList() 
    let currentSongIndex = () => {
        for (let i = 0; i < playlist.length ; i++) {
            if (playlist[i].status === true){
                return i
            } 
        }
    }

    let index = currentSongIndex()
    console.log(index)
    playlist[index].status = false
    if (index ===  7) {
        index = 0
        playlist[index].status = true
        localStorage.setItem("playlist", JSON.stringify(playlist))
        audio.currentTime = 0
        audio.removeAttribute("src")
        song.playSong(playlist[index].song)
        
    }else{

        playlist[index + 1].status = true
        localStorage.setItem("playlist", JSON.stringify(playlist))
        audio.currentTime = 0
        audio.removeAttribute("src")
        song.playSong(playlist[index + 1].song)
       
    }


    if (btnPlay.classList.contains("play")){
        song.updatePlayerButton(btnPlay,"play","pause","fa-play","fa-pause")
    }
}

MusicPlayer.prototype.previousSong = function () {
    let playlist = song.getPlayList() 
    let currentSongIndex = () => {
        for (let i = 0; i < playlist.length ; i++) {
            if (playlist[i].status === true){
                return i
            } 
        }
    }

    let index = currentSongIndex()
    console.log(index)
    playlist[index].status = false
    if (index ===  0) {
        index = 7
        playlist[index].status = true
        localStorage.setItem("playlist", JSON.stringify(playlist))
        audio.currentTime = 0
        audio.removeAttribute("src")
        song.playSong(playlist[index].song)
      
    }else{

        playlist[index - 1].status = true
        localStorage.setItem("playlist", JSON.stringify(playlist))
        audio.currentTime = 0
        audio.removeAttribute("src")
        song.playSong(playlist[index - 1].song)
      
    }


    if (btnPlay.classList.contains("play")){
        song.updatePlayerButton(btnPlay,"play","pause","fa-play","fa-pause")
    }
}

MusicPlayer.prototype.updatePlayerButton = function(element, currentAction, newAction,currentIcon, newIcon) {

    element.classList.remove(currentAction)
    element.classList.add(newAction)
    element.children[0].classList.remove(currentIcon)
    element.children[0].classList.add(newIcon)

}


audio.addEventListener("ended", function () {
    song.updatePlayerButton(btnPlay,"pause","play","fa-pause","fa-play")
})


audio.addEventListener("timeupdate", function() {
    // console.log(Math.floor(this.currentTime))
    // console.log(Math.floor(this.duration))
    let percentage = Math.floor(( this.currentTime / this.duration ) * 100 )
    document.querySelector(".progressingBar").style.width = `${percentage}%`
    
})

btnPlay.addEventListener("click", function () {

    
    if (this.classList.contains("play")) {   
       song.playSong(song.getCurrentSong())
       song.updatePlayerButton(this,"play","pause","fa-play","fa-pause")
    }

    else {
       song.pauseSong()
       song.updatePlayerButton(this,"pause","play","fa-pause","fa-play")
    }
    
})


btnFoward.addEventListener("click", function () {
  song.nextSong()
})


btnBackWard.addEventListener("click", function () {
  song.previousSong()
})







