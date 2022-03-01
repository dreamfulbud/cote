// 행렬 곱하기
function dfs(graph, start) {
	let result = [];
	let stack = [start];

	while (stack.length !== 0) {
		let n = stack.pop();
		if (!result.includes(n)) {
			result.push(n);
			let sub = graph[n].filter((x) => !result.includes(x));
			for (let i of sub) {
				stack.push(i);
			}
		}
	}

	return result;
}

console.log(dfs({ E: ["D", "A"], F: ["D"], A: ["E", "C", "B"], B: ["A"], C: ["A"], D: ["E", "F"] }, "E")); //E A B C D F
