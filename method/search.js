console.log('_x_x'.search(/x/));// 1

let r = /x/g;
r.lastIndex = 2;   // 无效,还是从起始位置查找
console.log('_x_x'.search(r));