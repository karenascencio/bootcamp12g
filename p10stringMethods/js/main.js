/*  Comparar 2 strings, y determinar cuál de ambos es el más largo
input: "string 1", "some larger string"
output: "el string { string } es el más largo"

Thinking behind by steps:

The best way to do this exercise is taking one length with the second length and 
then comparing them. For this we have to store wichever the result is in
a variable to finally return it.

1. Get the first string and store it in a variable
2. Get the second string and store it too in another variable
3. Create a variable to store the result of the comparison
4. Compare the first variable with the second one using a string method, if 
it is larger, store a console log string that says that the first string is larger.
5. Repeat the last step by reverting the condition.
6. If the comparison doesn't fit in the past two conditions, make a third one that 
says the last option: they're both the same length.
7. Return the result.
*/


function comparingStringsLength(stringOne, stringTwo){

    var result
    
    if (stringOne.length > stringTwo.length){
        result=console.log("The string " + stringOne + " is the largest")
    }
    
    else if (stringTwo.length > stringOne.length){
        result=console.log("The string " + stringTwo + " is the largest")
    }
    
    else{
        result=console.log("They're both same length")
    }
    return result
    }
    
    var stringOne = prompt("Please, type one string")
    var stringTwo = prompt("now, type the second string to compare which is largest")
    
    comparingStringsLength(stringOne, stringTwo);




/*ejercicio 2: Crear un nuevo string
( deducir lo que se debe hacer con base en el input y el output )
input: "a very large string"
output: "A VeRy lArGe sTrInG"
input: "abcdefg"
output:"AbCdEfG"

1. Define what the problems requires: whichever letter is in a pair
position, caps, otherwise, lower case.
2. For this I need to get the position and the value of the position, so
that's why I need an array.


*/

function strangeUpperCasing (string){

    var normalString = string.split("")
    var strangeUpperCaseString = []
    var result
    
    for (i=0; i<=normalString.length - 1; i++){
        if (i % 2 == 0) {
            strangeUpperCaseString.push(normalString[i].toUpperCase())    
        }
        else {
            strangeUpperCaseString.push(normalString[i].toLowerCase())
        }
    }
    
    result = console.log(strangeUpperCaseString.join(''))
    
    return result;
    }
    
    var string = prompt("Please type any string")
    
    strangeUpperCasing(string)



/*ejercicio 3: Crear un nuevo string
( deducir lo que se debe hacer con base en el input y el output )
input:"Kodemia"
output:"aimedoK"*/

function backwardsString (forwardsString){
    var result
    var stringInReverse = []
        
    for (i = forwardsString.length - 1; i >= 0; i--){
        stringInReverse.push(forwardsString[i])
        }
        result = console.log(stringInReverse.join(''))
        return result
    }
    
    var forwardsString = prompt("Please, type any string")
    
    backwardsString(forwardsString)