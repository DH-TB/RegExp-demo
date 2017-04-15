//几种方法的不同，前两种是string类型,后两种是RegExp类型
let s = 'abba';
let r = /a/g;
console.log(s.match(r)); // 返回所以匹配["a", "a"]
console.log(s.search(r));  //找到索引0
console.log(r.exec(s)); // 匹配一个就返回["a"]
console.log(r.test(s)); //true

//属性
let r = /abc/igm;
console.log(r.ignoreCase); // true
console.log(r.global); // true
console.log(r.multiline); // true
console.log(r.source); //"abc"
console.log(r.lastIndex);    //0      