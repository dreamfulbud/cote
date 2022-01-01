//  빈칸채우기
function solution(str) {
  let result = '';

  let count = Math.floor((50 - str.length) / 2);
  result += '='.repeat(count);
  result += str;
  result += '='.repeat(50 - str.length - count);

  return result;
}
console.log(solution('hi'));
console.log(solution('123'));
console.log(solution('dddddddddddddddd')); 
