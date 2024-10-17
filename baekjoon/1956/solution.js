let input = [];

function solution() {
  const [V, E] = input.shift().split(" ").map(Number);
  const roads = input.slice().map((d) => d.split(" ").map(Number));
  const arr = Array.from({ length: V + 1 }, () => Array(V + 1).fill(Infinity));

  roads.forEach(([s, e, c]) => {
    arr[s][e] = c;
  });

  for (let mid = 1; mid < V + 1; mid++) {
    for (let start = 1; start < V + 1; start++) {
      for (let end = 1; end < V + 1; end++) {
        if (arr[start][mid] + arr[mid][end] < arr[start][end]) {
          arr[start][end] = arr[start][mid] + arr[mid][end];
        }
      }
    }
  }

  let answer = Infinity;
  for (let i = 1; i < V + 1; i++) {
    if (arr[i][i] == Infinity) continue;
    answer = Math.min(answer, arr[i][i]);
  }
  console.log(answer == Infinity ? -1 : answer);
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
