function solution(n, computers) {
  const graph = Array.from({ length: n }, () => []);

  computers.forEach((clist, cpNum) => {
    clist.forEach((c, cpNum2) => {
      if (cpNum !== cpNum2 && c === 1) {
        graph[cpNum].push(cpNum2);
      }
    });
  });

  const visited = Array.from({ length: n }, () => false);

  function dfs(n) {
    for (const neighbor of graph[n]) {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        dfs(neighbor);
      }
    }
  }

  let cnt = 0;
  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;
    dfs(i);
    cnt += 1;
  }
  return cnt;
}
