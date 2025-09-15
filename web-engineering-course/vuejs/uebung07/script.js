
const App = Vue.createApp({
    data () {
        return {
            title : "Web Eng Blog",
            posts : [
                {
                    title : "Mein erster Blogpost ",
                    inhalt : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ante enim. Vestibulum laoreet augue sit amet nisi ultricies, ut condimentum ipsum viverra. Nunc eu lorem a est tincidunt aliquam. Vivamus pellentesque ligula lectus, vel auctor erat tempor ut. Integer vitae aliquam est, sit amet euismod nisi. Etiam lacus massa, finibus quis congue ac, finibus quis justo. Mauris purus velit, sagittis vel maximus eget, varius ac lectus. Pellentesque in diam vitae magna volutpat tincidunt non non nulla. Nulla ornare ex sit amet ipsum sagittis eleifend. Sed id tempor arcu. Nulla facilisi. Vestibulum rhoncus lectus id luctus sagittis.",
                    kommentare : [
                        {autor : "max mustermann", inhalt : "danke für den Post!"},
                        {autor : "maxi musterfrau", inhalt : "danke für den info!"},
                        {autor : "max musnter", inhalt : "danke für den Post!"}
                        // ...
                    ]
                },
                {
                    title : "Mein Zweiter Blogpost ",
                    inhalt : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ante enim. Vestibulum laoreet augue sit amet nisi ultricies, ut condimentum ipsum viverra. Nunc eu lorem a est tincidunt aliquam. Vivamus pellentesque ligula lectus, vel auctor erat tempor ut. Integer vitae aliquam est, sit amet euismod nisi. Etiam lacus massa, finibus quis congue ac, finibus quis justo. Mauris purus velit, sagittis vel maximus eget, varius ac lectus. Pellentesque in diam vitae magna volutpat tincidunt non non nulla. Nulla ornare ex sit amet ipsum sagittis eleifend. Sed id tempor arcu. Nulla facilisi. Vestibulum rhoncus lectus id luctus sagittis.",
                    kommentare : [
                        // ...
                    ]
                }
            ]
        }

    },
    methods : {

    }
})


App.component("Post", {
    props: ["postInput"],
    template:   '<div class="post">' +
                '    <h2>{{ postInput.title }}</h2>' +
                '    <p>{{ postInput.inhalt }}</p>' +
                '    <hr v-if="postInput.kommentare.length > 0" style="width: 100%;">' +
                '    <div v-for="kommentar in postInput.kommentare">' +
                '       <Komentar v-bind:kommentar="kommentar"></Komentar>' +
                '    </div>' +
                '    <addkomentar v-bind:post="postInput"></addkomentar>' +
                '</div>'
})

App.component("Komentar", {
    props: ["kommentar"],
    template: '<div class="kommentar">' +
                    '<span><b>{{kommentar.autor}}: </b> {{ kommentar.inhalt }}</span><hr>'+
                '</div>'
})

App.component("Addpost", {
    data () {
        return {
            post : {title : "", inhalt : ""}
        }
    },
    props:["posts"],
    template:   '<div id="addpost">' +
                    '<h3>Title</h3>' +
                    '<input v-model="post.title" type="text" placeholder="Title"><br>' +
                    '<textarea v-model="post.inhalt" cols="30" placeholder="Inhalt eingeben." rows="10"></textarea>' +
                    '<br><button v-on:click="addPost()">Post hinzufuegen</button>' +
                '</div>',

    methods : {
        addPost() {
            alert("Post hinzugefügt!")
            this.posts.push({title: this.post.title, inhalt: this.post.inhalt, kommentare: []})
            return 1
        }
    }
})

App.component("addkomentar", {
    data(){
        return {
            kommentar : { autor : "", inhalt : ""}
        }
    },
    props : ["post"],
    template :  '   <div class="addComment"> ' +
                '        <input v-model="kommentar.autor" type="text" name="name" placeholder="Deine name" id="inputAutor">' +
                '        <br><textarea v-model="kommentar.inhalt" name="comment" placeholder="Dein Kommentar" id="inputComment" rows="5"></textarea>' +
                '        <br><button v-on:click="addComment()" type="submit">Post</button>' +
                '    </div>',
    methods : {
        addComment() {
            this.post.kommentare.push({autor : this.kommentar.autor, inhalt : this.kommentar.inhalt })
            return 1
        }
    }
})


App.mount("#app")