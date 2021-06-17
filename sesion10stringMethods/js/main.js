
function pairsToUpperCase (name, lastName){


    let nameLower = name.toLowerCase();
    let lastUpper = lastName.toUpperCase();
    let result = alert(nameLower + ' '+ lastUpper);
    return result;
}


let name = prompt("Can you please give me your name?");
let lastName = prompt ("Can you give me your second name?");

pairsToUpperCase(name, lastName);