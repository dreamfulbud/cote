let nums = [100, 200, 300, 400, 500];
nums.pop(); // 배열의 마지막 값 삭제!
nums.pop();

console.log(nums);

let nums2 = [100, 200, 300, 400, 500];
// slice(시작인덱스, 종료인덱스(미포함)) 
nums2 = nums2.slice(0, 3); // 배열에 직접정인 영향을 미치지 않음!
console.log(nums2);


let nums3 = [100, 200, 300, 400, 500];
//splice(시작인덱스, 제거할 요소 수, 추가할 아이템1, 아이템2 ...)
nums3.splice(3); // 배열에 영향을 미침 
//nums3.splice(3);
console.log(nums3);

