var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));

app.listen(port, function(){
  console.log('listening on port', port);
});

// const NAME = require('./routers/NAME.js'); // CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE
// app.use('/koalas', NAME); // CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE
