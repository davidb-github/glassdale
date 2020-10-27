
// build HTML for indv. witness/statement
export const WitnessStatementHTML = (witness) => {
    return `
        <div class="witness">
          <h5>${witness.name}</h5>
          <p>Statement: ${witness.statements}</p>
        </div>
     `
  }