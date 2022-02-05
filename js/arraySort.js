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
        "zoo",
        "yoyo",
        "appleJack",
        { key: "Macbook", grade: 2 },
        { key: "Elk", grade: 32  },
        { key: "GoPro", grade: 90  },
        { key: "SpaceX", grade: 22  },
        { key: "Negotiation", grade: 98  },
        { key: "RailGun", grade: 89  },
        { key: "Joe", grade: 22  },
        { key: "Rogan", grade: 12  },
        { key: "Elk", grade: 11  },
    ];
    console.log("Original array: ", array0);
    const sorted = array0.sort();
    console.log("functionless: array.sort() ", sorted);
    let sortFunction = (firstElement, secondElement) => {
        if(firstElement.key < secondElement.key) { return -1; }
        if(firstElement.key > secondElement.key) { return 1; }
        return 0;
       }
    const sortedArrow = array0.sort(sortFunction)
    console.log(
        "arrow function: array.sort(sortFunction) ", "sortFunction: ", sortFunction,
        sortedArrow
    );
};
