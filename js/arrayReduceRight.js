const arrayReduceRight = () => {
    const array0 = [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        "Macbook",
        "Elk",
        "GoPro",
        "SpaceX",
        "Negotiation",
        "RailGun",
        "Joe",
        "Rogan",
        "Elk",
    ];
    console.log("Original array: ", array0);
    const reduceAccumulatorCurrentValue0 = array0.reduceRight(
        (accumulator, currentValue) => {
            return accumulator + currentValue;
        }
    );
    console.log(
        "reduceRight((accumulator, currentValue) => { }): ",
        reduceAccumulatorCurrentValue0
    );
    const reduceAccumulatorCurrentValueIndex = array0.reduceRight(
        (accumulator, currentValue, index) => {
            return accumulator + currentValue + index;
        }
    );
    console.log(
        "reduceRight((accumulator, currentValue, index) => { }): ",
        reduceAccumulatorCurrentValueIndex
    );
    const reduceAccumulatorCurrentValueIndexArray = array0.reduceRight(
        (accumulator, currentValue, index, array) => {
            return accumulator + currentValue + index + array;
        }
    );
    console.log(
        "reduceRight((accumulator, currentValue, index, array) => { }): ",
        reduceAccumulatorCurrentValueIndexArray
    );
    const reduceAccumulatorCurrentValueIndexArrayInitialValue =
        array0.reduceRight((accumulator, currentValue, index, array) => {
            return accumulator + currentValue + index;
        }, 100);
    console.log(
        "reduceRight((accumulator, currentValue, index) => { }, initialValue): ",
        reduceAccumulatorCurrentValueIndexArrayInitialValue
    );
};
