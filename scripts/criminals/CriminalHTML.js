/**
 *  CriminalHTML which renders individual criminal objects as HTML
 */
export const CriminalHTML = (criminalObj) => {

    return `
        <section class="criminal__card">
            <h2 class="criminal__name">${criminalObj.name}</h2>
            <div class="criminal__age">Age: ${criminalObj.age}</div>
            <div class="criminal__conviction">Crime: ${criminalObj.conviction}</div>
            <div class="criminal__conviction">Term start: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</div>
            <div class="criminal__conviction">Term end: ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</div>
        </section>
    `
}