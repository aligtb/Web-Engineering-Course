// Vue.js App Logic: Crypto Clicker
const { createApp } = Vue
const app = createApp({
  data() {
    return {
      cryptoCoins: 400, cryptoPerClick: 1,
      infoText: "Der Crypto-Shop hat geöffnet",
      equipment: [
        { name: "Botminer", preis: 10, modifikator: 1 },
        { name: "RTX5090", preis: 50, modifikator: 6 },
        { name: "Botnetzwerk", preis: 100, modifikator: 15 },
        { name: "Cluster", preis: 500, modifikator: 100 },
        { name: "Quantencomputer", preis: 10000, modifikator: 5000 },      ],
      hasLambo: false, gekauft: {}, optionenAufgeklappt: false, darkModeEnabled: false
    }
  },
  methods: {
    mineCrypto() {
      this.cryptoCoins += this.cryptoPerClick
      // unlocks "Lamborghini" once coins > 500
      if(this.cryptoCoins > 500 && !this.hasLambo) {
        this.equipment.push({name: "Lamborghini", preis: 50000, modifikator: 0})
        this.hasLambo = true
      }
    },
    buyCryptoEquipment(equip) {
      let { name, preis: cost, modifikator: modifier } = equip
      if(this.cryptoCoins < cost) { this.infoText = name + " zu teuer!"; return }
      this.cryptoPerClick += modifier
      this.cryptoCoins -= cost
      this.infoText = "Neues Equipment: " + name
      if(!this.gekauft[name]) this.gekauft[name] = 0
      this.gekauft[name]++
    }
  }
})
app.mount("#app")
