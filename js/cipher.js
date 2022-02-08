
function reverse(firstLetter, lastLetter){
  return lastLetter + firstLetter;
}

function reverseWord(str){
  let reverse = [];
  for (var i = str.length; i >= 0; i--) {
    let letter = str.charAt(i);
    reverse.push(letter);
    
  }
  let final = "";
    for (var a in reverse)
    {
        var l = reverse[a];
        if (l !=",") {
        final = final + l;
      }
    }
  return(final);

}

function cipher(word){
    let newWord = word[0].toUpperCase () +  word.slice(1) + "";
    let firstLetter = word[0];
    let lastLetter = word[word.length-1]

    let cipher = word + reverse(firstLetter,lastLetter).toUpperCase();
    return(cipher);
}
