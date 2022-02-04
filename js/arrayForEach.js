const forEach = () => {
    const array0 =  [1, 2, 3, 4, 5, 6, 7, 8, 9, "Macbook", "Elk", "GoPro", "SpaceX", "Negotiation", "RailGun", "Joe Rogan"];
    const array1 =  [1, 2, 3, 4, 5, 6, 7, 8, 9, "Macbook", "Elk", "GoPro", "SpaceX", "Negotiation", "RailGun", "Joe Rogan"];
    const array2 =  [1, 2, 3, 4, 5, 6, 7, 8, 9, "Macbook", "Elk", "GoPro", "SpaceX", "Negotiation", "RailGun", "Joe Rogan"];
    console.log("orignal array", array0)
    console.log("array.forEach((element) => { })");
    const arrayForEachElement = array0.forEach((element) => {console.log(element)});
    console.log("array.forEach((element, index) => { })");
    const arrayForEachElementIndex = array1.forEach((element, index)=>{console.log(element + " forEach" + " " + index) });
    console.log("array.forEach((element, index, array) => { })");
    const arrayForEachElementIndexArray = array2.forEach((element, index, array)=>{console.log(element + " forEach" + " " + index + " ", array)});
}