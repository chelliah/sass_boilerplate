var express = require('express');
var path = require('path');
var app = express();

var index = require('./routes/index');

app.set("port", process.env.PORT || 5000);

app.use(express.static(path.join(__dirname, '/public')));
app.use('/', index);

app.listen(app.get("port"), function(){
    console.log("Listening on port: ", app.get("port"));
});