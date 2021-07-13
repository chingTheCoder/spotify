import AbstractView from "./AbstractView.js"

export default class extends AbstractView {

    constructor () {
        super()
        this.setTitle("library")
    }

    async getHtml () {

        document.querySelector(".contentNavigation").style.background = "rgba(0,0,0,0)"
        let songs = JSON.parse(localStorage.getItem("playlist"))
        return `

            <div class="childPage" id="libraryPage">
                <div id="libraryInfo">
                    <div id="libraryInfoWrapper">
                        <div class="libraryInfoImages">
                        <img src="https://mosaic.scdn.co/300/ab67616d0000b2733cb695bfc1246bdf66161fceab67616d0000b2734471db1db53e3124151f280bab67616d0000b2734661cf765439018ebb7e0009ab67616d0000b273ae28c8f2748587cc2a33d6c2">
                        </div>
                        <div id="libraryInfoContent">
                            <h5>PLAYLIST</h5>
                            <h1>spantaras</h1>
                            <h6>Chingliu</h6>
                        </div>
                    </div>
                </div>
                <div id="playlistSongs">
                    <div id="playlistSongsHeader">
                        <div>#</div>
                        <div>Title</div>
                        <div>Album</div>
                        <div>DATE ADDED</div>
                        <div><i class="far fa-clock"></i></div>
                    </div>
                    <div class="hr"></div>
                    <div id="table">
                        <div class="row">
                            <div>1</div>
                            <div>${songs[0].title}</div>
                            <div>Album</div>
                            <div>DATE ADDED</div>
                            <div><i class="far fa-clock"></i></div>
                        </div>
                        <div class="row">
                            <div>2</div>
                            <div>${songs[1].title}</div>
                            <div>Album</div>
                            <div>DATE ADDED</div>
                            <div><i class="far fa-clock"></i></div>
                        </div>
                        <div class="row">
                            <div>3</div>
                            <div>${songs[2].title}</div>
                            <div>Album</div>
                            <div>DATE ADDED</div>
                            <div><i class="far fa-clock"></i></div>
                        </div>
                        <div class="row">
                            <div>4</div>
                            <div>${songs[3].title}</div>
                            <div>Album</div>
                            <div>DATE ADDED</div>
                            <div><i class="far fa-clock"></i></div>
                        </div>
                        <div class="row">
                            <div>5</div>
                            <div>${songs[4].title}</div>
                            <div>Album</div>
                            <div>DATE ADDED</div>
                            <div><i class="far fa-clock"></i></div>
                        </div>
                        <div class="row">
                            <div>6</div>
                            <div>${songs[5].title}</div>
                            <div>Album</div>
                            <div>DATE ADDED</div>
                            <div><i class="far fa-clock"></i></div>
                        </div>
                        <div class="row">
                            <div>7</div>
                            <div>${songs[6].title}</div>
                            <div>Album</div>
                            <div>DATE ADDED</div>
                            <div><i class="far fa-clock"></i></div>
                        </div>
                        <div class="row">
                            <div>8</div>
                            <div>${songs[7].title}</div>
                            <div>Album</div>
                            <div>DATE ADDED</div>
                            <div><i class="far fa-clock"></i></div>
                        </div>
                    </div>
                </div>
            </div>
            
        `
    }
 

}