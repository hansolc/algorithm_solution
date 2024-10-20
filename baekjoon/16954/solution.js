let input = [];

function solution() {
  const map = input.slice().map((d) => d.split(""));
  const pos = [7, 0];
  const move = [
    [-1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
    [-1, -1],
    [0, -1],
    [-1, 1],
    [1, 0],
    [0, 0],
  ];
  const visited = new Set();
  const tempWallArray = [];

  function isValid(r, c) {
    return r >= 0 && c >= 0 && r < 8 && c < 8;
  }

  function moveWall() {
    tempWallArray.push(map.pop());
    map.unshift(Array(8).fill("."));
  }

  function rollbackWall() {
    map.shift();
    map.push(tempWallArray.pop());
  }

  let flag = false;
  // let test = 0;

  function dfs([r, c], time) {
    if (!isValid(r, c)) {
      return;
    }

    if (map[r][c] === "#") {
      return;
    }

    if (r === 0 && c === 7) {
      flag = true;
      return;
    }

    for (let i = 0; i < move.length; i++) {
      const [dr, dc] = move[i];
      const mr = r + dr,
        mc = c + dc;
      if (
        isValid(mr, mc) &&
        !visited.has(`${mr}${mc}${time}`) &&
        map[mr][mc] !== "#"
      ) {
        visited.add(`${mr}${mc}${time}`);
        moveWall();
        dfs([mr, mc], time + 1);
        if (flag) return;
        rollbackWall();
        visited.delete(`${mr}${mc}${time}`);
      }
    }
  }

  dfs(pos, 0);
  // console.log(flag);
  console.log(flag ? 1 : 0);
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
