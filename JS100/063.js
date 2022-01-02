//  친해지고 싶어
function solution(str) {
  let result = '';
  let arr = str.split(' ');
  for (let i = 0; i < arr.length; i++) {
    result += arr[i][0];
  }
  return result;
}
console.log(solution('복잡한 세상 편하게 살자'));//복세편살

