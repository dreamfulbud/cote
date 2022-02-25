// 민규의 악수
function solution(num) {
	let result = [];
	if (num % 2 !== 0) {
		return "짝수가 아닙니다";
	}

	let prime = [];
	let isPrime = true;

	let group = [];
	let gapMin = [];
	let gapMax = [];

	for (let i = 1; i < num; i++) {
		for (let j = 2; j < i; j++) {
			if (i % j === 0) {
				isPrime = false;
			}
		}
		if (isPrime && i % 2 !== 0) {
			prime.push(i);
		}
		isPrime = true;
	}

	for (let i = 0; i < prime.length - 1; i++) {
		for (let j = 1; j < prime.length; j++) {
			if (prime[i] + prime[j] === num) {
				if (prime[i] === prime[j]) {
					group.push([prime[i]]);
				} else {
					group.push([prime[i], prime[j]]);
				}
			}
		}
	}
	gapMin = group[Math.floor(group.length / 2)];
	gapMax = group[0];

	result.push(gapMax, gapMin);

	return result;
}
console.log(solution(4)); // 1, 3
console.log(solution(10)); // 1, 3
console.log(solution(56)); // 19, 37
console.log(solution(100)); // 47, 53
