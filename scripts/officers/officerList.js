// import data provider and HTML builder functions
import { getOfficers, useOfficers } from './OfficerProvider.js'
import { OfficerHTML } from './OfficerHTML.js'

// export function to build officer HTML for index.html
export const OfficerList = () => {

    // get a reference to the target HTML element
    const targetElement = document.querySelector(".officersContainer")

    // generate HTML for each officer object
    getOfficers().then( () => {
        // init and populate officers array
        const officersArray = useOfficers()

        // init var to hold completed HTML
        let officersHTMLRep = ""

        // loop officer array and call OfficerHTML for each element
        // add return officer HTML for each element to officersHTMLRep
        for (const officer of officersArray) {
            officersHTMLRep += OfficerHTML(officer)

        // insert this HTML into element element value held in targetElement
        targetElement.innerHTML = `
        <h3>Glassdale Officers</h3>
          <section class="officersList">
            ${officersHTMLRep}
          </section>
        `
        }
    })



}

