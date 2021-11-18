// 숫자 문자열과 영단어
// https://programmers.co.kr/learn/courses/30/lessons/81301?language=javascript

function solution(s) {
  var answer = 0;

  // 코드 구현
  s = s.replace(/zero/g, "0").replace(/one/g, "1").replace(/two/g, "2").replace(/three/g, "3").replace(/four/g, "4").replace(/five/g, "5").replace(/six/g, "6").replace(/seven/g, "7").replace(/eight/g, "8").replace(/nine/g, "9");
  answer = parseInt(s);

  /* 배열로... 멋지게 풀고 싶었는데...
    const numText = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  
    for (let i = 0; i < numText.length; i++) {
      if (s.indexOf(numText[i]) === -1) {
        answer = parseInt(s);
      } else {
  
      }
    }
  */
  // 코드 구현
  return answer;
}

console.log(solution("one4seveneight")); //	1478
console.log(solution("one4one1oneoneseveneight")); //	14111178
console.log(solution("23four5six7")); // 234567
console.log(solution("2three45sixseven")); // 234567
console.log(solution("123")); // 123