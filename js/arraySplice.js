const splice = () => {
    const array0 =  [1, 2, 3, 4, 5, 6, 7, 8, 9, "Macbook", "Elk", "GoPro", "SpaceX", "Negotiation", "RailGun", "Joe Rogan"];
    const array1 =  [1, 2, 3, 4, 5, 6, 7, 8, 9, "Macbook", "Elk", "GoPro", "SpaceX", "Negotiation", "RailGun", "Joe Rogan"];
    const array2 =  [1, 2, 3, 4, 5, 6, 7, 8, 9, "Macbook", "Elk", "GoPro", "SpaceX", "Negotiation", "RailGun", "Joe Rogan"];
    console.log("Original array: ", array0);
    const spliceStart = array0.splice(4);
    console.log("splice(start): ", spliceStart);
    console.log("modified array0: ", array0)
    const spliceStartDeleteCount = array1.splice(4, 3);
    console.log("splice(start, deleteCount): ", spliceStartDeleteCount)
    console.log("modified array1: ", array1)
    const spliceStartDeleteCountItemsToAdd = array2.splice(4, 3, "triple", "I", "am", "become", "death")
    console.log("splice(start, deleteCount, items to add): ", spliceStartDeleteCountItemsToAdd)
    console.log("modified array2: ", array2)
}