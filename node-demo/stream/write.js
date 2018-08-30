var fs = require('fs');
var data = '创建写入流向一个文件写入';

// 创建一个可写入的流，写入到 output.txt
var writeStream = fs.createWriteStream('output.txt');

// 使用 utf8 编码写入数据
writeStream.write(data, 'UTF8');

// 标记文本末尾
writeStream.end();

// 处理流事件 --> data, end and error
writeStream.on('finish', function() {
    console.log('写入完成');
})

writeStream.on('error', function(err) {
    console.log(err.stack);
})

console.log('程序执行完毕');
