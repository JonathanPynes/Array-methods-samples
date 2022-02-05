const arrayOf = () => {
    const string =  "1, 2, 3, 4, 5, 6, 7, 8, 9, Macbook, Elk, GoPro, SpaceX, Negotiation, RailGun, Joe, Rogan, Elk";
    console.log("Original string: ", string)
    const stringToArray = Array.of(string);
    console.log("arrayOf(string): ", stringToArray)
}