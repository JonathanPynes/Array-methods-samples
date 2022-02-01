const flat = () => {
    const nestArray = ["I", "am", "nested", ["Maybe", ["one", "day", "someone", "will",["bring", "me", "back"]]]];
    const nestArray1 = ["I", "am", "nested", ["Maybe", ["one", "day", "someone", "will",["bring", "me", "back"]]]];
    console.log("Original nested Array", nestArray1)
    const flat = nestArray.flat()
    console.log("flat(): ", flat)
    const flatDepth = nestArray1.flat(Infinity)
    return console.log("flat(Infinity):", flatDepth)
}