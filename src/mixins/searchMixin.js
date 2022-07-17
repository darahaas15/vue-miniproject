export default {
    computed: {
        filteredNotes() {
            return this.notes.filter(note => {
                return note.title
                    .toLowerCase()
                    .includes(this.search.toLowerCase());
            });
        }
    }
};
