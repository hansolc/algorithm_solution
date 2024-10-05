function solution(land) {
  const totalRow = land.length;
  const totalCol = land[0].length;
  const a = [1, 0, -1, 0];
  const b = [0, 1, 0, -1];
  let answer = 0;
  let visited = Array.from({ length: totalRow }, () =>
    Array.from({ length: totalCol }, () => false)
  );
  const colOil = Array.from({ length: totalCol }, () => 0);

  function bfs(rowIdx, colIdx) {
    const q = [];

    q.push([rowIdx, colIdx]);
    let cnt = 1;
    visited[rowIdx][colIdx] = true;
    const set = new Set();
    while (q.length) {
      const [r, c] = q.shift();
      set.add(c);

      for (let i = 0; i < 4; i++) {
        const mr = r + a[i];
        const mc = c + b[i];

        if (
          mr < 0 ||
          mc < 0 ||
          mr >= totalRow ||
          mc >= totalCol ||
          !land[mr][mc]
        )
          continue;
        if (visited[mr][mc]) continue;
        q.push([mr, mc]);
        visited[mr][mc] = true;
        cnt++;
      }
    }
    for (const s of set) {
      colOil[s] += cnt;
    }
  }

  for (let r = 0; r < totalRow; r++) {
    for (let c = 0; c < totalCol; c++) {
      if (!land[r][c] || visited[r][c]) continue;
      bfs(r, c);
    }
  }

  return Math.max.apply(null, colOil);
}
