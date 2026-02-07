function chessBoard(width, height) {
  let board = ""; // The board start with empty line

  for (let row = 0; row < height; row++) {
    let line = ""; // From roq 1 to row height

    for (let col = 0; col < width; col++) {
      //from column 1 to column
      if ((row + col) % 2 === 0) {
        //row 1 col 1 we start with blac
        line += "#";
      } else {
        line += " ";
      }
    }

    board += line + "\n";
  }

  return board;
}

console.log(chessBoard(8, 8));

