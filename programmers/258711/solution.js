// 정점: 나가는 간선의 수가 2개이상, 들어오는 간선의 수가 0
// 막대그래프: 나가는 간선의 수가 0, 들어오는 간선의 수가 1
// 8자모양그래프: 나가는 간선의 수가 2, 들어오는 간선의 수가 2
// 도넛 그래프: 생성된 정점에서 나가는 간선의 수 - (막대그래프 수 + 8자모양그래프 수)

function solution(edges) {
  const obj = {};
  //   const max = Math.max.apply(null, edges.flat());
  //   const array = Array.from({ length: 1000001 }, () => [0, 0]);
  for (const [start, end] of edges) {
    if (obj[start] === undefined) {
      obj[start] = [0, 0];
    }
    if (obj[end] === undefined) obj[end] = [0, 0];

    obj[start][0] += 1;
    obj[end][1] += 1;
  }

  const answer = [0, 0, 0, 0];
  Object.keys(obj).forEach((key) => {
    if (obj[key][0] >= 2 && obj[key][1] == 0) {
      answer[0] = Number(key);
    } else if (obj[key][0] == 0) {
      answer[2] += 1;
    } else if (obj[key][0] >= 2 && obj[key][1] >= 2) {
      answer[3] += 1;
    }
  });

  answer[1] = obj[answer[0]][0] - answer[2] - answer[3];

  return answer;
}
