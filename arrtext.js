var arr = [[1,2],[3,3,2],[3,2]];
var x = 1;
for (var i = 0; i < arr.length; i ++) {
  console.log('第一次循环----->', arr.length);
  for (var j = 0; j < arr[i].length; j ++) {
    console.log('第二次循环', arr[i].length);
    x = x * arr[i][j];
    console.log(`第${j}次：${x}`);
  }
}
console.log('final:', x);