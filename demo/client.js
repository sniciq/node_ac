var http = require('http');

var options = {
	host: 'localhost',
    port: 8080,
    path:'/hello/我',
    method: 'GET',
    headers:{
        'accept': '*/*',
        'content-type': "html/txt"
    }
};

var req = http.request(options, function (res) {
    console.log('STATUS: ' + res.statusCode);
    equal(200, res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
 
    res.on('data',function (chunk) {
         console.log('BODY: ' + chunk);
    });
});

req.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});
 
 
req.end();
