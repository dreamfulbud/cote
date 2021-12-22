//대소문자 바꿔서 출력하기
function solution(str) {
  let result = '';
  let upper = str.toUpperCase();

  for (let i = 0; i < str.length; i++) {
    if (str[i] === upper[i]) {
      result += str[i].toLowerCase();
    } else {
      result += upper[i];
    }
  }
  return result;
}
console.log(solution("AAABBBcccddd")); //aaabbbCCCDDD
console.log(solution("aAbBcC")); //AaBbCc
