function solution(players, callings) {
  const map = new Map();
  players.forEach((p, idx) => {
    map.set(p, idx);
  });

  function swap(a, b) {
    [players[a], players[b]] = [players[b], players[a]];
  }

  for (const c of callings) {
    const passNum = map.get(c);
    const backNum = passNum - 1;
    const backName = players[backNum];

    swap(passNum, backNum);
    map.set(c, backNum);
    map.set(backName, passNum);
  }
  return players;
}
