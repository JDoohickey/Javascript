function countBs(str){
  let count = 0;
  for (let index = 0; index < str.length; index++) {
    if (str[index]=="B") {
      count++;
    }

  }

  return count;
}



function countChar(str,char){
  let count = 0;
  for (let index = 0; index < str.length; index++) {
    if (str[index]==char) {
      count++;
    }

  }

  return count;
}

let sentence ="My name is BumBle Bee, I am from the Planet Bluble."

console.log(countChar(sentence,"e"));
