const arraySort = () => {
    const array0 = [
        1,
        2,
        7,
        3,
        7,
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
    const sorted = array0.sort();
    console.log("functionless: array.sort() ", sorted);
    const sortedArrow = array0.sort((firstElement, secondElement) => {
        secondElement - firstElement;
    });
    console.log(
        "arrow function: array.sort((Ele1, Ele2) => { }) ",
        sortedArrow
    );
};
