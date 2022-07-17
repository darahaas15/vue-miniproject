import ShowNotes from './components/showNotes.vue';
import AddNote from './components/addNote.vue';
import singleNote from './components/singleNote.vue';

export default [
    {
        path: '/',
        component: ShowNotes
    },
    {
        path: '/add',
        component: AddNote
    },
    {
        path: '/note/:id',
        component: singleNote
    }
];
