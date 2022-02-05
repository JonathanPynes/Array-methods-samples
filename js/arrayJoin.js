const arrayJoin = () => {
    const array0 = ["Macbook", "Elk", "GoPro", "SpaceX", "Negotiation", "RailGun", "Joe Rogan"];
    const array1 = ["Macbook", "Elk", "GoPro", "SpaceX", "Negotiation", "RailGun", "Joe Rogan"];
    console.log("Original array: ", array0)
    const joined = array0.join()
    console.log("join(): ", joined)
    const joinSeparator = array1.join(" \u20BF")
    console.log("join(','): ", joinSeparator)

}