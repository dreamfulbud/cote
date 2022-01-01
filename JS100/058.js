// 콤마찍기
function solution(num) {
  num = num + '';
  if (num.length <= 3) {
    return num;
  } else {
    return solution(num.slice(0, num.length - 3)) + ',' + num.slice(num.length - 3);
  }


}
console.log(solution('123456789')); //123,456,789
console.log(solution(123456789)); //123,456,789
