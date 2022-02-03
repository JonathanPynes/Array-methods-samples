const map = () => {
    const array0 =  [1, 2, 3, 4, 5, 6, 7, 8, 9, "Macbook", "Elk", "GoPro", "SpaceX", "Negotiation", "RailGun", "Joe Rogan"];
    const array1 =  [1, 2, 3, 4, 5, 6, 7, 8, 9, "Macbook", "Elk", "GoPro", "SpaceX", "Negotiation", "RailGun", "Joe Rogan"];
    const array2 =  [1, 2, 3, 4, 5, 6, 7, 8, 9, "Macbook", "Elk", "GoPro", "SpaceX", "Negotiation", "RailGun", "Joe Rogan"];
    console.log("orignal array", array0)
    const arrayMapElement = array0.map((element) => {return element + " mapped"});
    console.log("array.map((element) => { })", arrayMapElement);
    const arrayMapElementIndex = array1.map((element, index)=>{return element + " mapped" + " " + index});
    console.log("array.map((element, index) => { })", arrayMapElementIndex);
    const arrayMapElementIndexArray = array2.map((element, index, array)=>{return element + " mapped" + " " + index + " " +  array});
    console.log("array.map((element, index, array) => { })", arrayMapElementIndexArray);
}