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

console.log("-----------------");
function solution2(N, stages) {
  let answer = [];
  let fail = [];
  let pass = stages.length;

  for (let i = 1; i <= N; i++) {
    let failPeson = stages.filter((user) => user === i).length;
    let 실패율 = failPeson / pass;
    pass -= failPeson;
    fail.push({ stage: i, '실패율': 실패율 });
  }

  fail.sort((a, b) => b['실패율'] - a['실패율']);

  // for (let i of fail) {
  //   answer.push(i['stage']);
  // }

  fail.forEach((el) => answer.push(el['stage']));

  return answer;
}

console.log(solution2(5, [2, 1, 2, 6, 2, 4, 3, 3])); // [3, 4, 2, 1, 5]
console.log(solution2(4, [4, 4, 4, 4, 4])); // [4, 1, 2, 3]