export default class NotesAPI {
    static getAllNotes() {
        const notes = JSON.parse(localStorage.getItem("simplenotes-notes") || "[]");

        return notes.sort((a, b) => {
            return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
        });
    }

    static saveNote(noteToSave) {
        const notes = NotesAPI.getAllNotes();
        const noteExisting = notes.find(note => note.id == noteToSave.id)

        // Edit / Update
        if (noteExisting) {
            noteExisting.title = noteToSave.title;
            noteExisting.body = noteToSave.body;
            noteExisting.updated = new Date().toISOString();

        } else {
            //  Insert
            noteToSave.id = Math.floor(Math.random() * 1000000);
            noteToSave.updated = new Date().toISOString();
            notes.push(noteToSave);
        }


        localStorage.setItem("simplenotes-notes", JSON.stringify(notes));

    }

    static deleteNote(id) {
        const notes = NotesAPI.getAllNotes();

        //  Get all note and filter all with exception of passed in id
        const newNotes = notes.filter(note => note.id != id);

        localStorage.setItem("notesapp-notes", JSON.stringify(newNotes));
    }
}