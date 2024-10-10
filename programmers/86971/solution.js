/*
k: 피로도
dungeons: 최소필요피로도, 소모피로도
*/

function solution(n, wires) {
  const tree = Array.from({ length: n + 1 }, () => []);
  let answer = Number.MAX_SAFE_INTEGER;
  for (const [v1, v2] of wires) {
    tree[v1].push(v2);
    tree[v2].push(v1);
  }

  const visited = Array.from({ length: n + 1 }, () => false);

  function dfs(start, reject) {
    let cnt = 1;
    visited[start] = true;

    for (const neighbor of tree[start]) {
      if (!visited[neighbor] && neighbor !== reject) {
        cnt += dfs(neighbor, reject);
      }
    }
    return cnt;
  }

  for (const [v1, v2] of wires) {
    visited.fill(false);
    const v1Cnt = dfs(v1, v2);
    const v2Cnt = n - v1Cnt;
    answer = Math.min(Math.abs(v1Cnt - v2Cnt), answer);
  }
  console.log(answer);
}

// ===========================================================
function solution(n, wires) {
  const tree = Array.from({ length: n + 1 }, () => []);
  const visited = Array.from({ length: n + 1 }, () => false);
  let answer = Number.MAX_SAFE_INTEGER;
  for (const [v1, v2] of wires) {
    tree[v1].push(v2);
    tree[v2].push(v1);
  }
  let cnt = 0;

  function dfs(start, reject) {
    if (visited[start] || start === reject) {
      return;
    }
    const nodes = tree[start];
    visited[start] = true;
    cnt++;
    // console.log(start, cnt, nodes);

    for (let i = 0; i < nodes.length; i++) {
      dfs(nodes[i], reject, cnt);
    }
  }

  function initVisited() {
    for (let i = 0; i < visited.length; i++) {
      visited[i] = false;
    }
  }

  for (const [v1, v2] of wires) {
    dfs(v1, v2);
    const v1Cnt = cnt;
    cnt = 0;
    dfs(v2, v1);
    const v2Cnt = cnt;
    cnt = 0;
    // console.log(v1Cnt, v2Cnt);
    answer = Math.min(Math.abs(v1Cnt - v2Cnt), answer);
    initVisited();
  }

  return answer;
}

solution(9, [
  [1, 3],
  [2, 3],
  [3, 4],
  [4, 5],
  [4, 6],
  [4, 7],
  [7, 8],
  [7, 9],
]);
solution(4, [
  [1, 2],
  [2, 3],
  [3, 4],
]);
solution(7, [
  [1, 2],
  [2, 7],
  [3, 7],
  [3, 4],
  [4, 5],
  [6, 7],
]);
