import { getNotes, useNotes } from './NoteProvider.js'
import { NoteHTML } from './NoteHTML.js'

// get a reference to target HTML attribute where notes will render
const notesContainer = document.querySelector(".notesContainer")

// get reference to eventHub
const eventHub = document.querySelector(".container")

// call NoteList() to bring app state up to date with API in response to event indicating API state change
eventHub.addEventListener("noteStateChanged", () => NoteList())


// get notes[] and generate HTML for each note object
export const NoteList = () => {
    getNotes().then(() => {
        // init and populate notesArray
        const notesArray = useNotes()

        // call render and pass our notesArray
        render(notesArray)
    })
}

// render to DOM
const render = (notesArray) => {
    // init var to hold completed HTML
    let notesHTMLRep = ""

    // loop notesArray and call noteHTML for each element
    for (const note of notesArray) {
        // add returned noteHTML for each elemnt to notesHTMLRep  
        notesHTMLRep += NoteHTML(note)

        // insert the full notesHTMLRep HTML into element held in the value of notesContainer
        notesContainer.innerHTML = `
          <h2>Case Notes</h2>
            <section class="notesList">
              ${notesHTMLRep}
            </section>
          `
    }
}