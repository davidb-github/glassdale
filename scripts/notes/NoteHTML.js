export const NoteHTML = (noteObj) => {
    return `
    <section class="note__card">
            <h3 class="note__suspect"> Suspect: ${noteObj.criminalId}</h3>
            <p class="note__name"> Officer: ${noteObj.author}</p>
            <p class="note__conviction"> Note: ${noteObj.note}</p>
            <p class="note__date"> Date: ${new Date(noteObj.timestamp).toLocaleDateString('en-US')}</p>
    </section>
    `
}


