const entries = () => {
const array = [1, 2, 3, 4, 5, 6, 7, "Macbook", "Elk", "GoPro", "SpaceX", "Negotiation", "RailGun", "Joe Rogan"]
const keyValuePairs = array.entries();
for (let e of keyValuePairs) {
    console.log("Entries, key/value pairs", e)
}
}