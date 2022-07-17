<template>
    <div id="add-note">
        <h2>Add a new note</h2>
        <form>
            <label>
                Note title:
            </label>
            <input type="text" v-model.lazy="note.title" required />
            <label>Note content:</label>
            <textarea v-model.lazy="note.content"> </textarea>
            <div id="checkboxes">
                <label>Work</label>
                <input type="checkbox" value="Work" v-model="note.categories" />
                <label>College</label>
                <input
                    type="checkbox"
                    value="College"
                    v-model="note.categories"
                />
                <label>Health</label>
                <input
                    type="checkbox"
                    value="Health"
                    v-model="note.categories"
                />
                <label>Finances</label>
                <input
                    type="checkbox"
                    value="Finances"
                    v-model="note.categories"
                />
            </div>
            <button id="submitNote" v-on:click.prevent="post_note">
                Add Note
            </button>
        </form>
        <div v-if="submitted">
            <h3>Note Added!</h3>
        </div>
        <div id="preview">
            <h3>Preview note</h3>
            <p>Note title: {{ note.title }}</p>
            <p>Note content:</p>
            <p>{{ note.content }}</p>
            <p>Note categories:</p>
            <ul>
                <li v-for="category in note.categories">{{ category }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            note: {
                title: '',
                content: '',
                categories: []
            },
            submitted: false
        };
    },
    methods: {
        post_note: function() {
            axios
                .post(
                    'https://param-vue-miniproject-default-rtdb.firebaseio.com/posts.json',
                    this.note
                )
                .then(function(res) {
                    console.log(res);
                });
        }
    }
};
</script>

<style>
#add-note * {
    box-sizing: border-box;
}
#add-note {
    margin: 20px auto;
    max-width: 500px;
}
label {
    display: block;
    margin: 20px 0 10px;
}
input[type='text'],
textarea {
    display: block;
    width: 100%;
    padding: 8px;
    background: #cdbe9c;
    border: 0;
    border-radius: 5px;
}
#preview {
    padding: 10px 20px;
    border: 1px solid #ccc;
    margin: 30px 0;
    background: #cdbe9c;
    border: 0;
    border-radius: 5px;
}
h3 {
    margin-top: 10px;
}
#checkboxes input {
    display: inline-block;
    margin-right: 10px;
    background: #cdbe9c;
}
#checkboxes label {
    display: inline-block;
}
#submitNote {
    display: block;
    margin: 20px 0;
    /*center button*/
    margin: 0 auto;
    width: 100%;
    padding: 10px;
    background: #cdbe9c;
    border: 0;
    border-radius: 5px;
}
</style>
