// JavaScript (filmArchiv.js) - Client logic
const showAllFilmbttn = document.querySelector('#allFilms');
const nextFilmbttn = document.querySelector('#next');
const prevFilmbttn = document.querySelector('#previous');
const editFilmbttn = document.querySelector('#editFilm');
const deleteFilmbttn = document.querySelector('#deleteFilm');
var currentFilmId = 0
// PUT: update movie
editFilmbttn.addEventListener('click', async () => {
  let editData = {
    titel: document.getElementById("filmTitelInput").value,
    datum: document.getElementById("filmDatumInput").value,
    regie: document.getElementById("filmRegieInput").value
  }
  let res = await fetch("/myMovies/" + currentFilmId, {
    method: "put", 
    headers: {'Accept':'application/json','Content-Type':'application/json'},
    body: JSON.stringify(editData)
  })
  console.log(res)
}) // DELETE: remove movie
deleteFilmbttn.addEventListener('click', async () => {
  await fetch("/myMovies/" + currentFilmId, { method: "delete" })
  selectFilm(0) // load first after delete
}) // navigation
nextFilmbttn.addEventListener('click', () => selectFilm(currentFilmId+1))
prevFilmbttn.addEventListener('click', () => selectFilm(currentFilmId-1))
// GET one movie
async function selectFilm(id) {
  let res = await fetch("/myMovies/" + id, { method:"get", 
    headers:{'Accept':'application/json','Content-Type':'application/json'} })
  if(!res.ok) { console.log("Could not find movie with id " + id); return }
  let data = await res.json()
  document.getElementById("filmTitelInput").value = data.titel
  document.getElementById("filmDatumInput").value = data.datum
  document.getElementById("filmRegieInput").value = data.regie
  currentFilmId = id
}
selectFilm(currentFilmId) // init
// show all movies in table
const showFilmTable = (filmListe) => {
  let table = "<tr><th>Titel</th><th>Erscheinungsdatum</th><th>Regie</th></tr>"
  for (i=0; i<filmListe.filme.length; i++) {
    table += `<tr><td>${filmListe.filme[i].titel}</td><td>
    ${filmListe.filme[i].datum}</td><td>${filmListe.filme[i].regie}</td></tr>`
  }
  document.getElementById("filmTable").innerHTML = table
} // GET all movies
showAllFilmbttn.addEventListener('click', async () => {
  console.log("Schicke Request an /myMovies")
  let res = await fetch("/myMovies", { method:"get", 
    headers:{'Accept':'application/json','Content-Type':'application/json'} })
  let data = await res.json()
  console.log(data)
  showFilmTable(data)
})
