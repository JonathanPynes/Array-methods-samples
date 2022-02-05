const arrayToLocaleString = () => {
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
    console.log("Original array: \u20BF", array0)
    const idkWtfIsGoingOn = array0.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' });
    console.log("Somehow I couldn't get bitcoin to work here", idkWtfIsGoingOn)

}