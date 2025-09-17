// JavaScript / ECMAScript6: Speiseplan-Klasse mit CRUD-Funktionalität
class Speiseplan {
    constructor() {// Startdaten
        this.speisen = [new Speise("Falafelteller", "3,50"), new Speise("Nudeltheke", "2,60")]
        this.renderSpeiseplan()
    } 
    speiseHinzufuegen(speise) { // Falls Speise vorhanden, Preis aktualisieren – sonst hinzufügen
        for (let i = this.speisen.length - 1; i >= 0; i--) {
            if(this.speisen[i].name == speise.name) {
                this.speisen[i].preis = speise.preis
                return this.renderSpeiseplan()
            }
        }
        this.speisen.push(speise)
        this.renderSpeiseplan()
    }
    speiseEntfernen(name) {  // Löscht letzte gefundene Speise mit passendem Namen
        for (let i = this.speisen.length - 1; i >= 0; i--) {
            if(this.speisen[i].name == name) this.speisen.splice(i)
        }
        this.renderSpeiseplan()
    }
    renderSpeiseplan() {     // Ausgabe ins DOM
        let listHTML = ""
        for(const speise of this.speisen) listHTML += `<li>${speise.name} (${speise.preis}€)</li>`
        document.getElementById("Speiseplan").innerHTML = listHTML
    }     // Statischer Helfer für Rabattberechnung
    static berechneStudirabatt(preis) { return preis * 0.8 }
}
Speiseplan.berechneStudirabatt(4.00) // Beispielaufruf
class Speise {
    constructor(name, preis) { this.name = name; this.preis = preis }
}// Interaktive Logik mit DOM
let meinSpeiseplan = new Speiseplan()
let addBtn = document.getElementById("hinzufuegen")
let removeBtn = document.getElementById("entfernen")
let speiseEntry = document.getElementById("speiseEingabe")
let preisEntry = document.getElementById("preisEingabe")
addBtn.onclick = () => {
    let speise = new Speise(speiseEntry.value, preisEntry.value)
    meinSpeiseplan.speiseHinzufuegen(speise)
}
removeBtn.onclick = () => meinSpeiseplan.speiseEntfernen(speiseEntry.value)
