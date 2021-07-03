import AbstractView from "./AbstractView.js"

export default class extends AbstractView {

    constructor () {
        super()
        this.setTitle("library")
    }

    async getHtml () {
        return `

            <h1 style="color:white;">Welcome to the Library Page</h1>
            
        `
    }
 

}