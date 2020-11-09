// import components from external modules
import { saveNote }                   from "./NoteProvider.js"
import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js"

// get a ref to the target element in index.html
const contentTarget = document.querySelector(".noteFormContainer")

// hang eventHub on top-level main element in index.html
const eventHub      = document.querySelector(".container")

// render form fields to the DOM
// use string interpolation to call .map on criminals array to populate drop-down
const render = (criminals) => {
    contentTarget.innerHTML = `
    <input  id="note--interviewDate" type="date"/>
    <input  id="note--author"        type="text" placeholder="Your name here"/>
    <select id="noteForm--criminal" class="criminalSelect">
          <option value="0">Please select a suspect</option>
        ${criminals.map((criminalObj) => {
        return `<option value="${criminalObj.id}">${criminalObj.name}</option>`
    }
    // remove commas separating array elements
    ).join("")
        }
        </select>
    <textarea id="note--note" type="text" rows="5" cols="60"> </textarea><br>
    <button id="saveNote">Save Note</button>
    `
}

// event listener to capture click events
eventHub.addEventListener("click", clickEvent => {
    // console.log(clickEvent)
    // ensure click has id of saveNote
    if (clickEvent.target.id === "saveNote") {
        // grab input values
        const interviewDate      = document.querySelector("#note--interviewDate").value
        const timestamp          = Date.now()
        const author             = document.querySelector("#note--author").value
        const selectedCriminalID = parseInt(document.querySelector("#noteForm--criminal").value)
        const note               = document.querySelector("#note--note").value

        // and make a note object
        const newNote = {
            "date"       : interviewDate,
            "timestamp"  : timestamp,
            "author"     : author,
            "criminalId" : selectedCriminalID,
            "note"       : note
        }
        // console.log(newNote);
        // send to json-server
        saveNote(newNote)
    }
})

// export function that calls render()
export const NoteForm = () => {
    getCriminals()
        .then(() => {
            const criminalsArray = useCriminals()
            
            // invoke render and pass officersArray
            render(criminalsArray)
        })

}