var fs = require('fs');

fs.readFile('../test.txt', function(err, data) {
  if(err) {
    return console.error(err);
  }
  console.log('1异步读取文件：' + data.toString());
})

var data = fs.readFileSync('../test.txt');
console.log('2同步读取文件：' + data.toString());

console.log('3程序执行完毕');
w