const arrayFindIndex = () => {
    const array0 =  [1, 2, 3, 4, 5, 6, 7, 8, 9, "Macbook", "Elk", "GoPro", "SpaceX", "Negotiation", "RailGun", "Joe", "Rogan"];
    console.log("Original array", array0);
    const findIndexElement = array0.findIndex((element) => {return element.length > 3})
    console.log("findIndex((element) => { }: ", findIndexElement)
    const findIndexElementIndex = array0.findIndex((element, index) => {return element.length == 3 && index > 10})
    console.log("findIndex((element, index) => { }: ", findIndexElementIndex)
    const findIndexElementIndexArray = array0.findIndex((element, index, array) => {return array})
    console.log("findIndex((element, index, array) => {return array}: ", findIndexElementIndexArray)

}