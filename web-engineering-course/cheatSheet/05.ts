// TypeScript: Bankverwaltung mit Kunden

class Kunde {
    name: string
    geburtsdatum: Date | string
    alter: Number
    telefonnummer?: string // optionales Feld

    constructor(name: string, geburtsdatum: Date, alter: Number) {
        this.name = name
        this.alter = alter
        this.geburtsdatum = geburtsdatum
    }
}

class Bank {
    kunden: Array<Kunde> = []

    addKunde(kunde: Kunde) { this.kunden.push(kunde) }

    getKunde(name: string): Kunde | undefined {
        // Iteration statt find(), um undefined-Fall abzusichern
        for(const kunde of this.kunden) {
            if(kunde.name == name) return kunde
        }
        return undefined
    }
}

// Beispielkunde
let kunde1 = new Kunde("Max Mustermann", new Date(1990, 30, 10), 34)
kunde1.telefonnummer = "1245"

let bank = new Bank()
bank.addKunde(kunde1)

console.log(kunde1.name + ", " + kunde1.alter)
console.log(bank.getKunde("Max Mustermann"))
console.log(bank.getKunde("Maria Mustermann"))
