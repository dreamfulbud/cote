// 직사각형 별찍기
// https://programmers.co.kr/learn/courses/30/lessons/12969
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
	let a = data.split(" ")[0];
	let b = data.split(" ")[1];

	let result = [];

	for (let i = 0; i < b; i++) {
		result += "*".repeat(a) + "\n";
	}
	console.log(result);
});
