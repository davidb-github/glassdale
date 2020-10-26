// import provider function
import { useCriminals } from "./CriminalProvider.js"

// hang eventHub top level on <main> in index.html
const eventHub = document.querySelector(".container")

// Create and add an event listener to the eventHub that listens for when an alibi button was clicked
eventHub.addEventListener("alibiButtonSelected", (eventObj) => {
    // console.log(eventObj.detail.criminalId)
    // populate array of criminals since the criminal object contains known_associates property
    const arrayOfCriminals = useCriminals()

    // find criminal object by matching id key value sent in the event
    const foundCriminal    = arrayOfCriminals.find( (criminalObj) => {
        // return id
        return criminalObj.id === parseInt(eventObj.detail.criminalId)
    })
    // debug
    // console.log(foundCriminal)
    // add that criminal (and their alibis) to the criminal card
    AlibiList(foundCriminal)
})

// a function that adds a list of alibis to the criminal card
const AlibiList = (criminalObj) => {
    render(criminalObj)
}

// render method
const render = (criminalObj) => {
    
    const contentTarget = document.querySelector(`#criminal-${criminalObj.id}`)
    
    // build html to insert
    contentTarget.innerHTML += `
    <div class="alibi_list">
    ${criminalObj.known_associates.map(alibiObj => {
        return `
        <div class="alibi__container">
        <p>${alibiObj.name}</p>
        <p>${alibiObj.alibi}</p>
        </div>
        `
    }).join("")}
    </div>
    `
}