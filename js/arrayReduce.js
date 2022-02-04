const arrayReduce = () => {
    const array0 =  [1, 2, 3, 4, 5, 6, 7, 8, 9];
    console.log("Original array: ", array0)
    const reducer0 = (previousValue, currentValue) => previousValue + currentValue;
    const reduced0 = array0.reduce(reducer0)
    console.log("array.reduce(reducer0): ", reducer0, reduced0)
    const reducer1 = (previousValue, currentValue, currentIndex) => previousValue + currentValue + currentIndex;
    const reduced1 = array0.reduce(reducer1)
    console.log("array.reduce(reducer1): ", reducer1, reduced1)
    const reducer2 = (previousValue, currentValue, currentIndex, array) => previousValue + currentValue + currentIndex + array;
    const reduced2 = array0.reduce(reducer2)
    console.log("array.reduce(reduced2): ", reducer2, reduced2)
    const reducer3 = (previousValue, currentValue, currentIndex, array) => previousValue + currentValue + currentIndex;
    const reduced3 = array0.reduce(reducer3, 100)
    console.log("array.reduce(reduced3, initialValue): ", reducer3, reduced3)
}