import NotesAPI from "./NotesAPI.js"

NotesAPI.saveNote({
    title: "Quads rule!",
    body: "C4 complete, chin control chair!"
});

console.log(NotesAPI.getAllNotes());