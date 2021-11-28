// [카카오 인턴] 키패드 누르기
// https://programmers.co.kr/learn/courses/30/lessons/67256

function solution(numbers, hand) {
  let answer = '';

  let leftPos = 10;
  let rightPos = 12;

  for (let n = 0; n < numbers.length; n++) {
    if (numbers[n] === 0) {
      numbers[n] = 11;
    }
    if (numbers[n] === 1 || numbers[n] === 4 || numbers[n] === 7) {
      leftPos = numbers[n];
      numbers[n] = "L";
    } else if (numbers[n] === 3 || numbers[n] === 6 || numbers[n] === 9) {
      rightPos = numbers[n];
      numbers[n] = "R";
    } else if (numbers[n] === 2 || numbers[n] === 5 || numbers[n] === 8 || numbers[n] === 11) {
      let l = Math.abs(numbers[n] - leftPos);
      let r = Math.abs(numbers[n] - rightPos);

      if (l === 1 || l === 3) {
        l = 1;
      } else if (l === 2 || l === 4 || l === 6) {
        l = 2;
      } else if (l === 5 || l === 7 || l === 9) {
        l = 3;
      } else if (l === 8 || l === 10) {
        l = 4;
      }

      if (r === 1 || r === 3) {
        r = 1;
      } else if (r === 2 || r === 4 || l === 6) {
        r = 2;
      } else if (r === 5 || r === 7 || r === 9) {
        r = 3;
      } else if (r === 8 || r === 10) {
        r = 4;
      }

      if (l === r) {
        if (hand === "right") {
          rightPos = numbers[n];
          numbers[n] = "R";
        } else {
          leftPos = numbers[n];
          numbers[n] = "L";
        }
      } else if (l > r) {
        rightPos = numbers[n];
        numbers[n] = "R";
      } else {
        leftPos = numbers[n];
        numbers[n] = "L";
      }
    }
  }

  answer = numbers.join("");
  return answer;
}
console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right")); // "LRLLLRLLRRL"
console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left")); //	"LRLLRRLLLRR"
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right")); // "LLRLLRLLRL"