let input = [];

// ==================================================== 2)incorrect
function solution() {
  const n = +input[0];

  const chessBoard = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => true)
  );
  let answer = 0;

  function putQueen([x, y]) {
    const initVal = [x, y];
    chessBoard[y][x] = false;
    while (x < n - 1) {
      chessBoard[y][++x] = false;
    }
    [x, y] = initVal;
    while (x > 0) {
      chessBoard[y][--x] = false;
    }
    [x, y] = initVal;
    while (y < n - 1) {
      chessBoard[++y][x] = false;
    }
    [x, y] = initVal;
    while (y > 0) {
      chessBoard[--y][x] = false;
    }
    [x, y] = initVal;
    while (x < n - 1 && y < n - 1) {
      chessBoard[++y][++x] = false;
    }
    [x, y] = initVal;
    while (x < n - 1 && y > 0) {
      chessBoard[--y][++x] = false;
    }
    [x, y] = initVal;
    while (x > 0 && y < n - 1) {
      chessBoard[++y][--x] = false;
    }
    [x, y] = initVal;
    while (x > 0 && y > 0) {
      chessBoard[--y][--x] = false;
    }
    [x, y] = initVal;
  }

  function findElse() {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (chessBoard[i][j]) {
          putQueen([j, i]);
          return true;
        }
      }
    }
    return false;
  }

  function initChessBoard() {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        chessBoard[i][j] = true;
      }
    }
  }

  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      initChessBoard();
      putQueen([x, y]);
      for (let i = 0; i < n - 1; i++) {
        if (!findElse()) continue;
      }
      console.log(chessBoard.join("\n"));
      answer += 1;
      // return;
    }
  }
  console.log(answer);
}

// ==================================================== 2)correct
function solution() {
  const n = +input[0];
  let answer = 0;
  const queens = [];

  function possible(row, col) {
    for (const [a, b] of queens) {
      if (a === row || b === col) return false;
      if (Math.abs(a - row) === Math.abs(b - col)) return false;
    }

    return true;
  }

  function dfs(row) {
    if (row === n) {
      answer++;
      return;
    }

    for (let i = 0; i < n; i++) {
      if (!possible(row, i)) continue;
      queens.push([row, i]);
      dfs(row + 1);
      queens.pop();
    }
  }

  dfs(0);
  console.log(answer);
}
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  input.push(line);
  // rl.close();
}).on("close", function () {
  solution();
  process.exit();
});
