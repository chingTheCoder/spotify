import AbstractView from "./AbstractView.js"
import { hello } from "./test.js"

export default class extends AbstractView {

    constructor () {
        super()
        this.setTitle("Home")
    }

    async getHtml () {

        document.querySelector(".contentNavigation").style.background = "rgba(0,0,0,0)"
        let playlist = JSON.parse(localStorage.getItem("playlist"))
        
        return `
        <div class="topContent">
              
                
               <div class="information">
                   <h3>Good afternoon</h3>
                   <div class="infoCardWrapper">
                       <a href="#" class="infoCard" onmouseover="">
                           <div class="infoCardImage">
                               <img src="https://i.scdn.co/image/ab67706f0000000205bcb24491b3e6e1533fcb2b">
                           </div>
                           <div class="infoCardText">
                               ${playlist[0].title}
                           </div>
                           <button href="#" class="getInfoSong"><i class="fas fa-caret-right"></i></button>
                       </a>
                       <a href="#" class="infoCard">
                           <div class="infoCardImage">
                               <img src="https://i.scdn.co/image/ab67706f0000000295ead963e2c26040fd00e745">
                           </div>
                           <div class="infoCardText">
                               ${playlist[1].title}
                           </div>
                           <button href="#" class="getInfoSong"><i class="fas fa-caret-right"></i></button>
                       </a>
                       <a href="#" class="infoCard">
                           <div class="infoCardImage">
                               <img src="https://i.scdn.co/image/ab67706f0000000291d98749a36f77ecbb581374">
                           </div>
                           <div class="infoCardText">
                               ${playlist[2].title}
                           </div>
                           <button href="#" class="getInfoSong"><i class="fas fa-caret-right"></i></button>
                       </a>
                       <a href="#" class="infoCard">
                           <div class="infoCardImage">
                               <img src="https://i.scdn.co/image/ab67616d0000b27369093e4410663177f578851d">
                           </div>
                           <div class="infoCardText">
                               ${playlist[3].title}
                           </div>
                           <button href="#" class="getInfoSong"><i class="fas fa-caret-right"></i></button>
                       </a>
                       <a href="#" class="infoCard">
                           <div class="infoCardImage">
                               <img src="https://i.scdn.co/image/ab67706f0000000270360cd384e89a266c8480a1">
                           </div>
                           <div class="infoCardText">
                               ${playlist[4].title}
                           </div>
                           <button href="#" class="getInfoSong"><i class="fas fa-caret-right"></i></button>
                       </a>
                       <a href="#" class="infoCard">
                           <div class="infoCardImage">
                               <img src="https://i.scdn.co/image/ab67706f0000000245a5db34be4a2f006c08284a">
                           </div>
                           <div class="infoCardText">
                              ${playlist[5].title}
                           </div>
                           <button href="#" class="getInfoSong"><i class="fas fa-caret-right"></i></button>
                       </a>
                       <a href="#" class="infoCard">
                           <div class="infoCardImage">
                               <img src="https://i.scdn.co/image/ab67706f000000027311fc2a25dd676a8950f9e9">
                           </div>
                           <div class="infoCardText">
                               ${playlist[6].title}
                           </div>
                           <button href="#" class="getInfoSong"><i class="fas fa-caret-right"></i></button>
                       </a>
                       <a href="#" class="infoCard">
                           <div class="infoCardImage">
                               <img src="https://i.scdn.co/image/ab67706f000000026bdff7dc0e53fe6ca17749b5">
                           </div>
                           <div class="infoCardText">
                               ${playlist[7].title}
                           </div>
                           <button href="#" class="getInfoSong"><i class="fas fa-caret-right"></i></button>
                       </a>
                   </div>
               </div>
                

            </div> 
            
            <div class="theTopPodcasts motherCard">
                    <a href="" class="sectionLink">The Top Podcasts of 2020</a>
                    <h4 class="secInfo">Our favourite new shows of the year <a href="#" class="seeAll">see all</a></h4>
                    <div class="cardWrapper">
                        <a href="#" class="card">
                            <img src="https://i.scdn.co/image/ab67706f00000002dc96821fb44b3e8cb5436c4b">
                            <div class="cardTitle">
                                Are and B Presents ...
                            </div>
                            <div class="cardContent">
                                Cover : jhene aiko
                            </div>
                        </a>
                         <a href="#" class="card">
                            <img src="https://i.scdn.co/image/ab67656300005f1f34fd237688d618b31e66bee5">
                            <div class="cardTitle">
                                card Title  
                            </div>
                            <div class="cardContent">
                                squam eius sed odit fugiat iusto fuga praesentium they from people
                            </div>
                        </a>
                         <a href="#" class="card">
                            <img src="https://i.scdn.co/image/ab67706f000000023f22beb2471ef8949bb95d97">
                            <div class="cardTitle">
                                card Title
                            </div>
                            <div class="cardContent">
                                squam eius sed odit fugiat iusto fuga praesentium they from people
                            </div>
                        </a>
                         <a href="#" class="card">
                             <img src="https://i.scdn.co/image/ab67706f00000002d6b20e4c6582d83f86272337">
                             <div class="cardTitle">
                                 card Title
                             </div>
                             <div class="cardContent">
                                 squam eius sed odit fugiat iusto fuga praesentium they from people
                             </div>
                        </a>
                         <a href="#" class="card">
                            <img src="https://i.scdn.co/image/ab67706f00000002da8277d97cafeee0df642969">
                            <div class="cardTitle">
                                card Title
                            </div>
                            <div class="cardContent">
                                squam eius sed odit fugiat iusto fuga praesentium they from people
                            </div>
                        </a>
                         <a href="#" class="card">
                            <img src="https://i.scdn.co/image/ab67706f0000000258256adb7bf4c656cc053e5a">
                            <div class="cardTitle">
                                card Title
                            </div>
                            <div class="cardContent">
                                squam eius sed odit fugiat iusto fuga praesentium they from people
                            </div>
                        </a>
                    </div>
            </div>
            

            <div class="motherCard">
                    <a href="" class="sectionLink">The Best of 2020</a>
                    <h4 class="secInfo">Dive into the best songs of 2020 in every genre <a href="#" class="seeAll">see all</a></h4>
                    <div class="cardWrapper">
                        <a href="#" class="card">
                            <img src="https://i.scdn.co/image/ab67706f00000002dc96821fb44b3e8cb5436c4b">
                            <div class="cardTitle">
                                Are and B Presents ...
                            </div>
                            <div class="cardContent">
                                Cover : jhene aiko
                            </div>
                        </a>
                         <a href="#" class="card">
                            <img src="https://i.scdn.co/image/ab67656300005f1f34fd237688d618b31e66bee5">
                            <div class="cardTitle">
                                card Title  
                            </div>
                            <div class="cardContent">
                                squam eius sed odit fugiat iusto fuga praesentium they from people
                            </div>
                        </a>
                         <a href="#" class="card">
                            <img src="https://i.scdn.co/image/ab67706f000000023f22beb2471ef8949bb95d97">
                            <div class="cardTitle">
                                card Title
                            </div>
                            <div class="cardContent">
                                squam eius sed odit fugiat iusto fuga praesentium they from people
                            </div>
                        </a>
                         <a href="#" class="card">
                             <img src="https://i.scdn.co/image/ab67706f00000002d6b20e4c6582d83f86272337">
                             <div class="cardTitle">
                                 card Title
                             </div>
                             <div class="cardContent">
                                 squam eius sed odit fugiat iusto fuga praesentium they from people
                             </div>
                        </a>
                         <a href="#" class="card">
                            <img src="https://i.scdn.co/image/ab67706f00000002da8277d97cafeee0df642969">
                            <div class="cardTitle">
                                card Title
                            </div>
                            <div class="cardContent">
                                squam eius sed odit fugiat iusto fuga praesentium they from people
                            </div>
                        </a>
                         <a href="#" class="card">
                            <img src="https://i.scdn.co/image/ab67706f0000000258256adb7bf4c656cc053e5a">
                            <div class="cardTitle">
                                card Title
                            </div>
                            <div class="cardContent">
                                squam eius sed odit fugiat iusto fuga praesentium they from people
                            </div>
                        </a>
                    </div>
                </div>

                <div class="motherCard">
                    <a href="" class="sectionLink">The Top Podcasts of 2020</a>
                    <h4 class="secInfo">Our favourite new shows of the year <a href="#" class="seeAll">see all</a></h4>
                    <div class="cardWrapper">
                        <a href="#" class="card">
                            <img src="https://i.scdn.co/image/ab67706f00000002dc96821fb44b3e8cb5436c4b">
                            <div class="cardTitle">
                                Are and B Presents ...
                            </div>
                            <div class="cardContent">
                                Cover : jhene aiko
                            </div>
                        </a>
                         <a href="#" class="card">
                            <img src="https://i.scdn.co/image/ab67656300005f1f34fd237688d618b31e66bee5">
                            <div class="cardTitle">
                                card Title  
                            </div>
                            <div class="cardContent">
                                squam eius sed odit fugiat iusto fuga praesentium they from people
                            </div>
                        </a>
                         <a href="#" class="card">
                            <img src="https://i.scdn.co/image/ab67706f000000023f22beb2471ef8949bb95d97">
                            <div class="cardTitle">
                                card Title
                            </div>
                            <div class="cardContent">
                                squam eius sed odit fugiat iusto fuga praesentium they from people
                            </div>
                        </a>
                         <a href="#" class="card">
                             <img src="https://i.scdn.co/image/ab67706f00000002d6b20e4c6582d83f86272337">
                             <div class="cardTitle">
                                 card Title
                             </div>
                             <div class="cardContent">
                                 squam eius sed odit fugiat iusto fuga praesentium they from people
                             </div>
                        </a>
                         <a href="#" class="card">
                            <img src="https://i.scdn.co/image/ab67706f00000002da8277d97cafeee0df642969">
                            <div class="cardTitle">
                                card Title
                            </div>
                            <div class="cardContent">
                                squam eius sed odit fugiat iusto fuga praesentium they from people
                            </div>
                        </a>
                         <a href="#" class="card">
                            <img src="https://i.scdn.co/image/ab67706f0000000258256adb7bf4c656cc053e5a">
                            <div class="cardTitle">
                                card Title
                            </div>
                            <div class="cardContent">
                                squam eius sed odit fugiat iusto fuga praesentium they from people
                            </div>
                        </a>
                    </div>
                </div>

                <div class="motherCard">
                    <a href="" class="sectionLink">The Top Podcasts of 2020</a>
                    <h4 class="secInfo">Our favourite new shows of the year <a href="#" class="seeAll">see all</a></h4>
                    <div class="cardWrapper">
                        <a href="#" class="card">
                            <img src="https://i.scdn.co/image/ab67706f00000002dc96821fb44b3e8cb5436c4b">
                            <div class="cardTitle">
                                Are and B Presents ...
                            </div>
                            <div class="cardContent">
                                Cover : jhene aiko
                            </div>
                        </a>
                         <a href="#" class="card">
                            <img src="https://i.scdn.co/image/ab67656300005f1f34fd237688d618b31e66bee5">
                            <div class="cardTitle">
                                card Title  
                            </div>
                            <div class="cardContent">
                                squam eius sed odit fugiat iusto fuga praesentium they from people
                            </div>
                        </a>
                         <a href="#" class="card">
                            <img src="https://i.scdn.co/image/ab67706f000000023f22beb2471ef8949bb95d97">
                            <div class="cardTitle">
                                card Title
                            </div>
                            <div class="cardContent">
                                squam eius sed odit fugiat iusto fuga praesentium they from people
                            </div>
                        </a>
                         <a href="#" class="card">
                             <img src="https://i.scdn.co/image/ab67706f00000002d6b20e4c6582d83f86272337">
                             <div class="cardTitle">
                                 card Title
                             </div>
                             <div class="cardContent">
                                 squam eius sed odit fugiat iusto fuga praesentium they from people
                             </div>
                        </a>
                         <a href="#" class="card">
                            <img src="https://i.scdn.co/image/ab67706f00000002da8277d97cafeee0df642969">
                            <div class="cardTitle">
                                card Title
                            </div>
                            <div class="cardContent">
                                squam eius sed odit fugiat iusto fuga praesentium they from people
                            </div>
                        </a>
                         <a href="#" class="card">
                            <img src="https://i.scdn.co/image/ab67706f0000000258256adb7bf4c656cc053e5a">
                            <div class="cardTitle">
                                card Title
                            </div>
                            <div class="cardContent">
                                squam eius sed odit fugiat iusto fuga praesentium they from people
                            </div>
                        </a>
                    </div>
                </div>

                <div class="motherCard">
                    <a href="" class="sectionLink">The Top Podcasts of 2020</a>
                    <h4 class="secInfo">Our favourite new shows of the year <a href="#" class="seeAll">see all</a></h4>
                    <div class="cardWrapper">
                        <a href="#" class="card">
                            <img src="https://i.scdn.co/image/ab67706f00000002dc96821fb44b3e8cb5436c4b">
                            <div class="cardTitle">
                                Are and B Presents ...
                            </div>
                            <div class="cardContent">
                                Cover : jhene aiko
                            </div>
                        </a>
                         <a href="#" class="card">
                            <img src="https://i.scdn.co/image/ab67656300005f1f34fd237688d618b31e66bee5">
                            <div class="cardTitle">
                                card Title  
                            </div>
                            <div class="cardContent">
                                squam eius sed odit fugiat iusto fuga praesentium they from people
                            </div>
                        </a>
                         <a href="#" class="card">
                            <img src="https://i.scdn.co/image/ab67706f000000023f22beb2471ef8949bb95d97">
                            <div class="cardTitle">
                                card Title
                            </div>
                            <div class="cardContent">
                                squam eius sed odit fugiat iusto fuga praesentium they from people
                            </div>
                        </a>
                         <a href="#" class="card">
                             <img src="https://i.scdn.co/image/ab67706f00000002d6b20e4c6582d83f86272337">
                             <div class="cardTitle">
                                 card Title
                             </div>
                             <div class="cardContent">
                                 squam eius sed odit fugiat iusto fuga praesentium they from people
                             </div>
                        </a>
                         <a href="#" class="card">
                            <img src="https://i.scdn.co/image/ab67706f00000002da8277d97cafeee0df642969">
                            <div class="cardTitle">
                                card Title
                            </div>
                            <div class="cardContent">
                                squam eius sed odit fugiat iusto fuga praesentium they from people
                            </div>
                        </a>
                         <a href="#" class="card">
                            <img src="https://i.scdn.co/image/ab67706f0000000258256adb7bf4c656cc053e5a">
                            <div class="cardTitle">
                                card Title
                            </div>
                            <div class="cardContent">
                                squam eius sed odit fugiat iusto fuga praesentium they from people
                            </div>
                        </a>
                    </div>
                </div>


                <div class="motherCard">
                    <a href="" class="sectionLink">The Top Podcasts of 2020</a>
                    <h4 class="secInfo">Our favourite new shows of the year <a href="#" class="seeAll">see all</a></h4>
                    <div class="cardWrapper">
                        <a href="#" class="card">
                            <img src="https://i.scdn.co/image/ab67706f00000002dc96821fb44b3e8cb5436c4b">
                            <div class="cardTitle">
                                Are and B Presents ...
                            </div>
                            <div class="cardContent">
                                Cover : jhene aiko
                            </div>
                        </a>
                         <a href="#" class="card">
                            <img src="https://i.scdn.co/image/ab67656300005f1f34fd237688d618b31e66bee5">
                            <div class="cardTitle">
                                card Title  
                            </div>
                            <div class="cardContent">
                                squam eius sed odit fugiat iusto fuga praesentium they from people
                            </div>
                        </a>
                         <a href="#" class="card">
                            <img src="https://i.scdn.co/image/ab67706f000000023f22beb2471ef8949bb95d97">
                            <div class="cardTitle">
                                card Title
                            </div>
                            <div class="cardContent">
                                squam eius sed odit fugiat iusto fuga praesentium they from people
                            </div>
                        </a>
                         <a href="#" class="card">
                             <img src="https://i.scdn.co/image/ab67706f00000002d6b20e4c6582d83f86272337">
                             <div class="cardTitle">
                                 card Title
                             </div>
                             <div class="cardContent">
                                 squam eius sed odit fugiat iusto fuga praesentium they from people
                             </div>
                        </a>
                         <a href="#" class="card">
                            <img src="https://i.scdn.co/image/ab67706f00000002da8277d97cafeee0df642969">
                            <div class="cardTitle">
                                card Title
                            </div>
                            <div class="cardContent">
                                squam eius sed odit fugiat iusto fuga praesentium they from people
                            </div>
                        </a>
                         <a href="#" class="card">
                            <img src="https://i.scdn.co/image/ab67706f0000000258256adb7bf4c656cc053e5a">
                            <div class="cardTitle">
                                card Title
                            </div>
                            <div class="cardContent">
                                squam eius sed odit fugiat iusto fuga praesentium they from people
                            </div>
                        </a>
                    </div>
                </div>


                <div class="motherCard">
                    <a href="" class="sectionLink">The Top Podcasts of 2020</a>
                    <h4 class="secInfo">Our favourite new shows of the year <a href="#" class="seeAll">see all</a></h4>
                    <div class="cardWrapper">
                        <a href="#" class="card">
                            <img src="https://i.scdn.co/image/ab67706f00000002dc96821fb44b3e8cb5436c4b">
                            <div class="cardTitle">
                                Are and B Presents ...
                            </div>
                            <div class="cardContent">
                                Cover : jhene aiko
                            </div>
                        </a>
                         <a href="#" class="card">
                            <img src="https://i.scdn.co/image/ab67656300005f1f34fd237688d618b31e66bee5">
                            <div class="cardTitle">
                                card Title  
                            </div>
                            <div class="cardContent">
                                squam eius sed odit fugiat iusto fuga praesentium they from people
                            </div>
                        </a>
                         <a href="#" class="card">
                            <img src="https://i.scdn.co/image/ab67706f000000023f22beb2471ef8949bb95d97">
                            <div class="cardTitle">
                                card Title
                            </div>
                            <div class="cardContent">
                                squam eius sed odit fugiat iusto fuga praesentium they from people
                            </div>
                        </a>
                         <a href="#" class="card">
                             <img src="https://i.scdn.co/image/ab67706f00000002d6b20e4c6582d83f86272337">
                             <div class="cardTitle">
                                 card Title
                             </div>
                             <div class="cardContent">
                                 squam eius sed odit fugiat iusto fuga praesentium they from people
                             </div>
                        </a>
                         <a href="#" class="card">
                            <img src="https://i.scdn.co/image/ab67706f00000002da8277d97cafeee0df642969">
                            <div class="cardTitle">
                                card Title
                            </div>
                            <div class="cardContent">
                                squam eius sed odit fugiat iusto fuga praesentium they from people
                            </div>
                        </a>
                         <a href="#" class="card">
                            <img src="https://i.scdn.co/image/ab67706f0000000258256adb7bf4c656cc053e5a">
                            <div class="cardTitle">
                                card Title
                            </div>
                            <div class="cardContent">
                                squam eius sed odit fugiat iusto fuga praesentium they from people
                            </div>
                        </a>
                    </div>
                </div>
        
        
        `

    }
}