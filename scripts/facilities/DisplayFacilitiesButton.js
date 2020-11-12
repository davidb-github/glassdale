// get a ref to the landing spot in index.html for the facilities button
const contentTarget = document.querySelector(".facility__button")

// hang eventHub on top level container in index.html
const eventHub = document.querySelector(".container")

// render button to index.html
export const facilitiesButton = () => {
    contentTarget.innerHTML = `
    <button id="display-facilities-button">Display Facilities</button>
   `
}

// listen for matching click event and create/dispatch CustomEvent: "witnessesClicked"
eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "display-facilities-button") {
        // debug
        console.log("facilities statement button was clicked")

        // create
        const facilitiesButtonClicked = new CustomEvent("facilitiesClicked")

        // dispatch
        eventHub.dispatchEvent(facilitiesButtonClicked)
    }
})
