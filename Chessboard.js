function chessBoard(width,height){
  for(let i=1;i<=height;i++){
    if (i%2!=0) {

      console.log(" #".repeat(width/2));

    }else{
      console.log("# ".repeat(width/2));
    }
  }
}


chessBoard(8,8);
