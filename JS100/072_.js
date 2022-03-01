// 너비 우선 탐색
function bfs(graph, start) {
	let result = [];
	let queue = [start];

	while (queue.length !== 0) {
		let n = queue.shift();
		if (!result.includes(n)) {
			result.push(n);
			let sub = graph[n].filter((x) => !result.includes(x));
			for (let i of sub) {
				queue.push(i);
			}
		}
	}

	return result;
}

console.log(bfs({ E: ["D", "A"], F: ["D"], A: ["E", "C", "B"], B: ["A"], C: ["A"], D: ["E", "F"] }, "E")); //E D A F C B
