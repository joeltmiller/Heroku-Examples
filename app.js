/**
 * Created by joelmiller on 1/5/16.
 */

var http = require('http');

http.createServer(function(request, response){
	response.writeHead(200);
	response.write('Hello Heroku!');
	response.end();
}).listen(process.env.PORT || 3000);

console.log('Running on port 3000?!');
