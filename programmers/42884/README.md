# [level:2] 게임 맵 최단거리

[문제](https://school.programmers.co.kr/learn/courses/30/lessons/42884?language=javascript)

### 시간복잡도

<br>

**제한사항**

- 차량의 대수는 1대 이상 10,000대 이하입니다.
- routes에는 차량의 이동 경로가 포함되어 있으며 routes[i][0]에는 i번째 차량이 고속도로에 진입한 지점, routes[i][1]에는 i번째 차량이 고속도로에서 나간 지점이 적혀 있습니다.
- 차량의 진입/진출 지점에 카메라가 설치되어 있어도 카메라를 만난것으로 간주합니다.
- 차량의 진입 지점, 진출 지점은 -30,000 이상 30,000 이하입니다.

### 문제풀이

<br>

- `Greedy` 알고리즘

1. routes을 진출 정보를 기반으로 오름차순 정렬
2. target이 진입 보다 클 경우 answer+1

배열의 형태는 [진입, 진출] 이기 때문에 진입 지점이 -30000이상이라는 조건을 기반으로 값을 초깃값으로 설정한 변수를 선언 후, 진입 지점과 비교하여 최소한의 경우의 수를 구했다.

### 정리

간단한 문제임에도 불구하고 마이너스 값에 헷갈려 문제를 계속 다시 읽어보고 생각했다. `진출`을 기반으로 오름차순 정렬한 이유는 `진입`은 `진출`보다 클 수 없다. 즉, 현재 차량의 `진출` 값이 다음 차량의 `진입`보다 작을 경우 하나의 카마라로는 챠량을 모두 찍을 수 없다.

<br>

**배운점**

**런타임에러**