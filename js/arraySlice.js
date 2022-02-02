const slice = () => {
    const array =  [1, 2, 3, 4, 5, 6, 7, "Macbook", "Elk", "GoPro", "SpaceX", "Negotiation", "RailGun", "Joe Rogan"];
    console.log("Original Array: ", array);
    const sliceEmpty = array.slice();
    console.log("Slice(): ", sliceEmpty)
    const sliceStart = array.slice(8);
    console.log("slice(start): ", sliceStart)
    const sliceStartEnd = array.slice(4, 9);
    console.log("slice(start, end): ", sliceStartEnd)
}