// init var to hold officer array built by getOfficers()
let officers = []

// return copy of officers array
export const useOfficers = () => {
    return officers.slice()
}

// fetch officer data and populate officers array
export const getOfficers = () => {
    return fetch("https://criminals.glassdale.us/officers")
        .then(response => response.json())
        .then(
            parsedOfficers => {
                // console.table(parsedOfficers)
                officers = parsedOfficers
            }
        )
}