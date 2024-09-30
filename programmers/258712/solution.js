function solution(friends, gifts) {
  const exchangeGiftTable = Array.from({ length: friends.length }, () =>
    Array.from({ length: friends.length }, () => 0)
  );
  const giftIdxTable = Array.from({ length: friends.length }, () => 0);
  console.log(giftIdxTable);
  // const friendsId = friends.reduce((acc, value, index) => ({...acc, [index]: value}),{});
  const mapFriendsToIdx = Object.fromEntries(friends.map((v, idx) => [v, idx]));

  for (const gift of gifts) {
    const [sender, getter] = gift.split(" ");
    const r = mapFriendsToIdx[sender];
    const c = mapFriendsToIdx[getter];

    exchangeGiftTable[r][c] += 1;
    giftIdxTable[r] += 1;
    giftIdxTable[c] -= 1;
  }
  const answer = Array(friends.length).fill(0);
  for (let s = 0; s < friends.length; s++) {
    for (let g = 0; g < friends.length; g++) {
      if (s === g) continue;
      if (exchangeGiftTable[s][g] > exchangeGiftTable[g][s]) answer[s] += 1;
      else if (
        exchangeGiftTable[s][g] === exchangeGiftTable[g][s] &&
        giftIdxTable[s] > giftIdxTable[g]
      ) {
        answer[s] += 1;
      }
    }
  }
  return Math.max(...answer);
}
