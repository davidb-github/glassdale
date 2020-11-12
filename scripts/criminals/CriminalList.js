// import provider functions
import { getCriminals, useCriminals } from './CriminalProvider.js'
import { CriminalHTML } from './CriminalHTML.js'
import { useConvictions } from '../convictions/ConvictionProvider.js'
import { getFacilities, useFacilities } from '../facilities/FacilityProvider.js'
import { getCriminalFacilities, useCriminalFacilities } from '../facilities/CriminalFacilityProvider.js'

// define eventHub scope
const eventHub = document.querySelector(".container")

// get a reference to the target HTML element
const targetElement = document.querySelector(".criminalsContainer")

// Component state variables with initial values
let facilities         = []
let criminals     = []
let criminalFacilities = []


// export function to build criminal HTML for index.html
export const CriminalList = () => {

  // generate HTML for each criminal object
  getCriminals()
  .then(getFacilities)
  .then(getCriminalFacilities)
  .then( () => {
    // init and populate criminals array
    // are these vars the same as lines 15-17
    criminals          = useCriminals()
    criminalFacilities = useCriminalFacilities()
    facilities         = useFacilities()
    // call render and pass our criminalsArray
    render() //criminalsArray, facilities, criminalFacilities
  })
}

// Listen for the custom event dispatched in ConvictionSelect
eventHub.addEventListener('crimeChosen', event => {
  // console.log("crimeSelect event happened", event.detail.crimeThatWasChosen)
  // Use the property added to the event detail.
  if (event.detail.crimeThatWasChosen !== "0") {

    // debugger
    let criminalsArray = useCriminals();
    // console.log("array of criminals", criminalsArray)


    const convictionsArray = useConvictions();
    // console.log("array of convictions", convictionsArray)

    // build array filtered by id
    const convictionThatWasChosen = convictionsArray.find(convictionObj => {
      return convictionObj.id === event.detail.crimeThatWasChosen
    })

    // console.log("convictionThatWasChosen", convictionThatWasChosen)
// debugger
    // build filtered array of objects
    const filteredCriminalsArray = criminalsArray.filter(criminalObj => {
      return criminalObj.conviction === convictionThatWasChosen.name

    })
    // console.log("filteredCriminalsArray", filteredCriminalsArray)

    // call render and pass filtered criminal array
    criminals = filteredCriminalsArray

    render(filteredCriminalsArray) //filteredCriminalsArray, facilities, criminalFacilities
  }
})

// Listen for the custom event you dispatched in OfficerSelect
eventHub.addEventListener("officerSelected", officerSelectedEventObj => {
  const selectedOfficerName = officerSelectedEventObj.detail.officerName
  // console.log("CriminalList: officerSelected custom event received by EventHub, selected officer name: ", selectedOfficerName)

  const criminalsArray = useCriminals()
  // console.log("criminalsArray", criminalsArray)

  const filteredArrayCriminals = criminalsArray.filter(
    (criminalObj) => {
      return criminalObj.arrestingOfficer === selectedOfficerName
    }
  )
  // console.log("CriminalList: Array of criminals filtered for only the criminals that were arrested by selected officer", filteredArrayCriminals)

  // filteredArrayCriminals, facilities, criminalFacilities
  criminals = filteredArrayCriminals

  render(filteredArrayCriminals)
  // console.log("CriminalList: Filtered list of criminals rendered to DOM")
})

// , allFacilities, allRelationships
const render = (criminalsToRender) => {
  // init var to hold completed HTML
  // let criminalsHTMLRep = ""
// debugger 
  // Step 1 - Iterate all criminals // criminalsToRender
  targetElement.innerHTML = criminals.map(
    (criminalObject) => {
        // Step 2 - Filter all relationships to get only ones for this criminal
        const facilityRelationshipsForThisCriminal = criminalFacilities.filter(cf => cf.criminalId === criminalObject.id)

        // Step 3 - Convert the relationships to facilities with map()
        const matchedFacilities             = facilityRelationshipsForThisCriminal.map(cf => {
        const matchingFacilityObject = facilities.find(facility => facility.id === cf.facilityId)
            return matchingFacilityObject
        })
// debugger
        // Must pass the matching facilities to the Criminal component
        return CriminalHTML(criminalObject, matchedFacilities)
    }
).join("")
}
  
  
  // loop criminal array and call CriminalHTML for each element
  //  for (const criminal of criminalsArray) {
  //   // add returned criminal HTML for each elemnt to criminalsHTMLRep 
  //   criminalsHTMLRep += CriminalHTML(criminal)

  //   // insert this HTML into element held in the value of targetElement
  //   targetElement.innerHTML = `
  //       <h3>Glassdale Criminals</h3>
  //         <section class="criminalsList">
  //           ${criminalsHTMLRep}
  //         </section>
  //       `
  // }

// }