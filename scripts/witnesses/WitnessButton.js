// get a ref to the landing spot in index.html for the witnesses button
const contentTarget = document.querySelector(".buttons__witnesses")

// hang eventHub on top level container in index.html
const eventHub = document.querySelector(".container")

// render button to index.html
export const witnessButton = () => {
    contentTarget.innerHTML = `
    <button id="display-witnesses-button">Witness Statements</button>
   `
}

// listen for matching click event and create/dispatch CustomEvent: "witnessesClicked"
eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "display-witnesses-button") {
        // debug
        // console.log("witness statement button was clicked")

        // create
        const witnessButtonClicked = new CustomEvent("witnessesClicked")

        // dispatch
        eventHub.dispatchEvent(witnessButtonClicked)
    }
})
