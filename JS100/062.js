// 20190923
/*
1. 코드 내에 숫자가 없어야 합니다.
    - 예) console.log(20190923)이라고 하시면 안됩니다.
2. 파일 이름이나 경로를 사용해서는 안됩니다.
3. 시간, 날짜 함수를 사용해서는 안됩니다.
4. 에러 번호 출력을 이용해서는 안됩니다.
5. input을 이용해서는 안됩니다.
 */
/*
61번 문자열 압축 이용
*/
function solution(str) {
  let result = '';
  let count = Number('');
  for (let i = Number(''); i < str.length; i++) {
    if (str[i] === str[i + Number(true)]) {
      count++;
    } else {
      result += count;
      count = Number('');
    }
  }

  return result;
}
console.log(solution('aaabaabbbbbbbbbbabbbbbbbbbbaaabbbb'));//20190923



