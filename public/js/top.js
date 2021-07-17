async function createData () {
    let res = await fetch("/playlist")
    let dt = await res.json()

    return dt
}


if (!localStorage.getItem("playlist")) {

    let fetchedSongs =  createData()
    fetchedSongs.then(function (allSongs) {

        localStorage.setItem("playlist", JSON.stringify(allSongs))
        
    })

}