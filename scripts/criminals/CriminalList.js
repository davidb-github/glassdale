// import provider functions
import { getCriminals, useCriminals } from './CriminalProvider.js'
import { CriminalHTML } from './CriminalHTML.js'
import { useConvictions } from '../convictions/ConvictionProvider.js'

// define eventHub scope
const eventHub = document.querySelector(".container")

// get a reference to the target HTML element
const targetElement = document.querySelector(".criminalsContainer")

// export function to build criminal HTML for index.html
export const CriminalList = () => {
 
  // generate HTML for each criminal object
  getCriminals().then(() => {
    // init and populate criminals array
    const criminalsArray = useCriminals()
    // call render and pass our criminalsArray
    render(criminalsArray)
  })
}

// Listen for the custom event dispatched in ConvictionSelect
eventHub.addEventListener('crimeChosen', event => {
  console.log("crimeSelect event happened", event.detail.crimeThatWasChosen)
  // Use the property you added to the event detail.
  if (event.detail.crimeThatWasChosen !== "0") {

    debugger
    let criminalsArray = useCriminals();
    console.log("array of criminals", criminalsArray)


    const convictionsArray = useConvictions();
    console.log("array of convictions", convictionsArray)

    // my issue is here
    const convictionThatWasChosen = convictionsArray.find(convictionObj => {
      return convictionObj.id === event.detail.crimeThatWasChosen
    })

    console.log("convictionThatWasChosen", convictionThatWasChosen)

    // build filtered array of objects
    const filteredCriminalsArray = criminalsArray.filter(criminalObj => {
      return criminalObj.conviction === convictionThatWasChosen.name

    })
    console.log("filteredCriminalsArray", filteredCriminalsArray)

    // call render and pass filtered criminal array
    render(filteredCriminalsArray)
  }
})

// Listen for the custom event you dispatched in OfficerSelect
eventHub.addEventListener("officerSelected", officerSelectedEventObj => {
  const selectedOfficerName = officerSelectedEventObj.detail.officerName
  console.log("CriminalList: officerSelected custom event has been heard on the event hub, selected officer name: ", selectedOfficerName)

  const criminalsArray = useCriminals()
  console.log("criminalsArray", criminalsArray)

  const filteredArrayCriminals = criminalsArray.filter(
    (criminalObj) => {
      return criminalObj.arrestingOfficer === selectedOfficerName
    }
  )
  console.log("CriminalList: Array of criminals filtered for only the criminals that were arrested by selected officer", filteredArrayCriminals)

  render(filteredArrayCriminals)
  console.log("CriminalList: Filtered list of criminals rendered to DOM")
})


const render = (criminalsArray) => {
  // init var to hold completed HTML
  let criminalsHTMLRep = ""

  // loop criminal array and call CriminalHTML for each element
  // add returned criminal HTML for each elemnt to criminalsHTMLRep  
  for (const criminal of criminalsArray) {
    criminalsHTMLRep += CriminalHTML(criminal)

    // insert this HTML into element held in the value of targetElement
    targetElement.innerHTML = `
        <h3>Glassdale Criminals</h3>
          <section class="criminalsList">
            ${criminalsHTMLRep}
          </section>
        `
  }

}