let reg = /d(b+)d/g;
let regexp = reg.exec("cdbbdbsbzdbd");

console.log(reg.lastIndex);
//下一个匹配的索引 5
reg.exec("cdbbdbsbzdbd");
console.log(reg.lastIndex);
//下一个匹配的索引 12,test也是这样

//exec返回的数组有两个属性
console.log(regexp.index);
//匹配成功的开始位置 1
console.log(regexp.input);
//初始字符串"cdbbdbsbzdbd"


let s = '_x_x';
let r1 = /x/;
let r2 = /y/;
console.log(r1.exec(s)); // ["x"]
console.log(r2.exec(s)); // null

let r = /a(b+)a/g;
let s = '_abbba_aba_';

while(true) {
    let match = r.exec(s);
    if (!match) break;
    console.log(match[0]); //第一次输出"abbba" //第二次输出"aba"
    console.log(match[1]); //"bbb"   //"b"
}



