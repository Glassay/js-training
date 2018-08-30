var http = require('http');
var url = require('url');

function start(route) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log('Request for' + pathname + 'received.');

    route(pathname);

    response.writeHeader(200, {'Content-Type': 'text/plain'});
    response.write('hello world');
    response.end();
  }
  http.createServer(onRequest).listen(8088);
  console.log('Server is running at 8088');

  // __filename: 输出脚本所在位置的绝对路径
  console.log('server filename:', __filename);

  // __dirname: 输出脚本所在目录
  console.log('server dirname', __dirname);
}

exports.start = start;
