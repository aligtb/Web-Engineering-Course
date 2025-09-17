// JavaScript / ECMAScript6: Klassenhierarchie für Gegenstände

class Gegenstand {
    constructor(bezeichner, gewicht) {
        this.bezeichner = bezeichner
        this.gewicht = gewicht
    }
    getBeschreibung() { return this.bezeichner }
    getGewicht() { return this.gewicht }
}

class Kugel extends Gegenstand {
    constructor(bezeichner, gewicht, radius) {
        super(bezeichner, gewicht)
        this.radius = radius
    }
    getBeschreibung() { return this.bezeichner + ", Kugel mit Radius " + this.radius }
}

class Wuerfel extends Gegenstand {
    constructor(bezeichner, gewicht, seitenlaenge) {
        super(bezeichner, gewicht)
        this.seitenlaenge = seitenlaenge
    }
    getBeschreibung() { return this.bezeichner + ", Würfel mit Seitenlänge " + this.seitenlaenge }
}

// Beispielobjekte
let wuerfel1 = new Wuerfel("w1", 5, 10)
let kugel1 = new Kugel("k1", 2, 5)
console.log(wuerfel1.getBeschreibung())
console.log(kugel1.getBeschreibung())
