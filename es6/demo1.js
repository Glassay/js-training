/**
 * 2017-11-17 Jifeng Cheng
 * ES6的一些练习
 */

//...运算符：直接将数组中的元素输出成一个序列
var arr = [1,2,3,4];
console.log(...arr);
console.log(arr);
console.log(1,2,3);
console.log(`initial arr:${arr}`);
function push(array, ...items) {
  array.pop(...items);
}
push(arr);
console.log(arr);

function add(x, y) {
  return x + y;
}
const numbers = [4, 38];
console.log(add(...numbers)); // 42

//替代apply方法,如求数组中的最大值
Math.max.apply(null, [14, 3, 77]) //77
Math.max(...[14, 3, 77]); //77
