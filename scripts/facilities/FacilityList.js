// import modules and components
import { getCriminals, useCriminals } from '../criminals/CriminalProvider.js'
import { useCriminalFacilities } from './CriminalFacilityProvider.js'
import { FacilityHTML } from './FacilityHTML.js'
import { getFacilities, useFacilities } from './FacilityProvider.js'

// hang eventHub off top level of index.html
const eventHub = document.querySelector(".container")

// target landing spot in index.html for the facilities
const targetContainer = document.querySelector(".facilityContainer")

// Component state variables with initial values
let facilities         = []
let criminals          = []
let criminalFacilities = []

// event listener to detect witness stmt button click and respond w/invoking WitnessList()
eventHub.addEventListener("facilitiesClicked", () => {
    // debug
    console.log("Facility button click = facilitiesClicked")

    FacilityList()
})

// // get w. statement data and render to DOM
const FacilityList = () => {

    // get data and pass to render as argument
    getFacilities()
    .then(getCriminals)
    .then(() => {
        facilities         = useFacilities()
        criminals          = useCriminals()
        criminalFacilities = useCriminalFacilities()    
        
        // debug
        console.log("facilities:", facilities, "criminals: ", criminals, "criminalFacilities: ", criminalFacilities)
        render()
        })

// debugger
// render function to build HTML and send to DOM
const render = () => {
    let htmlRep = ""
    // Step 1 - Iterate all facilities
    targetContainer.innerHTML = facilities.map( 
        (facilityObj) => {
            // lets just get facilities on the dom first.
            htmlRep += FacilityHTML(facilityObj)

            // Step 2 - Filter all relationships to get only ones for this facility
            
            // const criminalRelationshipsForThisFacility = criminalFacilities.filter(cf => cf.criminalId ===  )
            

            // Step 3 - Convert the relationships to facilities with map()
        })
        targetContainer.innerHTML = `
        <h1>Incarceration Facilities</h1>
            <section class="facilitiesList">
                ${htmlRep}
            <button id="hideFacilityCards">Hide Facilities</button>
            </section>
            `
        


}





//     // render function to build HTML and send to DOM
//     const render = (witnessesArray) => {

//         // init var to hold HTML
//         let witnessHTML = ""

//         // loop witnessesArray
//         for (const witness of witnessesArray) {

//             // build/append inv. witness HTML and store cumulative HTML before handing to DOM
//             witnessHTML += WitnessStatementHTML(witness)

//             // send finished HTML to DOM
//             targetContainer.innerHTML = `
//             <h3>Glassdale Witnesses</h3>
//               <section class="witnessesList">
//                 ${witnessHTML}
//               </section>
//             `
//         }
//     }

 }