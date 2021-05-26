const sentence = prompt (`Please, type a word or a sentence to separate the vowels from the consonants:`);
vowelsFromConsonants(sentence);


function vowelsFromConsonants (sentence){


const vowels = [];
const consonants = [];
const arraySentence = sentence.split(' ').join('');

for (let i = 0; i <= arraySentence.length; i++){

if (arraySentence[i] === 'a' || arraySentence[i] === 'e' || arraySentence[i] === 'i' || arraySentence[i] === 'o' || arraySentence[i] === 'u'){
  vowels.push(arraySentence[i]);
}
else {
  consonants.push(arraySentence[i]);
}

}

return (`Here are the vowels: ${vowels}. And the consonants are: ${consonants}`); 
}