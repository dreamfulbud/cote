// 문자열 압축하기
function solution(str) {
  let result = '';
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      result += str[i];
      result += count;
      count = 1;
    }
  }

  return result;
}
console.log(solution('aaabbbbcdddd'));//a3b4c1d4

