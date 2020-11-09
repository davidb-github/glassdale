import { getNotes, useNotes } from './NoteProvider.js'
import { NoteHTML } from './NoteHTML.js'
import { getCriminals, useCriminals } from '../criminals/CriminalProvider.js'
import { deleteNote } from './NoteProvider.js'



// get a reference to target HTML attribute where notes will render
const notesContainer = document.querySelector(".notesContainer")

// get reference to eventHub
const eventHub = document.querySelector(".container")

// call NoteList() to bring app state up to date with API in response to event indicating API state change
eventHub.addEventListener("noteStateChanged", () => NoteList())

// get notes[] and generate HTML for each note object
export const NoteList = () => {
  getNotes()
    .then(getCriminals)
    .then(() => {
      const notesArray = useNotes()
      const criminalsArray = useCriminals()
      render(notesArray, criminalsArray)
    })
}
/* Question on target pattern. 
Is it better to call .map and paint the html directly and get rid of the noteHTML.js module?
Leaving original render function that calls noteHTML() until after discussion
*/
const render = (notesArray, criminalsArray) => {
  let notesHTMLRep = ""
  // debugger

  for (let note of notesArray) {
    const mappedCriminal = criminalsArray.find(criminal => criminal.id === note.criminalId)

    notesHTMLRep += NoteHTML(note, mappedCriminal)
  }
  notesContainer.innerHTML = `
    <h3>Case Notes</h3>
      ${notesHTMLRep}
  `
}

// maps through notesArray and puts HTML directly on the DOM.
// const render = (notesArray, criminalsArray) => {
//   notesContainer.innerHTML = notesArray.map(note => {
//       // Find the related criminal
//       const relatedCriminal = criminalsArray.find(criminal => criminal.id === note.criminalId)

//       return `
// <section class="note__card">
//   <p class="note__name"> Officer: ${note.author}</p>
//   <p class="note__suspect">Suspect: ${relatedCriminal.name} </p>
//   <p class="note__conviction"> Note: ${note.note}</p>
//   <p class="note__date"> Date: ${new Date(note.timestamp).toLocaleDateString('en-US')}</p>
//   <button id="deleteNote--${note.id}">Delete</button>
// </section>
//       `
//   }).join("")
// }

eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id.startsWith("deleteNote--")) {
      const [prefix, id] = clickEvent.target.id.split("--")

      // Invoke the function that performs the delete operation.
     deleteNote(id).then(
         () => {
            // Once the operation is complete you should THEN invoke useNotes() and render the note list again.
             const updatedNotes = useNotes()
             const criminals = useCriminals()
             render(updatedNotes, criminals)
         }
     )
  }
})