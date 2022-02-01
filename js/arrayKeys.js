const keysFunc = () => {
const array = [1, 2, 3, 4, 5, 6, 7, "Macbook", "Elk", "GoPro", "SpaceX", "Negotiation", "RailGun", "Joe Rogan"]
console.log("Original Array: ", array)
const keyValues = array.keys()
for (let key of keyValues) {
    console.log("Key: ", key)
}
}