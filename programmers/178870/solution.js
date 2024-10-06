//====================================================== incorrect

function solution(sequence, k) {
  const rangeSum = [0];
  const answer = [];
  sequence.reduce((a, b) => {
    rangeSum.push(a + b);
    return a + b;
  }, 0);

  for (let i = 0; i <= sequence.length + 1; i++) {
    for (let j = i; j <= sequence.length + 1; j++) {
      const v = rangeSum[j + 1] - rangeSum[i];
      if (v === k) {
        answer.push([i, j]);
      }
    }
  }
  answer.sort((a, b) => a[1] - a[0] - (b[1] - b[0]) || a[1] - b[1]);
  return answer[0];
}

//====================================================== incorrect

function solution(sequence, k) {
  const rangeSum = [0];
  let answer = null;
  sequence.reduce((a, b) => {
    rangeSum.push(a + b);
    return a + b;
  }, 0);

  function shortenFirstAndSmaller(init, target) {
    let initLength = init[1] - init[0];
    let targetLength = target[1] - target[0];
    if (initLength < targetLength) return init;
    if (initLength > targetLength) return target;

    return init[0] < target[0] ? init : target;
  }

  for (let i = 0; i <= sequence.length + 1; i++) {
    for (let j = i; j <= sequence.length + 1; j++) {
      const v = rangeSum[j + 1] - rangeSum[i];
      if (v === k) {
        if (!answer) answer = [i, j];
        else {
          answer = shortenFirstAndSmaller(answer, [i, j]);
        }
      }
    }
  }
  console.log(answer);
  return answer;
}

// ========================================== correct
function solution(sequence, k) {
  let left = 0;
  let right = 0;
  const answer = [];
  let sum = sequence[0];

  while (right < sequence.length) {
    if (sum < k) {
      sum += sequence[++right];
    } else if (sum > k) {
      sum -= sequence[left++];
    } else {
      answer.push([left, right]);
      sum += sequence[++right];
    }
  }

  answer.sort((a, b) => a[1] - a[0] - (b[1] - b[0]) || a[1] - b[1]);
  return answer[0];
}
