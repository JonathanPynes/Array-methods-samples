const arrayIncludes = () => {
    const array = [1, 2, 3, 4, 5, 6, 7, "Macbook", "Elk", "GoPro", "SpaceX", "Negotiation", "RailGun", "Joe Rogan"]
    console.log("Original array", array)
    const includesSearchElement = array.includes("Macbook")
    console.log("array.includes('Macbook'): ", includesSearchElement)
    const includesSearchElementFromIndex = array.includes("Macbook", 13)
    console.log("array.includes('Macbook', fromIndex(13)): ", includesSearchElementFromIndex)
}