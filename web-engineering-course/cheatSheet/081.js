// U08 Express Backend (app.js)
const express = require("express");
const fs = require('fs');
const cors = require('cors');
var app = express();
app.use(express.json())
app.use(cors())
// GET all movies
app.get("/myMovies", (req,res) => {
  console.log("Lade spielfilme.json")
  let spielfilmList = JSON.parse(fs.readFileSync("spielfilme.json"))
  console.log("Schicke spielfilme.json an " + req.ip)
  res.json(spielfilmList)
})
// GET movie by id
app.get("/myMovies/:id", (req,res) => {
  try {
    let movieId = parseInt(req.params.id)
    let spielfilmList = JSON.parse(fs.readFileSync("spielfilme.json"))
    let derSpielfilm = spielfilmList.filme[movieId]
    if(!derSpielfilm) throw new Error("Film mit ID nicht vorhanden")
    res.json(derSpielfilm)
  } catch(e) { res.sendStatus(404) }
})
// PUT update movie
app.put("/myMovies/:id", (req,res) => {
  try {
    let movieId = parseInt(req.params.id)
    let spielfilmList = JSON.parse(fs.readFileSync("spielfilme.json"))
    spielfilmList.filme[movieId] = req.body
    fs.writeFileSync("spielfilme.json", JSON.stringify(spielfilmList))
    res.sendStatus(200)
  } catch(e) { res.sendStatus(500) }
})
// DELETE movie
app.delete("/myMovies/:id", (req,res) => {
  try {
    let movieId = parseInt(req.params.id)
    let spielfilmList = JSON.parse(fs.readFileSync("spielfilme.json"))
    spielfilmList.filme.splice(movieId,1)
    fs.writeFileSync("spielfilme.json", JSON.stringify(spielfilmList))
    res.sendStatus(200)
  } catch(e) { res.sendStatus(500) }
})
app.use(express.static("public"))
app.listen(8080, () => console.log("Server running on port 8080"))
