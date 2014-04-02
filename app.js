var express = require('express'),
	app = express(),
	path = "public/",
	port = 1025;

var goatList = ['Betty', 'Mabel', 'Rex'];


app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.get('/goats/', function(req, res){
	console.log(req.url);
	res.render('layout');
});
app.get('/goats/list/', function(req, res){
	console.log(req.url);
	res.render('goat_list', {
		title: 'Goat List',
		list: goatList
	});
});

app.use(express.static(path));
app.use(express.directory(path));

app.listen(port);
console.log("express server started on: " + port);
