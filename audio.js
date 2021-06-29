
const express = require("express")
let router = express.Router()
let fs = require("fs")
let path = require("path")

router.get("/:audioFile", (req, res) => {
    
    let { audioFile } = req.params
    const range = req.headers.range
    
    if (!range) {
        res.status(400).send("requires range header")
    }

    //get video stats
    const videoPath = `audiofiles/${audioFile}`
    const videoSize = fs.statSync(videoPath).size
    
    //chunks
    const chunkSize = 10 ** 6 //1mb
    const start = Number(range.replace(/\D/g, ""))
    const end = Math.min( start + chunkSize , videoSize - 1)

    //create headers

    const contentLength = end - start + 1
    const headers = {
        "Content-Range": `bytes ${start}-${end}/${videoSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": contentLength,
        "Content-Type": "video/mp4",
    }

    res.writeHead(206, headers)

    // create video read stream for this particular chunk
    const videoStream = fs.createReadStream(videoPath, { start, end })

     // Stream the video chunk to the client
    videoStream.pipe(res)

})

module.exports = router