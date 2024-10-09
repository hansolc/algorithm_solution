let input = [];

function solution() {
  const tempArray = Array.from({ length: 10001 }, () => true);
  const len = tempArray.length;
  // const tempArray = Array.from({ length: 101 }, () => true);

  function getSelfNumber(n) {
    let numArray = n.toString().split("").map(Number);

    return numArray.reduce((acc, val) => acc + val, n);
  }

  for (let i = 0; i < len; i++) {
    tempArray[getSelfNumber(i)] = false;
  }

  tempArray.forEach((v, idx) => {
    if (idx === 0 || !v) return;
    console.log(idx);
  });
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
