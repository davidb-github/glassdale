/**
 *  CriminalHTML which renders individual criminal objects as HTML
 */

//  hang eventHub off of top level element in index.html.
 const eventHub = document.querySelector(".container")

export const CriminalHTML = (criminalObj) => {
    return `
        <section class="criminal__card" id="criminal-${criminalObj.id}">
            <h2 class="criminal__name">${criminalObj.name}</h2>
            <div class="criminal__age">Age: ${criminalObj.age}</div>
            <div class="criminal__conviction">Crime: ${criminalObj.conviction}</div>
            <div class="criminal__conviction">Term start: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</div>
            <div class="criminal__conviction">Term end: ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</div>
            <button id="associates--${criminalObj.id}">Associate Alibis</button>   
        </section>
    `
}

// listen for event
eventHub.addEventListener("click", (eventObj) => {
    // split button id string : <button id="associates--$">Associate Alibis</button>
    const [prefix, criminalId] = eventObj.target.id.split("--")
    
    // check if event obj target id begins with...
    if (eventObj.target.id.startsWith("associates--") ) {
     // debug
    //  console.log(prefix, criminalId)
    
    // build custom event
    const myCustomEvent = new CustomEvent("alibiButtonSelected", {
        detail: {
            criminalId: criminalId
        }
    })
        // dispatch custom event to eventHub
        eventHub.dispatchEvent(myCustomEvent)
    }
})