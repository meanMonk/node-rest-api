const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const CronJob = require('cron').CronJob;

var db;
    if(process.env.ENV == 'test'){
        db = mongoose.connect('mongodb://localhost/TestApi');
    }
    else {
        db = mongoose.connect('mongodb://localhost/nodeRestApi');
    }

const port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.urlencoded({extended : true}));

app.use(bodyParser.json());

const productRouter = require('./api/routes/snp.route.js')();

app.use('/api', productRouter);

app.get('/',function(req, res){

    res.send("node rest api is under development");

});

/*this is function to write the cron job*/
function startCron(){
    new CronJob('* * * * * *', function() {
        console.log('You will see this message every second');
    }, null, true, 'America/Los_Angeles');
}


app.listen(port, function(){
   console.log(`Gulp is running on port ${port}`);
});

module.exports = app;