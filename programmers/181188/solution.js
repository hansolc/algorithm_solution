function solution(targets) {
  targets.sort((a, b) => a[1] - b[1]);

  let tempE = 0;
  let cnt = 0;
  for (const [s, e] of targets) {
    if (s >= tempE) {
      cnt += 1;
      tempE = e;
    }
  }
  return cnt;
}
