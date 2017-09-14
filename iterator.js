/*2017-9-14 Jfeng Cheng
*
*/
var arr = [1, 2, 3, 4, 5,6,7];
//var arr1 = ['a','b','c'];

//console.log(`arr.concat(arr,arr1) => [${arr.concat(arr1)}]`);
console.log(`arr.forEach => ${arr.forEach(function(ele){
    console.log(ele);
})}`);

console.log(arr.map(function(ele){
    return 2 * ele;
}));

console.log(arr.filter(function(ele){
    return ele >=3;
}));

console.log(arr.reduce(function(pre,next){
    return pre + next;
}));

console.log(arr.every(function(item){
    return item > 0;
}));

console.log(arr.some(function(item){
    return item > 3;
}));

