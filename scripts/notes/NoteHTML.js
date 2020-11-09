export const NoteHTML = (noteObj, criminalObj) => {
    return `
    <section class="note__card">
            <p class="note__name"> Officer: ${noteObj.author}</p>
            <p class="note__suspect">Suspect: ${criminalObj.name} </p>
            <p class="note__conviction"> Note: ${noteObj.note}</p>
            <p class="note__date"> Date: ${new Date(noteObj.timestamp).toLocaleDateString('en-US')}</p>
    </section>
    `
}


