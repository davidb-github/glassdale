// init var to hold FETCH-ed witness data
let witnesses = [];

// return copy of witnesses array
export const useWitnessStatements =  () => {
    return witnesses.slice();
}

// fetch witness data from API/witnesses, parse and populate witnesses array
export const getWitnessStatements = () => {
    return fetch("https://criminals.glassdale.us/witnesses")
    .then(response => response.json())
    .then(parsedWitnessStatements => {
        // debug
        // console.table(parsedWitnessStatements)
      witnesses = parsedWitnessStatements
        }
    )
}