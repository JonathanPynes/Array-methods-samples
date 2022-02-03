const forEach = () => {
    const array0 =  [1, 2, 3, 4, 5, 6, 7, 8, 9, "Macbook", "Elk", "GoPro", "SpaceX", "Negotiation", "RailGun", "Joe Rogan"];
    const array1 =  [1, 2, 3, 4, 5, 6, 7, 8, 9, "Macbook", "Elk", "GoPro", "SpaceX", "Negotiation", "RailGun", "Joe Rogan"];
    const array2 =  [1, 2, 3, 4, 5, 6, 7, 8, 9, "Macbook", "Elk", "GoPro", "SpaceX", "Negotiation", "RailGun", "Joe Rogan"];
    console.log("orignal array", array0)
    const arrayForEachElement = array0.forEach((element) => {element * 2});
    console.log("array.forEach((element) => { })", arrayForEachElement);
    const arrayForEachElementIndex = array1.forEach((element, index)=>{return element + " mapped" + " " + index});
    console.log("array.forEach((element, index) => { })", arrayForEachElementIndex);
    const arrayForEachElementIndexArray = array2.forEach((element, index, array)=>{return element + " mapped" + " " + index + " " +  array});
    console.log("array.forEach((element, index, array) => { })", arrayForEachElementIndexArray);
}