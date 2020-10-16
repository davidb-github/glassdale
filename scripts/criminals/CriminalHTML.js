/**
 *  CriminalHTML which renders individual criminal objects as HTML
 */
export const CriminalHTML = (criminalObj) => {

    return `
        <section class="criminal__card">
            <div class="criminal__name">${criminalObj.name}</div>
            <div class="criminal__age">${criminalObj.age}</div>
            <div class="criminal__conviction">${criminalObj.conviction}</div>
            <div class="criminal__conviction">${criminalObj.incarceration.start}</div>
            <div class="criminal__conviction">${criminalObj.incarceration.end}</div>
        </section>
    `
}