<template>
    <div id="show-notes">
        <h1>All Notes</h1>
        <input type="text" v-model="search" placeholder="Search Notes" />
        <div class="single-note" v-for="note in filteredNotes">
            <router-link v-bind:to="'/note/' + note.id" class="linkNote"
                ><h2>
                    {{ note.title | firstLetterUppercase }}
                </h2></router-link
            >
            <p>{{ note.content | firstLetterUppercase | snippet }}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import searchMixin from '../mixins/searchMixin';
export default {
    data() {
        return {
            notes: [],
            search: ''
        };
    },
    methods: {},
    mixins: [searchMixin],
    filters: {
        firstLetterUppercase(value) {
            return value.charAt(0).toUpperCase() + value.slice(1);
        },
        snippet(value) {
            return value.slice(0, 100) + '...';
        }
    },
    created() {
        axios
            .get(
                'https://param-vue-miniproject-default-rtdb.firebaseio.com/posts.json'
            )
            .then(response => {
                return response.data;
            })
            .then(data => {
                var notesArray = [];
                for (var key in data) {
                    data[key].id = key;
                    notesArray.push(data[key]);
                }
                this.notes = notesArray;
            });
    }
};
</script>

<style scoped>
#show-notes {
    margin: 0 auto;
    max-width: 800px;
}
.single-note {
    margin: 20px 0;
    padding: 20px;
    box-sizing: border-box;
    background-color: #cdbe9c;
    border-radius: 20px;
}
input[type='text'],
textarea {
    display: block;
    box-sizing: border-box;
    width: 100%;
    padding: 8px;
    background: #cdbe9c;
    border: 0;
    border-radius: 5px;
}

.linkNote {
    text-decoration: none;
    color: black;
}
</style>
