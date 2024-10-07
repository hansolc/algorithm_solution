function solution(name, yearning, photo) {
  const nameScore = {};
  const answer = [];

  name.forEach((n, idx) => {
    nameScore[n] = yearning[idx];
  });

  for (const p of photo) {
    let score = 0;
    for (const p1 of p) {
      score += nameScore[p1] ?? 0;
    }
    answer.push(score);
  }
  return answer;
}

function solution(name, yearning, photo) {
  return photo.map((p) =>
    p.reduce((acc, value) => (acc += yearning[name.indexOf(value)] ?? 0), 0)
  );
}
