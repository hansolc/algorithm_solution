# [level:1] 추억점수

[문제](https://school.programmers.co.kr/learn/courses/30/lessons/176963)

### 시간복잡도

<br>

**제한사항**

- 3 <= `name`길이 = `yearning`길이 <=100
- 3 <= `photo`길이 <=100

### 문제풀이

<br>
시간복잡도에는 큰 신경을 쓰지 않았다. 객체를 통해 문제를 해결했다.

### 정리

`nameScore`라는 객체를 생성해 `name`과 `yearning` 배열을 탐색하며 key-value형식으로 name-score을 만들고 `photo`배열을 순회하며 점수를 더했다.
<br>

**배운점**

푸는데 어려움은 없었지만 다른 사람이 작성한 코드가 한줄로 작성되어 가독성이 더 높았다

```
function solution(name, yearning, photo) {
  return photo.map((p) =>
    p.reduce((acc, value) => (acc += yearning[name.indexOf(value)] ?? 0), 0)
  );
}
```

`map`과 `reduce`메소드를 통해 한줄로 간결화 했으며 배열의 값을 통해 해당 값의 index값을 return하는 `indexOf`메소드를 통해 작성했다.

**런타임에러**
