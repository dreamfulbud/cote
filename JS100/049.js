//최댓값 구하기
function solution(str) {
  let result = 0;

  let arr = str.split(' ');

  result = Math.max(...arr);

  return result;
}
console.log(solution("10 9 8 7 6 5 4 3 2 1")); //10
console.log(solution("32 21 19 8")); //32

