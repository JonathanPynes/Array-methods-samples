const arrayIsArray = () => {
    const array0 = ["Macbook", "Elk", "GoPro", "SpaceX", "Negotiation", "RailGun", "Joe Rogan"];
    console.log("Original array: ", array0);
    const check = Array.isArray(array0);
    console.log("Is array0 an array?: ", check);
    const notAnArray = "not an array, I am a string";
    console.log("notAnArray: ", notAnArray);
    const checkNot = Array.isArray(notAnArray);
    console.log("Is notAnArray not an array?: ", checkNot);

}