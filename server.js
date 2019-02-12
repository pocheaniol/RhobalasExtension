// Imports

var express = require('express');

// Instantiate server

var server = express();

// Configuration routes

server.get('/', function(req,res){
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send('<h1>C\'est un test</h1>');
});

// Launch server

server.listen(8080, function(){
    console.log('Serveur en écoute');
});