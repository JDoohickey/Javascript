function minimum(x,y){
  if (x>y) {
    return `${y} is the minimum.`;
  }else if(x<y){
    return `${x} is the minimum`;
  }else{
    return `the two numbers are Equal`
  }
}

console.log(minimum(3,6))
