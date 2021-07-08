import AbstractView from "./AbstractView.js"

export default class extends AbstractView {

    constructor () {
        super()
        this.setTitle("library")
    }

    async getHtml () {

        document.querySelector(".contentNavigation").style.background ="#121212"

        return `

            <div class="childPage" id="libraryPage">welcome to search</div>
            
        `
    }
 

}