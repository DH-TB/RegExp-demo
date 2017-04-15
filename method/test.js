var r = /x/g;
var s = '_x_x';
console.log(r.lastIndex); // 0
console.log(r.test(s));// true
console.log(r.lastIndex); // ２
console.log(r.test(s));　//ture
console.log(r.lastIndex); // 4
console.log(r.test(s));  //true
