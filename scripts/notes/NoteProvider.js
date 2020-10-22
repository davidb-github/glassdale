// grab element on the DOM and store in eventHub
const eventHub = document.querySelector(".container")

// dispatch custom event - "noteStateChanged"
const dispatchStateChangeEvent = () => {
    const noteStateChangedEvent = new CustomEvent("noteStateChanged")

    eventHub.dispatchEvent(noteStateChangedEvent)
}

// var to hold array built from getNotes()
let notes = [];

// fetch data from local json-server
export const getNotes = () => {
    return fetch('http://localhost:8088/notes')
        .then(response => response.json())
        .then(parsedNotes => {
            notes = parsedNotes
        })
}

// return copy of the notes array
export const useNotes = () => {
    return notes.slice();
}

// export function to save note via HTTP POST method to json-server
export const saveNote = note => {
    return fetch('http://localhost:8088/notes', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        // convert JS object to JSON string
        body: JSON.stringify(note)
    })
    // update notes[] to reflect current API state after new note POSTed
    .then(getNotes)
    // dispatch event to eventHub after api state updates
    .then(dispatchStateChangeEvent)
}