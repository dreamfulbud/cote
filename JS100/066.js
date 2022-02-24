// 변형된 리스트
function solution(top, rule) {
	let result = [];
	let ruleArr = rule.split("");

	for (let i = 0; i < top.length; i++) {
		let arr1 = [];
		let arr2 = [];

		for (let j = 0; j < ruleArr.length; j++) {
			if (top[i].indexOf(ruleArr[j]) > -1) {
				arr1.push(top[i].indexOf(ruleArr[j]));
			}
		}
		arr2 = arr1.slice().sort();
		if (arr1.join("") == arr2.join("")) {
			result.push("가능");
		} else {
			result.push("불가능");
		}
	}

	return result;
}

console.log(solution(["ABCDEF", "BCAD", "ADEFQRX", "BEDFG", "EFGHZ"], "ABD")); //["가능", "불가능", "가능", "가능", "가능"
