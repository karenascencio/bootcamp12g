let songsData = [
    {
        name: "Kashmir",
        band: "Led Zeppelin",
        releaseYear: "1980",
        statistics: {
            likes: 20000,
            reproductions: 8000,
        }
    },
    {
        name: "Smells Like Teen Spirit",
        band: "Nirvana",
        releaseYear: "1989",
        statistics: {
            likes: 25000,
            reproductions: 100000,
        }
    }, {
        name: "So What",
        band: "Metallica",
        releaseYear: "1990",
        statistics: {
            likes: 12000,
            reproductions: 95000,
        }
    }, {
        name: "Nothing Else Matters",
        band: "Metallica",
        releaseYear: "1992",
        statistics: {
            likes: 128000,
            reproductions: 915000,
        }
    }, {
        name: "Daze",
        band: "Poets of the Fall",
        releaseYear: "2014",
        statistics: {
            likes: 3548413,
            reproductions: 87095138,
        }
    }, {
        name: "The Sweet Scape",
        band: "Poets of the Fall",
        releaseYear: "2018",
        statistics: {
            likes: 26268856,
            reproductions: 2424568,
        }
    }
]

/*agrupar únicamente los nombres de las bandas, sin repeticiones*/

let bands = arrayBands => {
    let bandsNames = [];
    arrayBands.forEach(item => {
        if (!bandsNames.includes(item.band)) {
            bandsNames.push(item.band);
        }
    });
    return bandsNames;
}

//bands(songsData)

/*
Agrupar las canciones de cada banda
[
{
    band: "Poets of the Fall"
    songs:[
        "The Sweet Scape",
        "Daze"
    ]
},
{
    band: "Poets of the Fall"
    songs:[
        "The Sweet Scape",
        "Daze"
    ]
},
]
*/
let songsOfBands = arrayBands => {
    let songContainer = [];
    let bandsList = bands(arrayBands);

    bandsList.forEach(bandElement => {
        let songsArray = [];
        arrayBands.forEach(item => {
            if (bandElement === item.band) {
                songsArray.push(item.name);
            }
        });
        let object = { band: bandElement, songs: songsArray }
        songContainer.push(object);
    });

    console.log(songContainer);
}

//songsOfBands(songsData);


/*
saber cuál es la canción con más likes
( nombre de la canción y nombre de la banda)
  */

let mostLikedSong = arraySongs => {
    let unsortedLikedNumbers = []
    

    arraySongs.forEach(item => {
        unsortedLikedNumbers.push(item.statistics.likes)
    });

    let sortedLikedNumbers = unsortedLikedNumbers.sort(function(a,b){return b-a})
    let mostLikedNumber = sortedLikedNumbers[0]

    arraySongs.forEach(item =>{
        if (item.statistics.likes === mostLikedNumber){
            console.log("the song with more likes is " + item.name + " by " + item.band)
        }
    });
}



/*saber cuál es la canción con más reproducciones
( nombre de la canción y nombre de la banda)
*/

let mostStreamedSong = arraySongs => {
    let unsortedStreamedNumbers = []
    

    arraySongs.forEach(item => {
        unsortedStreamedNumbers.push(item.statistics.reproductions)
    });

    let sortedStreamedNumbers = unsortedStreamedNumbers.sort(function(a,b){return b-a})
    let mostStreamedNumber = sortedStreamedNumbers[0]

    arraySongs.forEach(item =>{
        if (item.statistics.reproductions === mostStreamedNumber){
            console.log("the song with more reproductions is " + item.name + " by " + item.band)
        }
    });
}