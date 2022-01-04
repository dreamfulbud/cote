// 모의고사
// https://programmers.co.kr/learn/courses/30/lessons/42840

function solution(answers) {
  let result = [];
  const math1 = [1, 2, 3, 4, 5];
  const math2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const math3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let math1_score = 0;
  let math2_score = 0;
  let math3_score = 0;

  while (math1.length < answers.length) {
    math1.push(...math1);
  }
  while (math2.length < answers.length) {
    math2.push(...math2);
  }
  while (math3.length < answers.length) {
    math3.push(...math3);
  }
  math1.length = answers.length;
  math2.length = answers.length;
  math3.length = answers.length;

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === math1[i]) { math1_score++ };
    if (answers[i] === math2[i]) { math2_score++ };
    if (answers[i] === math3[i]) { math3_score++ };
  }
  let max = Math.max(math1_score, math2_score, math3_score);

  if (math1_score === max) result.push(1);
  if (math2_score === max) result.push(2);
  if (math3_score === max) result.push(3);

  return result;
}
console.log(solution([1, 2, 3, 4, 5]));//	[1]
console.log(solution([1, 3, 2, 4, 2]));// [1,2,3]
