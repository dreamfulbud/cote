// 실패율
// https://programmers.co.kr/learn/courses/30/lessons/42889

function solution(N, stages) {
  let answer = [];

  person = Array.from({ length: N }, () => 0);
  pass = Array.from({ length: N }, () => 0);

  for (let i = 0; i < stages.length; i++) {
    for (let j = 1; j <= N; j++) {
      if (stages[i] === j) {
        person[j - 1]++;
      }
      answer = person;
    }
  }

  let x = 0;
  for (let i = 0; i < N; i++) {
    pass[i] = stages.length - x;
    x += person[i];
  }

  let map = new Map();
  for (let i = 0; i < N; i++) {
    map.set(i + 1, person[i] / pass[i]);
  }
  answer = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));

  answer = [...answer.keys()];

  return answer;
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])); // [3, 4, 2, 1, 5]
console.log(solution(4, [4, 4, 4, 4, 4])); // [4, 1, 2, 3]