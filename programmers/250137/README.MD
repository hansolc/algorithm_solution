# [level:1]붕대감기

[문제](https://school.programmers.co.kr/learn/courses/30/lessons/250137)

### 시간복잡도

**제한사항**

- 1<= attacks <=100

단순 구현해도 무방 하다고 생각했다.

### 문제풀이

몬스터가 공격하는 시간의 최댓값(`endTime`)을 구해 반복문을 통해 0초부터 `endTime`까지 반복하며 몬스터가 공격한 시간이라면 연속 성공시간을 초기화 시켜주며 체력을 깎아준다. 붕대감기에 성공했다면 체력을 높이고 동시에 연속 성공 조건에 달성하면 추가 체력을 회복시켜 준다.

### 정리

**배운점**

```
코드 가독성 부족
```

문제 난이도에 비해 꽤 많은 시간을 투자했음에도 불구하고 코드 가독성이 좋지 못했다. `연속성공`시 추가 체력회복 조건 때문에 초마다 값을 비교해야 한다고 생각했지만 다른 코드를 참고해보니 하나의 식으로 표현이 가능했다.

```
function solution(bandage, health, attacks) {
  let currHealth = health;
  let currTime = 0;

  for (let [attackTime, damage] of attacks) {
    let diffTime = attackTime - currTime - 1;
    currHealth +=
      diffTime * bandage[1] + Math.floor(diffTime / bandage[0]) * bandage[2];
    console.log("4: ", currHealth);
    if (currHealth > health) currHealth = health;
    currHealth -= damage;
    if (currHealth <= 0) return -1;
    currTime = attackTime;
  }

  return currHealth;
}
```

`diffTime`변수을 통해 몬스터가 공격하지 않은 시간을 저장해

```
초당회복량(`bandage[1]`) * `difftime` + 연속 성공한 횟수(`diffTime/bandage[0]`) * 연속성공시 추가 체력회복량(`bandage[2]`)
```

해당 식을 통해 매 초마다 체력을 변경하지 않고 `attacks` 길이에 따라 반복문을 반복하게 구현했다.
