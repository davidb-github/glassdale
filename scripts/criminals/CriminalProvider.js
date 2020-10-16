let criminals = [];

// return copy of criminals array
export const useCriminals = () => {
    return criminals.slice();
}

// fetch/format data and populate criminals array
export const getCriminals = () => {
    return fetch("https://criminals.glassdale.us/criminals")
    .then(response => response.json())
    .then (
        parsedCriminals => {
            console.table(parsedCriminals)
            criminals = parsedCriminals
        }
    )
}