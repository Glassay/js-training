var http = require('http');
var fs = require('fs');
var url = require('url');

// 创建 web 服务器
http.createServer(function(request, response) {
  // 解析请求
  var pathname = url.parse(request.url).pathname;

  // 输出请求的文件名
  console.log('Request for' + pathname + 'received.');

  // 从文件中读取请求内容
  fs.readFile(pathname.substr(1), function(err, data) {
    if(err) {
      // http 状态码
      console.log(err);
      response.writeHead(404, {'Content-Type': 'text/html'});
    } else {
      response.writeHead(200, {'Content-Type': 'text/html'});
      console.log('data', data);
      console.log('data', data.toString());
      response.write(data.toString());
    }
    response.end();
  })
}).listen(8080);

console.log('Server is running at http://127.0.0.1:8080');
