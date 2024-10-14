function solution(begin, target, words) {
  if (!words.includes(target)) return 0;
  const obj = {};
  const len = words[0].length;
  let answer = 0;

  function compareString(w1, w2, cnt) {
    for (let i = 0; i < len; i++) {
      if (w1[i] === w2[i]) continue;
      cnt--;
      if (cnt < 0) return false;
    }
    return true;
  }

  function compareStringToWordsList(str, list) {
    obj[str] = [];
    for (const word of list) {
      if (str === word) continue;
      if (compareString(str, word, 1)) obj[str].push(word);
    }
  }

  [begin, ...words].forEach((w) => {
    compareStringToWordsList(w, words);
  });

  const q = [[begin, 0]];
  const visited = {};
  Object.keys(obj).forEach((k) => {
    visited[k] = false;
  });

  visited[begin] = true;
  while (q.length) {
    const [word, depth] = q.shift();
    if (word === target) {
      return depth;
    }

    obj[word].forEach((w) => {
      if (visited[w]) return;
      visited[w] = true;
      q.push([w, depth + 1]);
    });
  }

  return 0;
}
