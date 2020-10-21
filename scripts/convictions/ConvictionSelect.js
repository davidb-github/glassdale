/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import { getConvictions, useConvictions } from "./ConvictionProvider.js"

// get a reference to top-level HTML element
const eventHub = document.querySelector(".container")

// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".filters__crime")


// On the event hub, listen for a "change" event.
eventHub.addEventListener("change", event => {
    console.log("eventHub.addEventListener: ",event.target.value, event)
    
    // Only do this if the `crimeSelect` element was changed
    if (event.target.id === "crimeSelect") {
        // Create custom event. Provide an appropriate name.
        const customEvent = new CustomEvent("crimeChosen", {
            detail: {
                crimeThatWasChosen: parseInt(event.target.value)
            }
        })

        // Dispatch to event hub
        eventHub.dispatchEvent(customEvent)
    }
})


export const ConvictionSelect = () => {
    // Get all convictions from application state
    getConvictions()
        .then(() => {
            const convictions = useConvictions()
            // console.log(convictions)
            render(convictions)
        })

    // pull out name property and build option list
    const render = convictionsCollection => {
        contentTarget.innerHTML = `
          <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
            ${convictionsCollection.map(
            convictionObj => {
                return `<option value="${convictionObj.id}">${convictionObj.name}</option>`
            }).join("")
        }
            </select>`
    }
}