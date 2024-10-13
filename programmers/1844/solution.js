function solution(maps) {
  const row = maps.length;
  const col = maps[0].length;
  const visited = Array.from({ length: row }, () =>
    Array.from({ length: col }, () => false)
  );

  const moveX = [1, 0, -1, 0];
  const moveY = [0, 1, 0, -1];

  function bfs(r, c) {
    const q = [];
    q.push([r, c]);
    visited[r][c] = true;

    // 개선 사항: q.shift() 대신 pointer 변수를 통해 이를 개선할 수 있음
    // let pointer = 0;

    while (q.length /* pointer < q.length */) {
      // const [nr, nc] = q[pointer++];
      const [nr, nc] = q.shift();
      if (
        !maps[nr][nc] /* 불필요한 조건 */ ||
        (nr === row - 1 && nc === col - 1)
      ) {
        return maps[nr][nc];
      }

      for (let i = 0; i < 4; i++) {
        const mx = nr + moveX[i];
        const my = nc + moveY[i];

        if (mx < 0 || my < 0 || mx >= row || my >= col) continue;
        if (visited[mx][my]) continue;
        if (!maps[mx][my]) continue;

        visited[mx][my] = true;
        maps[mx][my] += maps[nr][nc];
        q.push([mx, my]);
      }
    }

    return -1;
  }

  return bfs(0, 0);
}

solution([
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1],
]);

solution([
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 0],
  [0, 0, 0, 0, 1],
]);
