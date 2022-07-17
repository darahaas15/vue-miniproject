<template>
    <div id="app">
        <AppHeader></AppHeader>
        <router-view> </router-view>
    </div>
</template>

<script>
import addNote from './components/addNote.vue';
import showNotes from './components/showNotes.vue';
import AppHeader from './components/header.vue';
import singleNote from './components/singleNote.vue';

export default {
    name: 'App',
    components: {
        addNote,
        showNotes,
        AppHeader,
        singleNote
    },
    data() {
        return {};
    },
    methods: {}
};
</script>

<style>
body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    background: #ddd2bb;
}
</style>
