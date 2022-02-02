const fill = () => {
    const array0 =  [1, 2, 3, 4, 5, 6, 7, "Macbook", "Elk", "GoPro", "SpaceX", "Negotiation", "RailGun", "Joe Rogan"];
    const array1 =  [1, 2, 3, 4, 5, 6, 7, "Macbook", "Elk", "GoPro", "SpaceX", "Negotiation", "RailGun", "Joe Rogan"];
    const array2 =  [1, 2, 3, 4, 5, 6, 7, "Macbook", "Elk", "GoPro", "SpaceX", "Negotiation", "RailGun", "Joe Rogan"];
    console.log("Original Array: ", array0);
    const fillValue = array0.fill(":)");
    console.log("Fill(Value): ", fillValue)
    const fillValueStart = array1.fill(":)", 4);
    console.log("Fill(Value, Start): ", fillValueStart)
    const fillValueStartEnd = array2.fill(":)", 3, 9)
    console.log("Fill(Value, Start, End: ", fillValueStartEnd)

}