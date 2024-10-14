# [level:3] 단어변환

[문제](https://school.programmers.co.kr/learn/courses/30/lessons/43163)

### 시간복잡도

완전탐색: O(50!)

bfs: O(50\*50)

<br>

**제한사항**

- 각 단어는 알파벳 소문자로만 이루어져 있습니다.
- 각 단어의 길이는 3 이상 10 이하이며 모든 단어의 길이는 같습니다.
- words에는 3개 이상 50개 이하의 단어가 있으며 중복되는 단어는 없습니다.
- begin과 target은 같지 않습니다.
- 변환할 수 없는 경우에는 0를 return 합니다.

### 문제풀이

<br>

- `bfs`로 문제해결

- `target`이 `words`배열 내에 없는 경우 바로 return한다.
- `compareString`: 두 문자를 비교해 2개 이상 문자가 다를 경우 false을 return한다.
- `compareStringToWordsList`: 문자 `str`과 `list`배열로된 문자열들을 하나씩 비교해 `compareString`함수로 비교해 준다. 해당 비교를 통해 tree 형태로 `obj` 변수에 넣어준다.
- `bfs`을 이용하여 `word, 깊이`값을 통해 `target`문자인지 비교하고 같다면 `depth`을 리턴한다.

### 정리

한번에 하나의 문자만 변경할 수 있으므로 해당 조건에 맞게 `obj` 객체를 생성해 key-value형태로 tree 구조로 만들어 주었다. 그 후 `bfs`을 통해 최소 몇번의 변환으로 `target`이 될 수 있는지를 구했다.

<br>

**배운점**

**1. `visited` => `new Set([])` 사용하기**

`visited`을 `obj`과 같은 객체 형태로 만들었다. 하지만 `Set`을 사용하면 가독성과 성능을 좀 더 높일 수 있었다.

```
line 29 ~ 46
const visited = new Set([begin]);
...

line 41
for(const w of obj[word]){
  if(!visited.has(w)){
    visited.add(w);
    q.push([w, depth+1])
  }
}
```

**2.compareString 함수 개선**

불필요한 `cnt--` cnt감소 연산을 하고 있다.

```
line 7~13

function compareString(w1,w2){
  let diff = 0;
  for(let i=0;i<len;i++){
    if(w1[i]!==w2[i]) diff++;
    if(diff>=2) return false;
  }
  return diff===1
}
```

**런타임에러**
