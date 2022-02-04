const find = () => {
    const array0 =  [1, 2, 3, 4, 5, 6, 7, 8, 9, "Macbook", "Elk", "GoPro", "SpaceX", "Negotiation", "RailGun", "Joe", "Rogan"];
    console.log("Original Array", array0);
    // function I am going to pass to find()
    const greaterThan5 = (x) => {return x > 5}
    const findIt = array0.find(greaterThan5)
    console.log("calling a testing function, find((element) => { }", findIt)
    const findItInline = array0.find(x => {return x.length == 3})
    console.log("Inline function, find((element) => { }", findItInline)
    const findElementIndex = array0.find((x, index) => {return x.length == 3 && index > 10})
    console.log("find((element, index) => { }", findElementIndex)
    const findElementIndexArray = array0.find((x, index, array) => {return array})
    console.log("find(element, index, array) => {return array}", findElementIndexArray)
}