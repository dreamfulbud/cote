// 콤마찍기
function solution(num) {
	let result = "";
	let arr = String(num).split("").reverse();
	for (let i = 0; i < arr.length; i++) {
		if (i !== 0 && i % 3 === 0) {
			result += `,${arr[i]}`;
		} else {
			result += arr[i];
		}
	}
	result = result.split("").reverse().join("");

	return result;
}

console.log(solution("123456789")); //123,456,789
console.log(solution(123456789)); //123,456,789
console.log(solution("12345678")); //12,345,678
console.log(solution(12345678)); //12,345,678
console.log(solution("123")); //12,345,678
console.log(solution(1234)); //12,345,678
