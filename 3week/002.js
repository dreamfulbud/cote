// 소수 만들기
// https://programmers.co.kr/learn/courses/30/lessons/12977

function solution(nums) {
  let answer = 0;

  // 3개 뽑기 / 3개의 합 구하기 / 그 합이 소수인지 확인 / 갯수 세기
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (isPrime(nums[i] + nums[j] + nums[k])) {
          answer++;
        }
      }
    }
  }

  // 소수 구별법
  // 소수 : 1과 그 수 자신 이외의 자연수로 나눌 수 없는 수
  // 2,3,5,7,11,13,17,19,23...
  function isPrime(x) {
    for (let i = 2; i < x; i++) {
      if (x % i === 0) {
        return false;
      }
    }
    return true;
  }
  return answer;
}

console.log(solution([1, 2, 3, 4])); //1
console.log(solution([1, 2, 7, 6, 4])); //4
