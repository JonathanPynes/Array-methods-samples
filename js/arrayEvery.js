const arrayEvery = () => {
    const array = [1, 2, 3, 4, 5, 6, 7]
    console.log("Original array: ", array)
    const everyElement = array.every(element => element > 0)
    console.log("array.every(element => element.length < 100): ", everyElement)
    const everyElementIndex = array.every((element, index) => element > 3 && index >= 0)
    console.log("array.every((element, index) => element > 3 && index > 4):", everyElementIndex)
    const everyElementIndexArray = array.every((element, index, array) => element > 3 && index > 4 && Array.isArray(array))
    console.log("array.every((element, index, array) => element > 3 && index > 4 && Array.isArray(array): ", everyElementIndexArray)
}