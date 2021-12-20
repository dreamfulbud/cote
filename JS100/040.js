function solution(weight, n, arr) {
  let count = 0;
  for (let i of arr) {
    if (weight - i >= 0) {
      weight = weight - i;
      count++;
    }
  }
  return count;

}
console.log(solution(50, 5, [20, 20, 20, 20, 20])); //2
console.log(solution(100, 5, [20, 20, 20, 20, 20])); //5
console.log(solution(80, 3, [40, 20, 25])); //2




