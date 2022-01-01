// 0부터 1000까지의 수에서 1은 몇 번이나 들어갔을까
function solution(start, end) {
  let result = 0;
  let srt = '';

  for (let i = start; i <= end; i++) {
    srt += i;
  }
  for (let i = 0; i < srt.length; i++) {
    if (srt[i] === '1') {
      result++;
    }
  }
  return result;
}
console.log(solution(0, 20)); //12
console.log(solution(1, 1000)); //12