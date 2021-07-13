import AbstractView from "./AbstractView.js"

export default class extends AbstractView {

    constructor () {
        super()
        this.setTitle("Search")
    }

    async getHtml () {

        document.querySelector(".contentNavigation").style.background = "rgba(0,0,0,0)"

        return `

            <div class="childPage" id="searchPage">
                <h2>Browse all</h2>
                <div class="search">
                    <a href="#" class="libraryCategory">
                        <h3>Afro Hits</h3>
                        <img src="https://i.scdn.co/image/ab67706f0000000293c88c83bcb12b0800281074">
                    </a>

                    <a href="#" class="libraryCategory">
                        <h3>Concerts</h3>
                        <img src="https://t.scdn.co/images/8cfa9cb1e43a404db76eed6ad594057c">
                    </a>

                    <a href="#" class="libraryCategory">
                        <h3>Discover</h3>
                        <img src="https://t.scdn.co/images/d0fb2ab104dc4846bdc56d72b0b0d785.jpeg">
                    </a>

                    <a href="#" class="libraryCategory">
                        <h3>New Releases</h3>
                        <img src="https://i.scdn.co/image/ab67706f000000027ea4d505212b9de1f72c5112">
                    </a>

                    <a href="#" class="libraryCategory">
                        <h3>Charts</h3>
                        <img src="https://i.scdn.co/image/ab67706f00000002e4eadd417a05b2546e866934">
                    </a>

                    <a href="#" class="libraryCategory">
                        <h3>Made For You</h3>
                        <img src="https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe">
                    </a>

                    <a href="#" class="libraryCategory">
                        <h3>Podcasts</h3>
                        <img src="https://i.scdn.co/image/567158eb895ad26718a814345af0fc43ee785ec5">
                    </a>

                    <a href="#" class="libraryCategory">
                        <h3>Pop</h3>
                        <img src="https://t.scdn.co/images/0a74d96e091a495bb09c0d83210910c3">
                    </a>

                    <a href="#" class="libraryCategory">
                        <h3>Party</h3>
                        <img src="https://i.scdn.co/image/ab67706f00000002caa115cbdb8cd3d39d67cdc0">
                    </a>

                    <a href="#" class="libraryCategory">
                        <h3>Sleep</h3>
                        <img src="https://i.scdn.co/image/ab67706f00000002b70e0223f544b1faa2e95ed0">
                    </a>

                    <a href="#" class="libraryCategory">
                        <h3>Radar</h3>
                        <img src="https://t.scdn.co/images/c6677aa51acf4121b66b9d1f231bd427.png">
                    </a>

                    <a href="#" class="libraryCategory">
                        <h3>Dance / Electronic</h3>
                        <img src="https://i.scdn.co/image/ab67706f000000020377baccf69ede3cf1a26eff">
                    </a>

                    <a href="#" class="libraryCategory">
                        <h3>Jazz</h3>
                        <img src="https://i.scdn.co/image/ab67706f00000002d72ef75e14ca6f60ea2364c2">
                    </a>

                    <a href="#" class="libraryCategory">
                        <h3>Indie</h3>
                        <img src="https://i.scdn.co/image/ab67706f000000025f7327d3fdc71af27917adba">
                    </a>

                    <a href="#" class="libraryCategory">
                        <h3>Alternative</h3>
                        <img src="https://t.scdn.co/images/ee9451b3ed474c82b1da8f9b5eafc88f.jpeg">
                    </a>

                    <a href="#" class="libraryCategory">
                        <h3>At Home</h3>
                        <img src="https://i.scdn.co/image/ab67706f00000002ec9d60059aa215a7ba364695">
                    </a>

                    <a href="#" class="libraryCategory">
                        <h3>Kids & Family</h3>
                        <img src="https://t.scdn.co/images/15a38c44c4484cc3a078aaab5bd4e828">
                    </a>

                    <a href="#" class="libraryCategory">
                        <h3>Tv & Movies</h3>
                        <img src="https://i.scdn.co/image/ab67706f000000026abff8de68c75470ea8f0665">
                    </a>
                    
                </div>
            </div>

        `
    }
 

}