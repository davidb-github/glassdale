import { getNotes, useNotes } from './NoteProvider.js'
import { NoteHTML } from './NoteHTML.js'
import { getCriminals, useCriminals } from '../criminals/CriminalProvider.js'
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
    .then(getCriminals)
    .then(() => {
      const notesArray = useNotes()
      const criminalsArray = useCriminals()
      render(notesArray, criminalsArray)
    })
}
// Unable to get the .map approach working
// const render = (notesArray, criminalsArray) => {
//   let notesHTMLRep = ""
  // debugger

//   for (let note of notesArray) {
//     const mappedCriminal = criminalsArray.find(criminal => criminal.id === note.criminalId)

//     notesHTMLRep += NoteHTML(note, mappedCriminal)
//   }
//   notesContainer.innerHTML = `
//     <h3>Case Notes</h3>
//       ${notesHTMLRep}
//   `
// }

const render = (notesArray, criminalsArray) => {
  notesContainer.innerHTML = notesArray.map(note => {
      // Find the related criminal
      const relatedCriminal = criminalsArray.find(criminal => criminal.id === note.criminalId)

      return `
<section class="note__card">
  <p class="note__name"> Officer: ${note.author}</p>
  <p class="note__suspect">Suspect: ${relatedCriminal.name} </p>
  <p class="note__conviction"> Note: ${note.note}</p>
  <p class="note__date"> Date: ${new Date(note.timestamp).toLocaleDateString('en-US')}</p>
</section>
      `
  }).join("")
}