function solution(cap, n, deliveries, pickups) {
  let dSum = 0;
  let pSum = 0;
  let answer = 0;

  for (let i = n - 1; i >= 0; i--) {
    let cnt = 0;
    dSum += deliveries[i];
    pSum += pickups[i];

    while (dSum > 0 || pSum > 0) {
      dSum -= cap;
      pSum -= cap;
      cnt++;
    }
    answer += (i + 1) * 2 * cnt;
  }
  return answer;
}
