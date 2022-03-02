// 최단 경로 찾기 : 너비우선탐색
function solution(graph, path) {
	const start = path.split(" ")[0];
	const end = path.split(" ")[1];

	let queue = [start];
	let visited = [start];
	let count = -1;

	while (queue.length !== 0) {
		count += 1;

		for (let i = 0; i < queue.length; i++) {
			let node = queue.splice(0, 1);
			if (node === end) {
				return count;
			}
			for (let next_node in graph[node]) {
				if (!visited.includes(graph[node][next_node])) {
					visited.push(graph[node][next_node]);
					queue.push(graph[node][next_node]);
				}
			}
		}
	}
	return count;
}

const graph = { A: ["B", "C"], B: ["A", "D", "E"], C: ["A", "F"], D: ["B"], E: ["B", "F"], F: ["C", "E"] };

console.log(solution(graph, "A F")); //
