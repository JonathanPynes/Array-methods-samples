const copyWithin = () => {
    const array1 = [1, 2, 3, 4, 5, 6, 7, "Macbook", "Elk", "GoPro", "SpaceX", "Negotiation", "RailGun", "Joe Rogan"]
    console.log("Original Array: ", array1);
    const array2 = [1, 2, 3, 4, 5, 6, 7, "Macbook", "Elk", "GoPro", "SpaceX", "Negotiation", "RailGun", "Joe Rogan"]
    const array3 = [1, 2, 3, 4, 5, 6, 7, "Macbook", "Elk", "GoPro", "SpaceX", "Negotiation", "RailGun", "Joe Rogan"]
    const copyWithinTarget = array1.copyWithin(3);
    const copyWithinTargetStart = array2.copyWithin(3, 1);
    const copyWithinTargetStartEnd =  array3.copyWithin(3, 1, 5);
    return console.log("copyWithinTarget(3): ", copyWithinTarget, "copyWithinTargetStart(3,1): ", copyWithinTargetStart, "copyWithinTargetStartEnd(3,1,5): ", copyWithinTargetStartEnd);
}