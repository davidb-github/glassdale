// import provider functions
import {getOfficers, useOfficers } from './OfficerProvider.js'

// get reference to officers container
const selectTarget = document.querySelector(".filters__officer")

// hang eventHub on the top-level class
const eventHub = document.querySelector(".container")
// debug
console.log("OfficerSelect: Getting reference to container for dropdown and event hub")

// export function to get officer data and render drop-down to DOM
export const OfficerSelect = () => {
    getOfficers()
    .then(() => {
      const officersArray = useOfficers()
      console.log("officersArrays", officersArray)

    render(officersArray)
    })
}

// put HTML on the DOM
const render = (officers) => {
    selectTarget.innerHTML = `
          <select class="dropdown" id="officerSelect">
              <option value="0">Please select an officer...</option>
              ${officers.map(
      officerObj => {
        return `<option value="${officerObj.name}">${officerObj.name}</option>`
      }
    ).join("")
      }
          </select>
      `
  }

// Event Listener for officerSelect change event
  eventHub.addEventListener("change", (changeEvent) => {
    if (changeEvent.target.id === "officerSelect") {
      console.log("OfficerSelect: Change event happened in the officers dropdown")
      
      console.log("OfficerSelect: Build custom event for officerSelected")
      const officerSelectedEvent = new CustomEvent("officerSelected", {
        detail: {
          officerName: changeEvent.target.value
        }
      })
  
    console.log("OfficerSelect: Dispatch officerSelected event to event hub")
    // dispatch CustomEvent w/ detail - officerName: changeEvent.target.value  
    eventHub.dispatchEvent(officerSelectedEvent)
    }
  })