// 폰켓몬
// https://programmers.co.kr/learn/courses/30/lessons/1845

function solution(nums) {
  var answer = 0;
  answer = nums.length / 2;
  let type = [...new Set(nums)].length;
  if (answer < type) answer = answer;
  else answer = type;

  return answer;
}
console.log(solution([3, 1, 2, 3])); //2
console.log(solution([3, 3, 3, 2, 2, 4])); //3
console.log(solution([3, 3, 3, 2, 2, 2])); //2