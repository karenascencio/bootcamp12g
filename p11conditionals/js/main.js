/*1.
Input: kodemia doceava generación
Output: 13
Input: el pájaro dev
Output: 5*/

function howManyVowels (string){
    var vowelsArray = string.match(/[aeiou]/ig)

    return vowelsArray.length
}

var string = prompt("Lets count how many vowels does your string have")

howManyVowels(string)


/*2.
Input: Más cuerdo es, el que acepta su propia locura
Output: 9
Input: Me volví loco, con largos intervalos de horrible cordura
Output: 9*/

function notALetter(string){

    var onlyLetters = string.match(/[a-z]/ig)

    return string.length - onlyLetters.length
}

var string = prompt("Let's count how many NOT LETTERS we have in any string, so type it")
notALetter(string)


/*3.
Input:Sé verla al revés
Output: true
Input: La mañana es fría
Output: false
Input:Yo hago yoga hoy
Output: true
Input: Y natación mañana
Output: false*/

function isPalindrome (string){

    var backwardsString = ""
    
    
    for (i=string.length-1; i>=0; i--){
        backwardsString += string.charAt(i)
    }
    
    var backwardsToCompare = backwardsString.split(" ").join("")
    var inputString = string.split(" ").join("")
    
    
    
        return backwardsToCompare === inputString? "true" : "false"
    }
    
    var string = prompt("Is your string a Palindrome? Type it to check:")
    isPalindrome(string)


/*4.
Crear una función que evalúe un string con las siguientes pruebas:
Tener al menos 8 carácteres
Tener al menos un número
Tener al menos una mayúscula
Devolver true si el string cumple con las reglas, o imprimir en 
consola la regla o reglas que no se están cumpliendo*/







/*5.
crear una función que genere un string con "n" caracteres aleatorios,  con la única condición de que no haya caracteres repetidos en el string
ejemplo correcto:
input: 10
output: asdfqwerzx
*/

/*
-creamos una variable para guardar la cadena resultante
-obtener el número de caracteres
-definir un rango numérico que determine el código asccii de los caracteres que estaran disponibles
-obtener de forma aleatoria algún número dentro de ese rango
-obtener el caracter correspondiente al número seleccionado
-almacenamos en una variable el caracter obtenido

-evaluamos si el caracter existe en la cadena de resultado
--si el caracter no existe, lo agregamos a la cadena de resultado
--si el caracter existe en la cadena, debemos generar un nuevo caracter
-repetir n veces
-devolver la cadena de resultado
*/

//var n = parseInt( prompt("Qué longitud debe tener el string? "))

/*
function createRandomString ( charactersQty ){
    var result = ""
    for( i = 0; i < charactersQty; i++ ){
        result += evaluateCharacter( result )
    }
    console.log('result ', result)
    console.log('length ', result.length )
}
*/


function evaluateCharacter( completeString ){
    var characterCode = Math.floor( Math.random() * (91 - 48) + 48 )
    var character = String.fromCharCode( characterCode )
    return !completeString.includes(character) ? character : evaluateCharacter( completeString )
}

function createRandomString ( charactersQty ){
    var result = ""
    while( result.length < charactersQty ){
        result += evaluateCharacter(result)
    }
    console.log('result ', result)
    console.log('length ', result.length )
}


var charactersQty = prompt("Please enter how many random characters you need (up to 43)")
createRandomString(charactersQty)