// // 행렬 곱하기
function solution(a, b) {
	var result = [];
	if (a[0].length === b.length) {
		for (var i = 0; i < a.length; i++) {
			let row = [];
			for (var j = 0; j < b[0].length; j++) {
				let x = 0;
				for (var k = 0; k < b.length; k++) {
					x += a[i][k] * b[k][j];
				}
				row.push(x);
			}
			result.push(row);
		}
		return result;
	} else {
		return -1;
	}
}

console.log(
	solution(
		[
			[1, 2],
			[2, 4],
		],
		[
			[1, 0],
			[0, 3],
		]
	)
); //[ [ 1, 6 ], [ 2, 12 ] ]
console.log(solution([[1], [2], [3]], [[1, 2, 3]])); //
console.log(
	solution(
		[[1, 2, 3]],
		[
			[2, 3],
			[2, 3],
		]
	)
);
console.log(solution([[1, 2, 3]], [[1, 2, 3]])); //
