
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var request = require("request");
// routes will go here
app.get('/api/actions', function(req, res) {
  var token = req.param('token');
  var action = req.param('action');
  var url = 'https://api.telegram.org/bot'+token+'/'+action;

//res.send(url);

request({
    url: url,
    json: true
}, function (error, response, body) {

    if (!error && response.statusCode === 200) {
        res.send(body);// Print the json response
    }
})

});


// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);
