function isEven(x){
  if(x>0) {
      if (x==0) {
      return true;
    }else if(x==1){
      return false;
    }else{
      return isEven(x-2);
    }
  }else if(x<0){
    return 'Please put a positive whole number';
  }


}

console.log(isEven(-1));

