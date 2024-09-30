# [level:1]가장 많이 받은 선물

[문제](https://school.programmers.co.kr/learn/courses/30/lessons/258712)

### 시간복잡도

**제한사항**

- n <=50
- list<= 10000

단순 구현해도 무방 하다고 생각했다.

### 문제풀이

문제 설명에 나와있는 친구들끼리 주고 받은 선물 개수를 저장하는 이차원 배열(`exchangeGiftTable`)과 선물지수를 저장하는 일차원 배열(`giftIdxTable`)을 구현하여 해결

### 정리

**배운점**

```
Object.fromEntries(iterable)
- key,value 형식으로 구성된 배열을 객체로 반환해준다.
```

친구들 리스트에서 친구명과 index을 [친구이름]: [index] 형태로 매핑시키고 싶었다. reduce 함수와 Object.fromEntries 함수로 구현 가능하다.

```
array = [a,b,...];

1. reduce
array.reduce((acc,v,index) => {...acc, [v]: index}, {})

2. fromEntries
Object.fromEntries(array.map((v, idx) => [v, idx]))
```
