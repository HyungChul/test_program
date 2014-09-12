
var sys = require('sys');
var http = require('http');

var count = 0;

http.createServer(function(request, response){
	count++;
	sys.log(count);
	response.writeHead(200, {'Content-Type':'text/plain'});
	response.end('Hello\n');
}).listen(8214);

sys.log('Server running at http://127.0.0.1:8214/');