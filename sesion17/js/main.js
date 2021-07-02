let dataArray = [
    [
        "Israel",
        "Salinas Martinez",
        "HTML:9",
        "CSS:8",
        "JS:7"
    ],
    [
        "David",
        "Cermeño Monrachel",
        "HTML:9",
        "CSS:8",
        "JS:9"
    ],
    [
        "Charles",
        "Silva",
        "HTML:8",
        "CSS:8",
        "JS:10"
    ],
    [
        "Michael",
        "Villalba Sotelo",
        "HTML:9",
        "CSS:10",
        "JS:7"
    ]
]

function Alumni (name, lastName, html, css, jS){
    this.name=name  
    this.lastName=lastName
    this.html=html
    this.css=css
    this.jS=jS
    this.averageScore = function ({html, css, jS}) {
        let total = html + css + jS
        return total/3
    }

    function getnumbers (string){
        let number = [...string.].filter
    }
}

const getAlumni = dataArray => {
    let alumniArray = dataArray.map()
}