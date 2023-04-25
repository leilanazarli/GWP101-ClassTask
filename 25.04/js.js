function anagrams(s1, s2) {
    return s1.toLowerCase().split("").sort().join("") === s2.toLowerCase().split("").sort().join("");
}
console.log(anagrams("Sevil","Evils"));


// function maxChar(words){
    // let max = 0;
    // let mostRepeatedWord = '';
    

// }
// console.log(maxChar('ilfattdtt'));
