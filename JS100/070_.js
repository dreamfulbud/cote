// 행렬 곱하기
function solution(a, b) {
	let result = [];

	if (a[0].length !== b.length) {
		return -1;
	} else {
		for (let i = 0; i < a.length; i++) {
			let row = [];
			for (let j = 0; j < a[0].length; j++) {
				let x = 0;
				for (let k = 0; k < a[0].length; k++) {
					x += a[i][k] * b[k][j];
				}
				row.push(x);
			}
			result.push(row);
		}
		return result;
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

console.log(
	solution(
		[[1, 2, 3]],
		[
			[1, 0],
			[0, 3],
		]
	)
); //[ [ 1, 6 ], [ 2, 12 ] ]
