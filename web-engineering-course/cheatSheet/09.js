// 🔹 Import required modules
const express = require("express")
const bodyparser = require("body-parser")
const send = require("send")
const fs = require("fs").promises
const app = express()
app.use(bodyparser.json())
app.set('view engine', 'pug')   //- Use pug templates
// ---------------- 🎵 MUSIC ROUTER ----------------
let musicRouter = express.Router()
// GET: return all songs from musicLib.json
musicRouter.get("/", async (req, res) => {
    try {
        let musicLibJson = await fs.readFile("musicLib.json")
        let musicLib = JSON.parse(musicLibJson)
        res.json(musicLib)
    } catch(error) {
        // If file not found → return empty music list
        res.status = 200
        res.json({
            "name": "Music List",
            "songs": []}
        )
    }
}) // POST: add new song to musicLib.json
musicRouter.post("/", async (req, res) => {
    // Expected JSON: {"titel": "...", "artist": "..."}
    let newSong = {
        artist: req.body.artist,
        titel: req.body.titel
    }   // Validate attributes
    if(newSong.artist == undefined || newSong.titel == undefined)
        {
        console.log("Attribute fehlen: " +
             newSong.artist + ", " + newSong.titel)
        res.status = 400
        res.send(
            "Fehlende Attribute bei Erstellung eines neuen Songs")
        return
    }    // Read → append song → write back
    let musicLibJson = await fs.readFile("musicLib.json")
    let musicLib = JSON.parse(musicLibJson)
    musicLib.songs.push(newSong)
    console.log(newSong)
    musicLibJson = JSON.stringify(musicLib)
    await fs.writeFile("musicLib.json", musicLibJson)
    res.sendStatus(201) // Created
})
app.use("/music/", musicRouter)   //- Mount music router under /music/
// ---------------- 🎬 FILM ROUTER ----------------
// GET: render film list using pug template
app.get("/filme/", async (req, res) => {
    let filmLibJson = await fs.readFile("filmLib.json")
    let filmLib = JSON.parse(filmLibJson)
    res.render("filme.pug", filmLib)
}) // ---------------- SERVER ----------------
app.listen(8080, () => {
    console.log("Server running on port 8080");
});
