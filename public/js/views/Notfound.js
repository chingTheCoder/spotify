import AbstractView from "./AbstractView.js"

export default class extends AbstractView {

    constructor () {
        super()
        this.setTitle("404")
    }

    async getHtml () {

        document.querySelector(".contentNavigation").style.background ="#121212"

        return `

            <div class="childPage" id="notFoundPage">
                <h1><span style="margin-right: 20px;font-size: 80px;">!<span>NOT FOUND</h1>
            </div>
            
        `
    }
 

}