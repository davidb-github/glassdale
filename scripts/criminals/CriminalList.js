// import provider functions
import { getCriminals, useCriminals } from './CriminalProvider.js'
import { CriminalHTML } from './CriminalHTML.js'

// export function to build criminal HTML for index.html
export const CriminalList = () => {

    // get a reference to the target HTML element
    const targetElement = document.querySelector(".criminalsContainer")

    // generate HTML for each criminal object
    getCriminals().then(() => {
        // init and populate criminals array
        const criminalsArray = useCriminals()

        // init var to hold completed HTML
        let criminalsHTMLRep = ""

        // loop criminal array and call CriminalHTML for each element
        // add returned criminal HTML for each elemnt to criminalsHTMLRep  
        for (const criminal of criminalsArray) {
            criminalsHTMLRep += CriminalHTML(criminal)

        targetElement.innerHTML = `
        <h3>Glassdale Criminals</h3>

        <section>
        ${criminalsHTMLRep}
        </section>
        `
        }

    })
}