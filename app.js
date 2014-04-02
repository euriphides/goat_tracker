var express = require('express'),
	app = express(),
	path = "public/",
	port = 1025;

app.use(express.static(path));
app.use(express.directory(path));

app.listen(port);
console.log("express server started on: " + port);
