var express = require('express');
var path = require('path');
var app = express();

var index = require('./routes/index');
var projects = require('./routes/projects');

app.set("port", process.env.PORT || 5000);



app.use(express.static(path.join(__dirname, '/public')));
app.use('/projects', projects);
app.use('/', index);

app.listen(app.get("port"), function(){
    console.log("Listening on port: ", app.get("port"));
});