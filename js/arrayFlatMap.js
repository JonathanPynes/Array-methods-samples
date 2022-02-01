const flatMap = () => {
    const nestNumbers = [1, 2, 3, [4, [5, 6, 7, 8,[9, 10, 11]]]];
    console.log("nestedNumbers", nestNumbers);
    const nestNumbers2 = [1, 2, 3, [4, [5, 6, 7, 8,[9, 10, 11]]]];
    const nestNumbers3 = [1, 2, 3, [4, [5, 6, 7, 8,[9, 10, 11]]]];
    const flatMapping = nestNumbers.flatMap((currentValue) => currentValue + 10);
    const flatMappingIndex = nestNumbers2.flatMap((currentValue, index) => currentValue + index);
    const flatMappingIndexArray = nestNumbers3.flatMap((currentValue, index, array) => currentValue + index + array);
    console.log("flatMap(currentValue)", flatMapping)
    console.log("flatMap(currentValue, index)", flatMappingIndex)
    console.log("flatMap(currentValue, index, array)", flatMappingIndexArray);
}