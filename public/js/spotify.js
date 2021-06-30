// let audio = document.querySelector("audio")
// let btnPlay = document.querySelector("#btnPlay")

// function updatePlayerButton (element , removeAction, addAction, removeIcon , addIcon) {

//     element.classList.remove(removeAction)
//     element.classList.add(addAction)
//     element.children[0].classList.remove(removeIcon)
//     element.children[0].classList.add(addIcon)

// }

// function playSong () {

//     let audio = document.querySelector("audio")
//     audio.setAttribute("src", "/audio/rihanna.mp3 ")

//     if (this.classList.contains("play")) {
//         audio.play()     
//         updatePlayerButton(this, "play", "pause", "fa-play", "fa-pause")
//     }

//     else {
//         audio.pause()
//         updatePlayerButton(this, "pause", "play", "fa-pause", "fa-play")

//     }
// }

// //when audio has endend playing
// /*<i class="fas fa-pause"></i>*/
// btnPlay.addEventListener("click", playSong)

// let secondsIncrement
// let startTime = 0
// let startSecond = 0
// audio.addEventListener("timeupdate", function () {


//     let currentMediaTime = Math.round(this.currentTime)
//     console.log(currentMediaTime)
  

//     if (this.ended === true) {

//         updatePlayerButton(btnPlay, "pause", "play", "fa-pause", "fa-play")

//     }
// })