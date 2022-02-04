const arrayUnshift = () => {
    const array0 =  [1, 2, 3, 4, 5, 6, 7, 8, 9, "Macbook", "Elk", "GoPro", "SpaceX", "Negotiation", "RailGun", "Joe", "Rogan", "Elk"];
    console.log("Original array: ", array0);
    const arrayUnshiftElement0 = array0.unshift("Scott Frost");
    console.log("array.unshift(element0)", array0, arrayUnshiftElement0)
    const arrayUnshiftElement1 = array0.unshift("Victor Davis Hanson", "Thomas Sowell");
    console.log("array.unshift(element0, element1", array0, arrayUnshiftElement1)
    const arrayUnshiftElementN = array0.unshift("I", "have", "used", "the", "same", "array", "the", "whole", "time");
    console.log("array.unshift(element0, element1, ... , elementN", array0, arrayUnshiftElementN)
}