const valuesFunc = () => {
    const array = [1, 2, 3, 4, 5, 6, 7, "Macbook", "Elk", "GoPro", "SpaceX", "Negotiation", "RailGun", "Joe Rogan"]
    console.log("Original array: ", array)
    const valuePairs = array.values();
    for (let value of valuePairs) {
        console.log("Value: ", value)
    }
}