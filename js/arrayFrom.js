const arrayFrom = () => {
    const string =  "1, 2, 3, 4, 5, 6, 7, 8, 9, Macbook, Elk, GoPro, SpaceX, Negotiation, RailGun, Joe, Rogan, Elk";
    console.log("Original string: ", string)
    const from = Array.from(string)
    console.log("Array.from(string): ", from)
    const fromFunction = Array.from(string, (element) => {return element + 5})
    console.log("Array.from(arrayLike, (element) => {return element + 5} :   ", fromFunction)
    const fromFunction2 = Array.from(string, (element, index) => {return element + index})
    console.log("Array.from(arrayLike, (element, index) => {return element + index} ", fromFunction2)
}