/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import { getConvictions, useConvictions } from "./ConvictionProvider.js"

// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".filters__crime")

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
                const convictionName = convictionObj.name
                return `<option>${convictionName}</option>`
            })}
            </select>`
    }
}