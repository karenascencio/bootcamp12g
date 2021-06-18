/*1.
Input: kodemia doceava generación
Output: 13
Input: el pájaro dev
Output: 5*/




/*2.
Input: Más cuerdo es, el que acepta su propia locura
Output: 9
Input: Me volví loco, con largos intervalos de horrible cordura
Output: 9*/



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
Tener al menos una mayúscula*/