/*Dado un string cualquiera ( por ejemplo "ajaicoiashdfoqwemoc" ) 
encontrar la cantidad de caracteres no repetidos usados en dicho string. Ejemplo:*/

//input:ajaicoiashdfoqwemoc
//output:13



// dado el siguiente array = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ]
// usar reduce para obtener la siguiente información:
// -Un array con aquellas personas que votaron
// -la edad promedio de todos los votantes
// -un array con aquellos votantes que votaron y queson menores a 30 años
// -la edad promedio de los no votantes
// getAverageAge(getNoVoters(votersArray)) 27.6
// -el porcentaje de votantes vs no votantes


let votersArray = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]

const getAverageAge = votersArray => {

    let totalAges = votersArray.reduce ((accum, current) =>{
        return accum + current.age
    },0);

    return totalAges/votersArray.length
}

getAverageAge(votersArray)

const getVoters = votersArray => {

    let voters = votersArray.reduce((accum, current)=>{
        return (current.voted)? accum.concat(current) : accum
    }, [])

    return voters
}

const getVotersBelow30 = votersArray => {

    let votersBelow30 = votersArray.reduce((accum, current)=>{
        if (current.age < 30){
            accum = accum.concat(current)
        }

        return accum
    }, [])

    return votersBelow30
}

const getNoVoters = votersArray => {

    let noVoters = votersArray.reduce((accum, current)=>{
        return (!current.voted)? accum.concat(current) : accum
    }, [])

    return noVoters
}

