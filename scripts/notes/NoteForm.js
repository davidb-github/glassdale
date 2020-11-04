import { saveNote } from "./NoteProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub      = document.querySelector(".container")

// render form fields to the DOM
const render = () => {
    contentTarget.innerHTML = `
    <input id="note--interviewDate" type="date"/>
    <input id="note--author" type="text" placeholder="Your name here"/>
    <select id ="note--criminal" class="criminalSelect"> 
      <option value="criminaldotid">criminaldotname</option>
    </select>
    <textarea id="note--note" type="text" rows="5" cols="60"> </textarea><br>
    <button id="saveNote">Save Note</button>
    `
}

// event listener to capture click events
eventHub.addEventListener("click", clickEvent => {
    // console.log(clickEvent)
    // ensure click has id of saveNote
    if(clickEvent.target.id === "saveNote") {
        // grab input values
        const interviewDate = document.querySelector("#note--interviewDate").value
        const timestamp     = Date.now()
        const author        = document.querySelector("#note--author").value
        const suspect       = document.querySelector("#note--suspect").value
        const note          = document.querySelector("#note--note").value
        
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
    render()
}