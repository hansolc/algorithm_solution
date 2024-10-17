class MinHeap {
  constructor() {
    this.heap = [null];
  }

  isEmpty() {
    return this.heap.length <= 1;
  }

  _swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }

  push({ node, value }) {
    this.heap.push({ node, value });
    let currentIdx = this.heap.length - 1;
    let parentIdx = Math.floor(currentIdx / 2);

    while (parentIdx !== 0 && this.heap[parentIdx].value > value) {
      this._swap(currentIdx, parentIdx);

      currentIdx = parentIdx;
      parentIdx = Math.floor(currentIdx / 2);
    }
  }

  pop() {
    if (this.heap.length <= 1) return;
    if (this.heap.length === 2) return this.heap.pop();

    const returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();
    let currentIdx = 1;

    while (true) {
      const leftIdx = currentIdx * 2;
      const rightIdx = currentIdx * 2 + 1;
      let smallestIdx = currentIdx;

      if (
        leftIdx < this.heap.length &&
        this.heap[leftIdx].value < this.heap[smallestIdx].value
      ) {
        smallestIdx = leftIdx;
      }

      if (
        rightIdx < this.heap.length &&
        this.heap[rightIdx].value < this.heap[smallestIdx].value
      ) {
        smallestIdx = rightIdx;
      }

      if (smallestIdx === currentIdx) break;

      this._swap(currentIdx, smallestIdx);
      currentIdx = smallestIdx;
    }

    return returnValue;
  }
}

let input = [];

// ============================================== 1) dijkstra
function solution() {
  const [N, K] = input[0].split(" ").map(Number);

  function isValid(num) {
    return 0 <= num && num <= 100000;
  }

  function dijkstra(start) {
    const dist = Array(100001).fill(Infinity);
    dist[start] = 0;
    const minheap = new MinHeap();
    minheap.push({ node: start, value: 0 });

    while (!minheap.isEmpty()) {
      const { node, value } = minheap.pop();

      if (node === K) return value;

      if (dist[node] < value) continue;

      if (isValid(node - 1) && dist[node - 1] > value + 1) {
        dist[node - 1] = value + 1;
        minheap.push({ node: node - 1, value: dist[node - 1] });
      }

      if (isValid(node + 1) && dist[node + 1] > value + 1) {
        dist[node + 1] = value + 1;
        minheap.push({ node: node + 1, value: dist[node + 1] });
      }

      if (isValid(node * 2) && dist[node * 2] > value) {
        dist[node * 2] = value;
        minheap.push({ node: node * 2, value: dist[node * 2] });
      }
    }
    return dist[K];
  }

  console.log(dijkstra(N));
}

/* ================================================ 0-1 BFS
function solution() {
  const [N, K] = input[0].split(" ").map(Number);

  function isValid(n) {
    return 0 <= n && n <= 100001;
  }

  function bfs() {
    const q = [[N, 0]];
    const visited = Array(100001).fill(0);
    visited[N] = 1;

    while (q.length) {
      const [pos, cost] = q.shift();

      if (pos === K) return cost;

      for (a of [pos * 2, pos - 1, pos + 1]) {
        if (isValid(a) && !visited[a]) {
          visited[a] = true;
          if (a === pos * 2) {
            q.unshift([a, cost]);
          } else {
            q.push([a, cost + 1]);
          }
        }
      }
    }
  }
  console.log(bfs());
}
*/

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
