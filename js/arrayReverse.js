// Definition: The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
// Syntax: reverse()


const reversed = () => {
     const array = [1, 2, 3, 4, 5, 6, 7, "Macbook", "Elk", "GoPro", "SpaceX", "Negotiation", "RailGun", "Joe Rogan"]
     console.log("Original Array: ", array);
     let reversedArray = array.reverse();
     return console.log("Reversed: ", reversedArray);
    };


