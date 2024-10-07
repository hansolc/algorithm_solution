/*
- 과제는 시작하기로 한 시간에 시작
- 새로운 과제를 시작할 시각이 되었을 때, 기존에 진행 중이던 과제가 있다면 진행 중이던 과제를 멈추고 새로운 과제를 시작합니다.
- 진행중이던 과제를 끝냈을 때, 잠시 멈춘 과제가 있다면, 멈춰둔 과제를 이어서 진행합니다.
만약, 과제를 끝낸 시각에 새로 시작해야 되는 과제와 잠시 멈춰둔 과제가 모두 있다면, 새로 시작해야 하는 과제부터 진행합니다.
- 멈춰둔 과제가 여러 개일 경우, 가장 최근에 멈춘 과제부터 시작합니다.
*/

function solution(plans) {
  const answer = [];

  plans.forEach((p) => {
    const [hour, min] = p[1].split(":").map(Number);
    p[1] = hour * 60 + min;
    p[2] = Number(p[2]);
  });

  plans.sort((a, b) => a[1] - b[1]);

  let [prevName, prevTime, prevTakingTime] = plans.shift();
  let stack = [];
  let final = "";
  while (plans.length) {
    const [nextName, nextTime, nextTakingTime] = plans.shift();
    if (plans.length === 0) {
      final = nextName;
    }
    prevTime += prevTakingTime;
    if (prevTime > nextTime) {
      stack.push([prevName, prevTime - nextTime]);
    } else {
      answer.push(prevName);
      let restTime = prevTime - nextTime;
      restTime = Math.abs(restTime);
      while (stack.length && restTime > 0) {
        let [lastName, lastTime] = stack.pop();
        restTime -= lastTime;
        if (restTime < 0) {
          stack.push([lastName, Math.abs(restTime)]);
        } else {
          answer.push(lastName);
        }
      }
    }
    [prevName, prevTime, prevTakingTime] = [nextName, nextTime, nextTakingTime];
  }
  stack = stack.map(([name, time]) => name);
  answer.push(final);

  return answer.concat(stack.reverse());
}
