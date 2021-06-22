/*
    crear una función que permita indicar la cantidad de koders a guardar, que pida tantos nombres de koders como se indique, y al final imprima el nombre del koder y su número asignado 

    Input:"Karen", "Xoch", "Wendy"
    output:
    Koder 1:"Karen",
    Koder 2:"Xoch",
    Koder 3:"Wendy"
*/

let qtyNames = parseInt(prompt("How many names are you going to add?"))

function listNames (qtyNames){    

    let namesArray = []
    let alumniName

for (i=0; i<qtyNames; i++){
    alumniName = prompt("Please, add the name you want to add")
    namesArray.push(alumniName)
}

    console.clear()

for (i=0; i<namesArray.length; i++){
    console.log(`Koder ${i+1}: ${namesArray[i]}`)
}
}

//listNames(qtyNames)

let namesArray = ["Karen", "Mike", "Gerry"]
let secondNamesArray = ["Ascencio", "Marquez", "Jimenez"]
let thirdNamesArray = ["Preciado", "Garcia", "Corchado"]


function whichNumberInList (){
let number = parseInt(prompt("Please type any number to get the Koder list position"))

console.log(namesArray[number-1]) 

}

function alphabeticalSorting () {
let sortedArray = namesArray.sort()
for (i=0; i<namesArray.length; i++){
    console.log(sortedArray[i])
}
}

function namesInitials (){
    console.log(`${namesArray[0].charAt(0)}. ${secondNamesArray[0].charAt(0)}. ${thirdNamesArray[0].charAt(0)}.`)
    console.log(`${namesArray[1].charAt(0)}. ${secondNamesArray[1].charAt(0)}. ${thirdNamesArray[1].charAt(0)}.`)
    console.log(`${namesArray[2].charAt(0)}. ${secondNamesArray[2].charAt(0)}. ${thirdNamesArray[2].charAt(0)}.`)
}


//whichNumberInList()
//alphabeticalSorting()
//namesInitials()