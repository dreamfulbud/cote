/*
숫자가 주어지면 소수인지 아닌지 판별하는 프로그램을 작성해주세요.
소수이면 YES로, 소수가 아니면 NO로 출력해주세요.
(소수 : 1과 자기 자신만으로 나누어떨어지는 1보다 큰 양의 정수)
 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31
*/

function solution(n) {
  if (n <= 1) {
    return "NO"
  }
  if (n === 2) {
    return "YES";
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return "NO";
    else return "YES";
  }

}
console.log(solution(-2));
console.log(solution(1));
console.log(solution(2)); //YES
console.log(solution(3)); //YES
console.log(solution(4));
console.log(solution(5)); //YES
console.log(solution(6));
console.log(solution(7));//YES
console.log(solution(11));//YES
console.log(solution(13));//YES
console.log(solution(17));//YES





