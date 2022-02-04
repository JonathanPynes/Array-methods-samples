const arrayLastIndexOf = () => {
    const array0 =  [1, 2, 3, 4, 5, 6, 7, 8, 9, "Macbook", "Elk", "GoPro", "SpaceX", "Negotiation", "RailGun", "Joe", "Rogan", "Elk"];
    console.log("Original array", array0);
    const lastIndexOfSearchElement = array0.lastIndexOf("Elk");
    console.log("lastIndexOf(searchElement): ", lastIndexOfSearchElement);
    const lastIndexOfSearchElementFromIndex = array0.lastIndexOf("Elk", -2);
    console.log("lastIndexOf(searchElement, fromIndex): ", lastIndexOfSearchElementFromIndex);
}