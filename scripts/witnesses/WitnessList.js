// import modules and components
import { getWitnessStatements, useWitnessStatements } from './WitnessProvider.js'
import { WitnessStatementHTML }                       from './WitnessHTML.js'

// hang eventHub off top level of index.html
const eventHub = document.querySelector(".container")

// target landing spot in index.html for the witness statements
const targetContainer = document.querySelector(".criminalsContainer")

// event listener to detect witness stmt button click and respond w/invoking WitnessList()
eventHub.addEventListener("witnessesClicked", () => {
    // debug
    // console.log("Witness Statements button click = witnessesClicked")

    WitnessesList()
})

// get w. statement data and render to DOM
const WitnessesList = () => {

    // get wit. statement data and pass to render as argument
    getWitnessStatements()
        .then(() => {
            const witnessesArray = useWitnessStatements()
            // debug
            // console.log(witnessesArray)
            render(witnessesArray)
        })


    // render function to build HTML and send to DOM
    const render = (witnessesArray) => {

        // init var to hold HTML
        let witnessHTML = ""

        // loop witnessesArray
        for (const witness of witnessesArray) {

            // build/append inv. witness HTML and store cumulative HTML before handing to DOM
            witnessHTML += WitnessStatementHTML(witness)

            // send finished HTML to DOM
            targetContainer.innerHTML = `
            <h3>Glassdale Witnesses</h3>
              <section class="witnessesList">
                ${witnessHTML}
              </section>
            `
        }
    }

}