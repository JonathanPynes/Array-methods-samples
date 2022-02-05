const arrayAt = () => {
    const array = [1, 2, 3, 4, 5, 6, 7, "Macbook", "Elk", "GoPro", "SpaceX", "Negotiation", "RailGun", "Joe Rogan"]
    console.log("Original array: ", array)
    const arrayAt = array.at(-1);
    console.log("at(-1): ", arrayAt)
}