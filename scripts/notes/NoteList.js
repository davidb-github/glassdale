import { getNotes, useNotes } from './NoteProvider.js'
import { NoteHTML } from './NoteHTML.js'
// import useCriminals for use in render function below


// get a reference to target HTML attribute where notes will render
const notesContainer = document.querySelector(".notesContainer")

// get reference to eventHub
const eventHub = document.querySelector(".container")

// call NoteList() to bring app state up to date with API in response to event indicating API state change
eventHub.addEventListener("noteStateChanged", () => NoteList())


// get notes[] and generate HTML for each note object
export const NoteList = () => {
    getNotes()
      // add getCriminals to first .then
        .then( () => {
        // add 2nd .then to call useCriminals to populate new var under notesArray
        // init and populate notesArray
        const notesArray = useNotes()
        
        // add new criminals argument to render call below
        // call render and pass our notesArray
        render(notesArray)
    })
}

// render to DOM
// add new criminals parameter to render function
const render = (notesArray) => {
    // move notesContainer.innerHTML here and invoke notesArray.map with call back of criminalArray.find

    // add return statement w/ string interpolation and . notation for criminal name and note text

    // this goes away
    // init var to hold completed HTML
    let notesHTMLRep = ""

    // this gets replaced by above .map
    // loop notesArray and call noteHTML for each element
    for (const note of notesArray) {
        // add returned noteHTML for each elemnt to notesHTMLRep  
        notesHTMLRep += NoteHTML(note)

        // this moves up to the return statement
        // insert the full notesHTMLRep HTML into element held in the value of notesContainer
        notesContainer.innerHTML = `
          <h2>Case Notes</h2>
            <section class="notesList">
              ${notesHTMLRep}
            </section>
          `
    }
}