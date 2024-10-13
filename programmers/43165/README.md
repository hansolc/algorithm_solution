# [level:2] 타겟넘버

[문제](https://school.programmers.co.kr/learn/courses/30/lessons/43165)

### 시간복잡도

<br>

**제한사항**

- 주어지는 숫자의 개수는 2개 이상 20개 이하입니다.
- 각 숫자는 1 이상 50 이하인 자연수입니다.
- 타겟 넘버는 1 이상 1000 이하인 자연수입니다

### 문제풀이

<br>

최악의 경우 시간복잡도는 2^20이다. `백트랙킹`을 통해 문제를 해결했다.

### 정리

return 조건으로는 `arr` 빈배열 변수로 만들어 파라미터의 `numbers` 길이와 같아질 경우 return 하였고 `opers` 변수를 통해 +/-을 백트랙킹을 통해 넣어주었다. `arr.length = numbers.length` 조건에 만족하면 `arr`배열을 순회하며 reduce 메서드를 통해 누적 값을 계산하고 `target`가 값이 같을 경우 `answer`을 더해주었다.

<br>

**배운점**

- 파라미터 활용

다른 코드를 참고하니 `dfs`함수의 파라미터 활용이 부족했다. 파라미터로 현재 인덱스 값과 누적값을 넣어준다면 따로 `arr` 배열 선언과 reduce메서드 없이 문제를 해결할 수 있다.

```
function dfs(idx, currentSum) {
  if(idx===numbers.length) {
    if(currentSum === target) answer++;
    return;
  }

  dfs(idx+1, currentSum + numbers[idx]);
  dfs(idx+1, currentSum - numbers[idx]);
}

dfs(0,0)    //현재 idx, numbers의 총합


```

**런타임에러**
