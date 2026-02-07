function formatWord(word){
  let formatedWord = ""
  for (let index = 0; index < word.length; index++) {
    if (index==0) {
      formatedWord +=word[index].toUpperCase();
    }else{
      formatedWord += word[index];
    }
  }
  return formatedWord;
}
let x=10
function formatingSentences(sentence){
  let originalSentence = sentence.split(" ");
  let formattedSentence = [];
  for (let i = 0; i < originalSentence.length; i++) {
    if (i==0) {
      formattedSentence.push(formatWord(originalSentence[i]))
    }else if(originalSentence[i][originalSentence[i].length-1]=="." && i+1<originalSentence.length){
      formattedSentence.push(originalSentence[i])
      originalSentence[i+1]=formatWord(originalSentence[i+1]);
    }else{
      formattedSentence.push(originalSentence[i]);
    }
  }
  return formattedSentence.join(" ");
}
let str= "this is a long sentence written in a rushed way. it starts with lowercase words and after every full stop the next word should be capitalized. sometimes the sentence keeps going for a while and people forget to format it properly. this makes it a good test case for your function.";
console.log(formatingSentences(str))
