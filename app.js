var express = require('express'),
	app = express(),
	path = "public/",
	port = 1025;

var goatList = ['Betty', 'Mabel', 'Rex'];


app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(express.urlencoded());


app.get('/goats/', function(req, res){
	console.log(req.url);
	res.render('layout');
});
app.get('/', function(req, res){
	console.log(req.url);
	res.render('index');
});
app.get('/goats/list/', function(req, res){
	console.log(req.url);
	res.render('goat_list', {
		title: 'Goat List',
		list: goatList
	});
});
app.get('/goats/add/', function(req, res){
	console.log(req.url);
	res.render('goat_add', {
		title: 'Add a Goat',
		success: false
	});
});
app.post('/goats/add/', function(req, res){
	console.log(req.url);
	console.log(req.body.goatName);
	var goatName = req.body.goatName || false,
		success = goatName !== false;
	if(success) {
		goatList.push(goatName);
	}
	res.render('goat_add', {
		title: 'Add a Goat',
		success: success,
		goatName: goatName
	});
});

app.use(express.static(path));
app.use(express.directory(path));

app.listen(port);
console.log("express server started on: " + port);
