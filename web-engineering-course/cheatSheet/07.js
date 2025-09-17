// Vue.js Blog App Logic
const { createApp } = Vue
const app = createApp({
  data() {
    return {
      title: "WebEng Blog",
      posts: [
        {
          titel: "Mein erster Blogpost",
          inhalt: "Lorem ipsum dolor sit amet ...",
          kommentare: [
            {autor: "MaxMustermann", inhalt: "Danke für den Post!"},
            {autor: "MaxiMusterfrau", inhalt: "Vielen Dank!"}
          ]
        },
        { titel: "Mein zweiter Blogpost",
            inhalt: "Lorem ipsum dolor sit amet ...", kommentare: [] }
      ]
    }
  }
}) // Component for blog posts
let Post = {
  props: ["post"],
  template: `
    <div class="post">
      <div class="postinhalt">
        <h2>{{post.titel}}</h2><p>{{post.inhalt}}</p>
      </div>
      <hr/>
      <div v-for="kommentar in post.kommentare">
        <Kommentar v-bind:kommentar="kommentar"></Kommentar>
      </div>
      <!-- new comment form -->
      <div class="neuerKommentar">
        <input v-model="post.neuerKommentarAutor" 
        type="text" placeholder="Name"/><br/>
        <textarea v-model="post.neuerKommentarInhalt"
        rows="4" placeholder="Kommentar..."></textarea><br/>
        <button v-on:click="neuerKommentar">Posten</button>
      </div>
    </div>`,
  methods: {
    neuerKommentar() {
      let { neuerKommentarAutor: autor, 
        neuerKommentarInhalt: inhalt } = this.post
      if(!autor || !inhalt) return
      this.post.kommentare.push({ autor, inhalt })
      this.post.neuerKommentarInhalt = "" // reset only text
    }
  }
} // Component for individual comments
let Kommentar = {
  props: ["kommentar"],
  template: `
    <div class="kommentar">
      <span class="autor">{{kommentar.autor}}</span>
      <span class="inhalt">: {{kommentar.inhalt}}</span>
    </div>`
}
app.component("Post", Post)
app.component("Kommentar", Kommentar)
app.mount("#app")
