// 이상한 엘레베이터
function solution(num) {
	let result = -1;
	let maxThree = Math.floor(num / 3);

	for (let i = 0; i <= maxThree; i++) {
		if ((num - 3 * i) % 7 === 0) {
			return i + (num - 3 * i) / 7;
		}
	}
	return result;
}

console.log(solution(3)); //1
console.log(solution(6)); //2
console.log(solution(8)); //-1
console.log(solution(24)); //4
console.log(solution(21)); //3
console.log(solution(11)); //-1
