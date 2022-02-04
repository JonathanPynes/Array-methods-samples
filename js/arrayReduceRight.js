const arrayReduceRight = () => {
    const array0 = [1, 2, 3, 4, 5, 6, 7, 8, 9, "Macbook", "Elk", "GoPro", "SpaceX", "Negotiation", "RailGun", "Joe", "Rogan", "Elk"];
    console.log("Original array: ", array0);
    const reduceAccumulatorCurrentValue0 = array0.reduceRight((accumulator, currentValue) => {return accumulator + currentValue});
    console.log("reduceRight((accumulator, currentValue) => { }): ", reduceAccumulatorCurrentValue0)
    const reduceAccumulatorCurrentValue1 = array0.reduceRight((accumulator, currentValue, index) => {return accumulator + currentValue + index});
    console.log("reduceRight((accumulator, currentValue, index) => { }): ", reduceAccumulatorCurrentValue1)

}