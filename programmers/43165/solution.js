function solution(numbers, target) {
  const opers = ["+", "-"];
  const arr = [];
  answer = 0;

  function dfs() {
    if (arr.length >= numbers.length) {
      let temp = arr.reduce((acc, val, idx) => {
        return val === "+" ? acc + numbers[idx] : acc - numbers[idx];
      }, 0);
      if (temp === target) answer++;

      return;
    }

    for (let i = 0; i < 2; i++) {
      arr.push(opers[i]);
      dfs();
      arr.pop();
    }
  }

  dfs();
  return answer;
}
