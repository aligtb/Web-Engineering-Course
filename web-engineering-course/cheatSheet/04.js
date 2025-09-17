// JavaScript / ECMAScript6: Wetterdatum-Klasse + Tabellenerzeugung

class Wetterdatum {
    constructor(datum, temperatur, luftfeuchtigkeit) {
        this.datum = datum
        this.temperatur = temperatur
        // Luftfeuchtigkeit kann nicht >100% sein
        this.luftfeuchtigkeit = luftfeuchtigkeit > 100 ? 100 : luftfeuchtigkeit
    }

    get temperaturFahrenheit() { return this.temperatur * 9 / 5 + 32 }
    set temperaturFahrenheit(value) { this.temperatur = (value - 32) / 9 * 5 }
}

// Wetterdaten-Beispiele
let wetterDaten = [
    new Wetterdatum(new Date(2025, 5, 1), 9, 61),
    new Wetterdatum(new Date(2025, 5, 2), 7, 52),
    new Wetterdatum(new Date(2025, 5, 3), 7, 45),
    new Wetterdatum(new Date(2025, 5, 4), 5, 49),
    new Wetterdatum(new Date(2025, 5, 5), 8, 55),
    new Wetterdatum(new Date(2025, 5, 6), 12, 75),
    new Wetterdatum(new Date(2025, 5, 7), 11, 180), // wird auf 100% gekappt
    new Wetterdatum(new Date(2025, 5, 8), 13, 6)
]

// Tabellenaufbau per String-Konkatenation
let tablestr = "<tr><th>Datum</th>"
for (const eintrag of wetterDaten) {
    tablestr += "<th>" + eintrag.datum.toLocaleDateString("de-DE") + "</th>"
}
tablestr += "</tr>"

tablestr += "<tr><th>Temperatur (°C)</th>"
for (const eintrag of wetterDaten) {
    tablestr += "<td>" + eintrag.temperatur + "°C</td>"
}
tablestr += "</tr>"

tablestr += "<tr><th>Temperatur (°F)</th>"
for (const eintrag of wetterDaten) {
    tablestr += "<td>" + eintrag.temperaturFahrenheit + "°F</td>"
}
tablestr += "</tr>"

tablestr += "<tr><th>Luftfeuchtigkeit</th>"
for (const eintrag of wetterDaten) {
    tablestr += "<td>" + eintrag.luftfeuchtigkeit + "%</td>"
}
tablestr += "</tr>"

// Tabelle in das HTML-DOM einfügen
document.getElementById("wettertabelle").innerHTML = tablestr
