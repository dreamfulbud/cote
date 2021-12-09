function solution(a) {
  let arr = a.split(' ');
  let result = [];
  result.push(parseInt(arr[0]) / parseInt(arr[1]));
  result.push(parseInt(arr[0]) % parseInt(arr[1]));
  return result.join(' ');
}
console.log(solution("10 2"));

