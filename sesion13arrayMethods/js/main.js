const data = [
    [
        "Israel",
        "Salinas Martínez"
    ],
    [
        "David",
        "Cermeño Moranchel"
    ],
    [
        "Charles",
        "Silva"
    ],
    [
        "Michael",
        "Villalba Sotelo"
    ]
];

function objectFromArray1(item) {
    const mentor = {
        name: item[0],
        lastName: item[1],
    };
    return mentor;
}

    const objectFromArray2 = item => ({
        name: item[0],
        lastName: item[1],
    });

  // const objectFromArray = item => ({ name: item[0], lastName: item[1] });

    const createMentorsArray = dataArray => {
        const mentorsArray = [];
        for (let i = 0; i < dataArray.length; i++) {
        let item = dataArray[i];
      // const mentor = objectFromArray1(item);
        const mentor = objectFromArray2(item);
        mentorsArray.push( mentor );
    }

    return mentorsArray;
    };

const result = createMentorsArray(data);

console.log(result);