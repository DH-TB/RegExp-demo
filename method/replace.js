console.log('aaa'.replace('a', 'b')); // "baa"
console.log('aaa'.replace(/a/, 'b')); // "baa"
console.log('aaa'.replace(/a/g, 'b')); // "bbb"

//去掉首尾空格
let str = '  #id div.class  ';
console.log(str.replace(/^\s+|\s+$/g, ''));


let string = '3 and 5'.replace(/[0-9]+/g, function(match){
    return 2 * match;
});
console.log(string);  // "6 and 10"