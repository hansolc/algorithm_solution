function solution(routes) {
  routes.sort((a, b) => a[1] - b[1]);
  let start = -30001;
  let answer = 0;

  for (const [enter, exit] of routes) {
    if (start < enter) {
      answer += 1;
      start = exit;
    }
  }
  return answer;
}
