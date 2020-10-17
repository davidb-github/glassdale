// init var to hold convictions array built by getConvictions()
let convictions = []

// return copy of convictions array
export const useConvictions = () => {
    return convictions.slice()
}

// fetch conviction data and populate convictions array
export const getConvictions = () => {
    return fetch("https://criminals.glassdale.us/crimes")
        .then(response => response.json())
        .then (
            parsedConvictions => {
                convictions = parsedConvictions
            }
        )
}