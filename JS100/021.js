/*
다음 중 set을 만드는 방법으로 올바른 것을 모두 고르시오.

1)  var x = {1, 2, 3, 5, 6, 7};
2)  var x = {};
3)  var x = new Set('javascript');
4)  var x = new Set(range(5));
5)  var x = new Set();

*/

// 정답 3,5! :

// var a = { 1, 2, 3, 5, 6, 7};  : SyntaxError: Unexpected token ','
var b = {}; // object
var c = new Set('javascript'); // Set(9) { 'j', 'a', 'v', 's', 'c', 'r', 'i', 'p', 't' } object
// var d = new Set(range(5)); : ReferenceError: range is not defined
var e = new Set(); //Set(0) {} object

