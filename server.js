var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var db = mongoose.connect('mongodb://localhost/nodeRestApi');

var port = process.env.PORT || 3000;

var productModel = require('./api/models/snp.model.js');



var app = express();

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

var productRouter = require('./api/routes/snp.route.js')(productModel);

app.use('/api', productRouter);

app.get('/',function(req, res){
   res.send("node rest api is under development") 
});

app.listen(port, function(){
   console.log(`Gulp is running on port ${port}`);
});