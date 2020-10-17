//  Officer HTML which renders individual officer objects as HTML
export const OfficerHTML = (officerObj) => {
    
    return `
    <section class="officer__card">
      <div class="officer__name">Name: ${officerObj.name}</div>
      <div class="officer__id">ID: ${officerObj.id}</div>
    </section>
    `
}