const arrayIndexOf = () => {
    const array0 =  [1, 2, 3, 4, 5, 6, 7, 8, 9, "Macbook", "Elk", "GoPro", "SpaceX", "Negotiation", "RailGun", "Joe", "Rogan", "Elk"];
    console.log("Original array: ", array0);
    const indexOfSearchElement = array0.indexOf("Elk");
    console.log("indexOf(searchElement)", indexOfSearchElement);
    const indexOfSearchElementFromIndex = array0.indexOf("Elk", 11);
    console.log("indexOf(searchElement, fromIndex): ", indexOfSearchElementFromIndex)
}