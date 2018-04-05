// express is just a node module, requiring express returns an application creator that we store in var express, which allows us to create an express app
var express = require("express");
// allows us to run methods like GET and POST
var app = express();
// handle our base GET route to index url. This is a callback function that runs once route is hit. Both are objects. We can console log if need be.
app.get('/', function(request, response){
	// send to the response, the string "hello express"
	// we handled the route, but we haven't told application to listen anywhere yet
	response.send("Hello Express")
})
// allows us to now listen
app.listen(8000, function(){
	console.log("listening on 8000")

})