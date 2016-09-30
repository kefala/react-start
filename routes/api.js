var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.setHeader('Content-Type', 'application/json');
	res.send(JSON.stringify({ a: 1 }, null, 3));
});

router.get('/hola', function(req, res, next) {
	res.setHeader('Content-Type', 'application/json');
	res.send(JSON.stringify({ a: 1 }, null, 3));
});

module.exports = router;
