<template>
    <div id="single-note">
        <h1>{{ note.title | firstLetterUppercase }}</h1>
        <article>{{ note.content | firstLetterUppercase }}</article>
        <ul>
            <li v-for="category in note.categories">{{ category }}</li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            id: this.$route.params.id,
            note: {}
        };
    },
    filters: {
        firstLetterUppercase(value) {
            return value.charAt(0).toUpperCase() + value.slice(1);
        }
    },
    created() {
        axios
            .get(
                'https://param-vue-miniproject-default-rtdb.firebaseio.com/posts/' +
                    this.id +
                    '.json'
            )
            .then(response => {
                return response.data;
            })
            .then(data => {
                this.note = data;
            })
            .catch(error => console.log(error))
            .finally(() => {
                console.log('Axios completed');
            });
    }
};
</script>

<style scoped>
#single-note {
    max-width: 960px;
    margin: 0 auto;
}
</style>
