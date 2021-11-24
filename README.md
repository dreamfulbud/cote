# JavaScript

- `.pop()` : 배열의 맨 끝에 값을 제거
- `.shift()` : 배열의 맨 앞에 값을 제거
- `.push()` : 배열의 맨 끝에 값을 추가
- `.unshift()` : 배열의 맨 앞에 값을 추가한다.
- `.slice(start[, end])` : 배열에 영항을 미치지 않음!
- `.splice(start[, deleteCount[,item1[,item2[, ...]]]])` : 삭제 및 추가할 때! 배열에 영향을 미침
- `typeof` : 자료형 확인

---

# 바닐라 JS로 크롬 앱 만들기

1. No. 2 - integers / 2.2 float
2. string : "2"
3. Yes. 'hello' = "hello"
4. No : 변수는 숫자값 말고도 선언 가능.
5. No : const는 변하지 않는 값.
6. Yes : let은 값을 변경할 수 있다.
7. No : "true" 는 string
8. No : null(값이 없음) != undefined(정의 되지 않음)
9. array : To oranize vlaues on a list.
10. 배열 2번째 요소 접근 arr[1]
11. 객제 프로퍼티 접근 : object["property"] - player["name"] / player.name

---

1. 2 : 왜 함수를 사용하는가? To encapsulate a piece of code.
2. 3 : 함수 실행 namOfFunc()
3. 3 : arguments 기능 : to Send a value to function
4. 2 : No 함수는 인수값에 제한이 없다.
5. 1 : 함수는 항상 인수값을 지정해야함. -----
6. 2 : return은 함수로부터 값을 받기 위해 사용한다.
7. 2 : No return과 console.log는 같지 않다.
8. 2 : parseInt("2") 는 문자 2를 숫자 2로 변경한다.
9. 3 : parseInt("hello") = NaN
10. 3 : NaN : Not a Number
11. 2 : bye
    ```js
    if (false) {
    	console.log("hi");
    } else {
    	console.log("bye");
    }
    ```
12. 2 : hello
    ```js
    if (8 > 10) {
    	console.log("hi");
    } else if (8 < 10) {
    	console.log("hello");
    } else {
    	console.log("bye");
    }
    ```
13. 2 : false `8 > 5 && 10 > 20`
14. 1 : true `5 > 2 || 10 < 23`
15. 2 : false `false && true`
16. 1 : true `true || false`

---

https://dreamfulbud.github.io/JS/coding1/

- console.dir(document) - 페이지 전체 정보를 볼수 있음.
- document.title - 페이지 타이틀 정보를 가져옴
- document.body - 페이지 body 정보를 가져옴
- document.getElementByID("id").innerText = "TEXT";
- document.getElementsByClassName("class");
- document.querySelector("#id");
- document.querySelectorAll(".class");

---

```js
const h1 = document.querySelector("h1");

function clickEventHandler() {
	const clickedClass = "clicked";
	if (h1.classList.contains(clickedClass)) {
		h1.classList.romove(clickedClass);
	} else {
		h1.classList.add(clickedClass);
	}
}
h1.addEventListener("click", clickEventHandler);
```

```js
const h1 = document.querySelector("h1");

function clickEventHandler() {
	h1.classList.toggle("active");
}
h1.addEventListener("click", clickEventHandler);
```

---

1. 1: Yes_From JS we can get elements from the HTML
2. 2: Document : What object do we use to access HTML form JS?
3. 2 : document.getElementById("title")
4. 3 : document.getElementsByClassName("button")
5. 2 : document.getElementsByTagName("a")
6. 2 : document.querySelectorAll(".home h1:first-child")
7. 1 : document.querySelector("home h1:first-child")
8. 1 : Yes_We can change the CSS of an elemet form JS
9. 2 : No. btn.addEventListener("click", handler)
10. 1 : Yes
11. 2 : No_document와 window는 같은 개념이 아니다.
12. 1 : className은 클래스 모두를 대체해버림. class="btn blue" --> clas="active" 그래서 classList를 사용해야함!
13. 3 : classList.toggle : 클래스가 존재여부에 따라 추가/제거
