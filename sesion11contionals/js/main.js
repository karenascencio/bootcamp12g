/*
    crear una función que me diga si un string comienza con vocal, consonante, número o un caracter especial

1.Tomar un string y guardarlo en una variable
2. Tomar la posición 0 y compararla en un switch 


*/

/*
    input: anaconda
    output: true

    input: belzeebub
    output: true

    input: koder
    output: false

    input: cerveza
    output: false



*/


/*function isUpperToEight(string){

    var UpperToEight

if (string.length >= 8){
    UpperToEight = true
}
else{
    UpperToEight = false
}

    return UpperToEight
}

var string = prompt("Please type any word to check if it is upper to eight")

isUpperToEight(string)*/


function sameFirsLast (string){
    var result
    var end = string.length-1

    if (string.charAt(0) == string.charAt(end)){
        result = true
    }
    else{
        result = false
    }

    return result
}

var string = prompt("Please, type any string")

sameFirsLast(string)


//function startsWith(string){