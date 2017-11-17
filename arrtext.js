var arr = [[1,2],[3,3,2],[3,2]];
var x = 1;
for (var i = 0; i < arr.length; i ++) {
  console.log(arr.length);
  for (var j = 0; j < arr[i].length; j ++) {
    console.log(arr[i].length);
    x = x * arr[i][j];
  }
}
console.log(x);