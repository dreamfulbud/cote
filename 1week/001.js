// 로또의 최고 순위와 최저 순위
// https://programmers.co.kr/learn/courses/30/lessons/77484?language=javascript

function solution(lottos, win_nums) {
  var answer = [];

  // 코드 구현
  let match = 0;
  let lottos_cnt = 0;

  for (let x of lottos) {
    if (x === 0) {
      lottos_cnt++;
    }
  }



  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      if (lottos[i] === win_nums[j]) {
        match++;
      }
    }
  }
  switch (match + lottos_cnt) {
    // 일치 수 / 순위
    case 6:
      answer.push(1);
      break;
    case 5:
      answer.push(2);
      break;
    case 4:
      answer.push(3);
      break;
    case 3:
      answer.push(4);
      break;
    case 2:
      answer.push(5);
      break;
    default:
      answer.push(6);
      break;
  }
  switch (match) {
    // 일치 수 / 순위
    case 6:
      answer.push(1);
      break;
    case 5:
      answer.push(2);
      break;
    case 4:
      answer.push(3);
      break;
    case 3:
      answer.push(4);
      break;
    case 2:
      answer.push(5);
      break;
    default:
      answer.push(6);
      break;
  }

  // 코드 구현
  return answer;
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19])); //	[3, 5]
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25])); //	[1, 6]
console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35])); // [1, 1]