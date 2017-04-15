var s = '_x_x';
var r1 = /x/;
var r2 = /y/;

console.log(s.match(r1)); // ["x"]
console.log(s.match(r2)); // null


let reg = /d(b+)d/g;

console.log(reg.exec("cdbbdbsbzdbd"));
//["dbbd", "bb"]
console.log("cdbbdbsbzdbd".match(reg));
//["dbbd", "dbd"]
