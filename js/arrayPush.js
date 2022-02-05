const arrayPush = () => {
    const array = ["mostly", "empty"]
    console.log("Original array: ", array)
    const string =  "1, 2, 3, 4, 5, 6, 7, 8, 9, Macbook, Elk, GoPro, SpaceX, Negotiation, RailGun, Joe, Rogan, Elk";
    console.log("String: ", string)
    const pushedTo = array.push(string);
    console.log("array.push(string): ", pushedTo)
    console.log("Mutated array: ", array)
}