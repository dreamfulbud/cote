/*
Date객체의 메소드 중 하나인 getTime()은 1970년 1월 1일 0시 0분 0초 이후로부터 지금까지 흐른 시간을 천분의 1초 단위(ms)로 반환합니다.
이를 이용하여 **현재 연도를 출력해보세요.**
*/

function nowYear() {
  let date = new Date();
  console.log(Math.floor(date.getTime() / (365 * 24 * 60 * 60 * 1000)) + 1970 - 1);
  console.log(date.getFullYear());
}


nowYear();
