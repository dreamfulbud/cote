//연속되는 수
function solution(str) {
  let result = '';
  result = str.split(' ').sort((a, b) => a - b).join(' ');

  if (str === result) return 'YES';
  else return 'NO';
}
console.log(solution("1 2 3 4 5")); //YES
console.log("---")
console.log(solution("1 4 2 6 3")); //NO
