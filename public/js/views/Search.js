import AbstractView from "./AbstractView.js"

export default class extends AbstractView {

    constructor () {
        super()
        this.setTitle("Search")
    }

    async getHtml () {
        return `

            <h1 style="color:white;">Welcome to the home page</h1>

        `
    }
 

}