//Haven't complete yet

let wordSets = [
    ["water", "bed", "table"],
    ["heart", "bell", "phone"],
    ["book", "life", "tree"]
];
  
let getQuestion = () => {
    const words = wordSets[Math.floor(Math.random() * wordSets.length)];
    const commonWord = findWord(words);
    return `"${words[0]}", "${words[1]}", "${words[2]}", "${commonWord}"`;
}
  
let findWord = (words) => {
    for (let i = 0; i < words[0].length; i++) {
      
    }
    return;
}

console.log(getQuestion())

