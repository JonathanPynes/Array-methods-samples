const arraySome = () => {
    const array = [1, 2, 3, 4, 5, 6, 7, "Macbook", "Elk", "GoPro", "SpaceX", "Negotiation", "RailGun", "Joe Rogan"]
    console.log("Original array: ", array)
    const someElement = array.some((element) => {return element == "SpaceX"});
    console.log("array.some(element): ", someElement)
    const someElementIndex = array.some((element, index) => {return element == 7 && index > 3})
    console.log("array.some(element, index): ", someElementIndex)
    const someElementIndexArray = array.some((element, index, array) => {return element % 2 && index > 3 && Array.isArray(array)})
    console.log("array.some(element, index, array): ", someElementIndexArray)
}