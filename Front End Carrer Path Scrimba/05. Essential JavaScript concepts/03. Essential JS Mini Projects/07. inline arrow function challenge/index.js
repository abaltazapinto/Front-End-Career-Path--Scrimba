// arrow functions
const distanceTravelMiles = [267, 345, 234, 190, 299]

const distanceTravelKm = distanceTravelMiles.map((distance) => Math.round(distance * 1.6))

console.log("km:", distanceTravelKm)