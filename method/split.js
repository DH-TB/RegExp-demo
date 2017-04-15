//正则分隔，去除多余的空格
console.log('a,  b,c, d'.split(/, */));　　// [ 'a', 'b', 'c', 'd' ]

// 指定返回数组的最大成员
console.log('a,  b,c, d'.split(/, */, 2));　　//  [ 'a', 'b' ]