let input = [];

function solution() {
  let [N, K] = input[0].split(" ").map((a, idx) => (idx === 0 ? a : Number(a)));

  function swap(idx1, idx2, str) {
    let arr = str.split("");

    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    return arr.join("");
  }

  function bfs(num, k) {
    const q = [[num, k]];
    const visited = new Set([`${num}-${k}`]);
    let pointer = 0;
    let max = -1;

    while (pointer < q.length) {
      if (q[pointer][1] === 0) {
        max = Math.max(max, q[pointer++][0]);
        continue;
      }
      const [n2, depth] = q[pointer++];

      for (let i = 0; i < n2.length; i++) {
        for (let j = i + 1; j < n2.length; j++) {
          const str = swap(i, j, n2);
          const visitedKey = `${str}-${depth - 1}`;
          if (str[0] != 0 && !visited.has(visitedKey)) {
            visited.add(visitedKey);
            q.push([str, depth - 1]);
          }
        }
      }
    }
    return max;
  }

  console.log(bfs(N, K));
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
